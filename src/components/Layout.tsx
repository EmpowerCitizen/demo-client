import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface SiteSettings {
  title: string
  description: string
  logo?: {
    asset: { _id: string; url: string }
    alt: string
  }
  primaryColor?: string
  secondaryColor?: string
  contactEmail?: string
  contactPhone?: string
  socialMedia?: {
    instagram?: string
    facebook?: string
    twitter?: string
    linkedin?: string
  }
}

interface Props {
  children: ReactNode
  siteSettings: SiteSettings
}

export default function Layout({ children, siteSettings }: Props) {
  return (
    <div className="min-h-screen bg-black">
      <Header siteSettings={siteSettings} />
      <main>{children}</main>
      <Footer siteSettings={siteSettings} />
    </div>
  )
}