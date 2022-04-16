import { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Wrapper from "./Wrapper"

interface ILayoutProps {
    children: ReactNode
}

const Layout = ({children}: ILayoutProps) => {
  return (
    <>
      {/* <Navbar /> */}
      <Wrapper>{children}</Wrapper>
      {/* <Footer /> */}
    </>
  )
}

export default Layout