import { ReactNode } from "react"
import Footer from "./footer/Footer";
import Header from './header/Header';

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const style = {
    padding: '1rem 2rem',
  }
  return <>
    <Header />
    <main style={style}>{children}</main>
    <Footer />
  </>
}