import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cabara_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cabara_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cabara_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-banner__text">
        We use cookies to personalise content and ads (including Google AdSense), analyse traffic,
        and improve your experience. By clicking "Accept", you agree to our use of cookies.{' '}
        <Link href="/privacy-policy">Learn more</Link>
      </p>
      <div className="cookie-banner__actions">
        <button className="btn btn--outline" onClick={decline}>Decline</button>
        <button className="btn btn--primary" onClick={accept}>Accept cookies</button>
      </div>
    </div>
  )
}
