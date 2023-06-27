import { PropsWithChildren } from 'react'

const MainContainer = ({ children }: PropsWithChildren) => (
  <div className="w-2/4 mx-auto">{children}</div>
)

export default MainContainer
