import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Commonly used GROQ queries
export const queries = {
  // Get all galleries
  galleries: `*[_type == "gallery"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    featured,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    },
    images[] {
      asset->{
        _id,
        url
      },
      alt,
      caption
    }
  }`,
  
  // Get featured galleries for homepage
  featuredGalleries: `*[_type == "gallery" && featured == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }`,
  
  // Get gallery by slug
  galleryBySlug: `*[_type == "gallery" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    images[] {
      asset->{
        _id,
        url
      },
      alt,
      caption
    }
  }`,
  
  // Get site settings
  siteSettings: `*[_type == "siteSettings"][0] {
    title,
    description,
    logo {
      asset->{
        _id,
        url
      },
      alt
    },
    primaryColor,
    secondaryColor,
    contactEmail,
    contactPhone,
    socialMedia
  }`,
  
  // Get pages for navigation
  navigationPages: `*[_type == "page" && featured == true] | order(title asc) {
    _id,
    title,
    slug
  }`,
  
  // Get page by slug
  pageBySlug: `*[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    content,
    seoTitle,
    seoDescription
  }`,
}