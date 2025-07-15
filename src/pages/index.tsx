import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { motion } from 'framer-motion'
// import { client, queries, urlFor } from '@/lib/sanity' // Disabled for static demo
import Layout from '@/components/Layout'

interface Gallery {
  _id: string
  title: string
  slug: { current: string }
  description: string
  coverImage: {
    asset: { _id: string; url: string }
    alt: string
  }
}

interface SiteSettings {
  title: string
  description: string
  logo?: {
    asset: { _id: string; url: string }
    alt: string
  }
  primaryColor?: string
  secondaryColor?: string
}

interface Props {
  galleries: Gallery[]
  siteSettings: SiteSettings
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Home({ galleries, siteSettings }: Props) {
  return (
    <Layout siteSettings={siteSettings}>
      <Head>
        <title>{siteSettings.title}</title>
        <meta name="description" content={siteSettings.description} />
        <meta property="og:title" content={siteSettings.title} />
        <meta property="og:description" content={siteSettings.description} />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            {/* Logo placeholder - will be replaced with Sanity image */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {siteSettings.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              {siteSettings.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="#galleries"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Explore Galleries
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Galleries Section */}
        <section id="galleries" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Galleries
              </h2>
              <p className="text-xl text-gray-400">
                Discover our curated collection of stunning imagery
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {galleries.map((gallery) => (
                <motion.div key={gallery._id} variants={itemVariants}>
                  <Link href={`/gallery/${gallery.slug.current}`}>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={gallery.coverImage.asset.url}
                          alt={gallery.coverImage.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                          {gallery.title}
                        </h3>
                        {gallery.description && (
                          <p className="text-gray-400 mt-2 line-clamp-2">
                            {gallery.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Static demo data to showcase the template without Sanity
  const siteSettings = {
    title: 'Demo Gallery Studio',
    description: 'Stunning photography and visual storytelling',
    logo: null,
    primaryColor: '#ffffff',
    secondaryColor: '#000000'
  }

  const galleries = [
    {
      _id: '1',
      title: 'Nature Photography',
      slug: { current: 'nature-photography' },
      description: 'Breathtaking landscapes and wildlife captured in their natural beauty',
      coverImage: {
        asset: { 
          _id: '1', 
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop&auto=format'
        },
        alt: 'Mountain landscape with lake reflection'
      }
    },
    {
      _id: '2',
      title: 'Urban Architecture',
      slug: { current: 'urban-architecture' },
      description: 'Modern cityscapes and architectural marvels from around the world',
      coverImage: {
        asset: { 
          _id: '2', 
          url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=600&fit=crop&auto=format'
        },
        alt: 'Modern glass building architecture'
      }
    },
    {
      _id: '3',
      title: 'Portrait Collection',
      slug: { current: 'portrait-collection' },
      description: 'Intimate portraits capturing human emotion and character',
      coverImage: {
        asset: { 
          _id: '3', 
          url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop&auto=format'
        },
        alt: 'Professional portrait photography'
      }
    },
    {
      _id: '4',
      title: 'Abstract Art',
      slug: { current: 'abstract-art' },
      description: 'Experimental photography exploring color, form, and texture',
      coverImage: {
        asset: { 
          _id: '4', 
          url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop&auto=format'
        },
        alt: 'Abstract colorful composition'
      }
    },
    {
      _id: '5',
      title: 'Street Photography',
      slug: { current: 'street-photography' },
      description: 'Candid moments of urban life and human interaction',
      coverImage: {
        asset: { 
          _id: '5', 
          url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=600&fit=crop&auto=format'
        },
        alt: 'Street scene with people walking'
      }
    },
    {
      _id: '6',
      title: 'Minimalist Scenes',
      slug: { current: 'minimalist-scenes' },
      description: 'Clean, simple compositions that speak through negative space',
      coverImage: {
        asset: { 
          _id: '6', 
          url: 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?w=600&h=600&fit=crop&auto=format'
        },
        alt: 'Minimalist architectural detail'
      }
    }
  ]

  return {
    props: {
      galleries,
      siteSettings,
    },
    revalidate: 60,
  }
}