import { useUserStore } from '@/stores'
import { TextBox } from '@components/containers/textboxes'
import { SpinnerButton } from '@components/presentationals/buttons'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import RemoteSrc from '../../assets/remotely.svg'
import GoogleIcon from '../../assets/google-icon.svg'
import GithubIcon from '../../assets/github-icon.png'
import { Link } from 'react-router-dom'

export const SignUpPage: FC = () => {
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmationPassword: ''
    },
    mode: 'onChange'
  })

  const { loading, signUp } = useUserStore()
  const { password } = getValues()

  return (
    <section className="w-full h-full flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full lg:flex md:block sm:block justify-center items-center gap-5">
        <div className="lg:block md:hidden sm:hidden w-[600px]">
          <div className="flex justify-center">
            <img className="md:w-[600px] sm:w-[300px]" src={RemoteSrc} alt="My Happy SVG" />
          </div>
        </div>
        <div className="flex lg:justify-start md:justify-center sm:justify-center p-5">
          <div className="w-[500px]">
            <div className="w-full h-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 flex">
              <div className="w-full p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-8">
                  Sign up to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(signUp)}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <TextBox
                      control={control}
                      name="email"
                      type="email"
                      rules={{
                        required: {
                          value: true,
                          message: 'Required email.'
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: 'Email is invalid.'
                        }
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <TextBox
                      control={control}
                      name="password"
                      type="password"
                      rules={{
                        required: {
                          value: true,
                          message: 'Required password.'
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*-._])[0-9a-zA-Z~!@#$%^&*-._]{10,}/,
                          message: 'Password is invalid.'
                        }
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirmation Password
                    </label>
                    <TextBox
                      control={control}
                      name="confirmationPassword"
                      type="password"
                      rules={{
                        required: {
                          value: true,
                          message: 'Required confirmtion password.'
                        },
                        validate: (value) => {
                          return value === password || 'Passwords do not match'
                        }
                      }}
                    />
                  </div>
                  <SpinnerButton loading={loading}>Sign up</SpinnerButton>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Had an account ?
                    <Link
                      to="/sign-in"
                      className="ml-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign in
                    </Link>
                  </p>
                  <div className="relative flex justify-center">
                    <div className="w-full h-[2px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-gray-300 z-1" />
                    <div className="relative z-1 bg-white px-5">Or continue with</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="w-full border border-slate-200 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center gap-2">
                      <img className="w-[20px] h-[20px]" src={GoogleIcon} />
                      <span>Sign in with Google</span>
                    </button>
                    <button className="w-full bg-white hover:bg-gray-200 border border-slate-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center gap-2">
                      <img className="w-[20px] h-[20px]" src={GithubIcon} />
                      <span>Sign in with Git</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
