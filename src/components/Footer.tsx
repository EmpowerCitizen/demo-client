import Link from 'next/link'

interface SiteSettings {
  title: string
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
  siteSettings: SiteSettings
}

export default function Footer({ siteSettings }: Props) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {siteSettings.title}
            </h3>
            <p className="text-gray-400 text-sm">
              Creating beautiful visual experiences through photography and design.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              {siteSettings.contactEmail && (
                <p className="text-gray-400 text-sm">
                  <Link
                    href={`mailto:${siteSettings.contactEmail}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteSettings.contactEmail}
                  </Link>
                </p>
              )}
              {siteSettings.contactPhone && (
                <p className="text-gray-400 text-sm">
                  <Link
                    href={`tel:${siteSettings.contactPhone}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteSettings.contactPhone}
                  </Link>
                </p>
              )}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {siteSettings.socialMedia?.instagram && (
                <Link
                  href={siteSettings.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </Link>
              )}
              {siteSettings.socialMedia?.facebook && (
                <Link
                  href={siteSettings.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </Link>
              )}
              {siteSettings.socialMedia?.twitter && (
                <Link
                  href={siteSettings.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </Link>
              )}
              {siteSettings.socialMedia?.linkedin && (
                <Link
                  href={siteSettings.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} {siteSettings.title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}