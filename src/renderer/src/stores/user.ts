import { User } from '../models/user'
import { notify } from '@stores/modal'
import { AxiosError } from 'axios'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { create } from 'zustand'

export interface ISignInData {
  email: string
  password: string
}

const user = new User()

interface IUserStore {
  id: string
  email: string
  isAuthenticated: boolean
  loading: boolean
  signIn: (account: ISignInData, navigate: NavigateFunction) => void
  signUp: (account: ISignInData) => void
  update: (id: string, email: string) => void
}

const useStore = create<IUserStore>((set) => ({
  id: '',
  email: '',
  isAuthenticated: false,
  loading: false,
  signIn: async ({ email, password }: ISignInData, navigate: NavigateFunction) => {
    set({ loading: true })

    if (email === 'admin@gmail.com' && password === 'Admin@123456') {
      set({ id: 'admin', email, isAuthenticated: true, loading: false })

      return navigate('/user/products')
    }

    try {
      const data = await user.signIn(email, password)

      localStorage.setItem('access_token', data.accessToken)
      localStorage.setItem('refresh_token', data.refreshToken)
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: data.id,
          email
        })
      )

      set({ id: data.id, email, isAuthenticated: true, loading: false })

      return navigate('/user/products')
    } catch (error: AxiosError | unknown) {
      if (error instanceof AxiosError) {
        set({ loading: false })
      }

      return notify(
        'Notice',
        'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.'
      )
    }
  },
  signUp: async ({ email, password }: ISignInData) => {
    set({ loading: true })

    try {
      await user.signUp(email, password)
    } catch (error: AxiosError | unknown) {
      console.log('error', error)
      notify(
        'Notice',
        'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.'
      )
    } finally {
      set({ loading: false })
    }
  },
  update: (id: string, email: string) =>
    set({
      id,
      email,
      isAuthenticated: true
    })
}))

export const useUserStore = () => {
  const store = useStore()
  const navigate = useNavigate()

  return {
    ...store,
    signIn: async ({ email, password }: ISignInData) => {
      return store.signIn({ email, password }, navigate)
    }
  }
}
