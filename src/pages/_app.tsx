import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Apply custom brand colors from site settings
    if (pageProps.siteSettings?.primaryColor) {
      document.documentElement.style.setProperty('--color-primary', pageProps.siteSettings.primaryColor)
    }
    if (pageProps.siteSettings?.secondaryColor) {
      document.documentElement.style.setProperty('--color-secondary', pageProps.siteSettings.secondaryColor)
    }
  }, [pageProps.siteSettings])

  return <Component {...pageProps} />
}