# Demo Client Website

**White-Label Website Factory for Client Projects**

This is a custom website built with Next.js and Sanity CMS, designed as a template for rapid deployment of professional client websites.

## Project Overview

Demo client project showcasing modern web development capabilities with:
- **Frontend**: Next.js 13+ with TypeScript
- **CMS**: Sanity CMS with embedded Studio
- **Styling**: Tailwind CSS with custom theme system
- **Purpose**: White-label website factory for solopreneurs

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.template` to `.env.local`
   - Update the Sanity project ID and other variables

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

5. Access Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio)

## Business Model

- **Client Cost**: $0-$15/month (Sanity fees)
- **Client Pricing**: $50-$200/month (website + CMS service)
- **Value**: Professional website + easy content management

## Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- Any hosting platform that supports Next.js

## Content Management

The website content is managed through Sanity CMS. The client can access the admin interface at `/studio` to:
- Update site settings (logo, colors, contact info)
- Manage image galleries
- Edit page content
- Update navigation

## Client Automation

Use the clone script for rapid client project creation:
```bash
./clone-for-client.sh <client-name> [sanity-project-id]
```

## Support

For technical support, contact: [your-email@domain.com]

---

Built with ❤️ using Next.js and Sanity CMS | Part of the EC Multi-Repo Client Ecosystem
