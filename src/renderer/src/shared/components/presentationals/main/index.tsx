import { PageContent, PageHeading } from '@shared/components/presentationals'
import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  pathname: string
}

export const Main: FC<IProps> = (props) => {
  const { children, pathname } = props

  return (
    <div className="w-full p-10">
      <PageHeading pathname={pathname} />
      <PageContent>{children}</PageContent>
    </div>
  )
}
