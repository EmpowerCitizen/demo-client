# Demo Client Project - CLAUDE.md
# Version: v2.0-2025-07-15
# Project Type: Client Showcase Project

## Multi-Repo Configuration
**Repository**: empowercitizen/demo-client
**Location**: ~/Development/Clients/demo-client
**Parent Hub**: empowercitizen/ec-ai-agent-hub

## 🚨 CRITICAL: NO LYING POLICY
**Status**: ✅ VERIFIED WORKING - Stop hooks implemented and tested
**Hook Event**: Stop (validates complete responses) 
**Enforcement**: Exit code 2 blocks false claims and provides feedback to Claude
**Test Status**: ✅ Confirmed blocking of false monitoring claims
**Last Verified**: 2025-07-12 with actual violation test

## Project Purpose
This template creates a **Client Website Factory** for rapid deployment of professional websites with Sanity CMS integration. Designed for solopreneurs to deliver high-quality client projects efficiently.

## Technical Stack
- **Frontend**: Next.js 13+ with TypeScript
- **CMS**: Sanity CMS with embedded Studio
- **Styling**: Tailwind CSS with custom theme system
- **Images**: Sanity Image CDN with optimization
- **Animations**: Framer Motion
- **Icons**: Heroicons

## Project Structure
```
Website-Template/
├── src/                    # Next.js application
│   ├── components/         # Reusable React components
│   ├── lib/               # Sanity client and utilities
│   ├── pages/             # Next.js pages (index, gallery, etc.)
│   └── styles/            # Global CSS and Tailwind config
├── sanity/                # Sanity CMS configuration
│   └── schemas/           # Content type definitions
├── clone-for-client.sh    # Client project automation script
├── .env.template          # Environment variables template
└── README.md              # Complete documentation
```

## Sanity CMS Integration
- **Organization**: empowercitizen (main account)
- **Per Client**: Separate Sanity project with isolated content
- **Schemas**: Gallery, Page, Site Settings, Custom Image
- **Studio**: Embedded at `/studio` route for client access

## White Label Business Model
- **Client Cost**: $0-$15/month (Sanity fees)
- **Client Pricing**: $50-$200/month (website + CMS service)
- **Profit Margin**: $35-$185/month per client
- **Value**: Professional website + easy content management

## Automation Features
- **Clone Script**: `./clone-for-client.sh <client-name> [sanity-project-id]`
- **Environment Setup**: Automatic .env.local configuration
- **Git Initialization**: Fresh repository for each client
- **Dependency Installation**: npm install automation
- **README Generation**: Client-specific documentation

## Development Commands
```bash
# Template development
npm run dev              # Development server
npm run build           # Production build
npm run lint            # Code linting
npm run type-check      # TypeScript validation

# Client project creation
./clone-for-client.sh salsambo-studio abc123  # Create new client
```

## Customization Points
### Client Branding (via Sanity Studio)
- Logo upload and configuration
- Primary/secondary brand colors
- Site title and description
- Contact information
- Social media links

### Content Management
- Image galleries with metadata
- Static pages with rich content
- Navigation menu configuration
- SEO settings per page

### Code Customization (Optional)
- Tailwind theme modifications
- Custom component development
- Additional page templates
- Third-party integrations

## Deployment Strategy
- **Primary**: Vercel (recommended for Next.js)
- **Alternative**: Netlify, Railway, DigitalOcean
- **Domain**: Client-specific domains
- **SSL**: Automatic HTTPS configuration
- **CDN**: Global content delivery

## Client Onboarding Process
1. **Project Creation**: Run clone script
2. **Sanity Setup**: Create new project, configure environment
3. **Content Entry**: Initial site settings, galleries, pages
4. **Deployment**: Deploy to hosting platform
5. **Training**: Client Studio access and content management
6. **Handoff**: Documentation and support setup

## Template Maintenance
- **Updates**: Selective merging to existing client projects
- **Testing**: Compatibility verification before client deployment
- **Version Control**: Template improvements tracked separately
- **Documentation**: Keep README and client guides current

## Quality Standards
- **TypeScript**: Full type safety throughout
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized images and lazy loading
- **SEO**: Built-in meta tags and structured data
- **Accessibility**: WCAG compliance considerations

## Security Practices
- **Environment Variables**: No secrets in code repository
- **Sanity Access**: Isolated projects per client
- **API Tokens**: Read-only for frontend, admin for Studio
- **HTTPS**: Enforced on all deployments

## Scaling Considerations
- **Template Variations**: Gallery, business, portfolio, e-commerce
- **Component Library**: Reusable UI components across templates
- **Process Documentation**: Standardized workflows
- **Client Support**: Documented troubleshooting and training

## Integration Points
- **Analytics**: Google Analytics setup option
- **Email**: Contact form integration capability
- **Social**: Social media embedding
- **SEO**: Schema.org structured data

## Business Process Integration
- **Proposal Generation**: Template showcases for client pitches
- **Pricing Calculator**: Service pricing based on complexity
- **Contract Templates**: Legal protection for template usage
- **Support Documentation**: Client success materials

## Success Metrics
- **Setup Time**: <4 hours from clone to deployed client site
- **Client Satisfaction**: Self-sufficient content management
- **Revenue Growth**: Recurring monthly income per client
- **Template Quality**: 80% of client needs met without customization

## Next Steps for Enhancement
- **Additional Templates**: Portfolio, business, e-commerce variations
- **Component Library**: Shared UI components across templates
- **Automation**: Further streamline client onboarding
- **Documentation**: Video tutorials for client training

## Dependencies Management
- **Core**: Next.js, React, Sanity, Tailwind CSS
- **UI**: Headless UI, Heroicons, Framer Motion
- **Development**: TypeScript, ESLint, Prettier
- **Updates**: Regular dependency updates for security and features

## Testing Strategy
- **Template Testing**: Verify all functionality before client use
- **Client Testing**: Test each client project before launch
- **Browser Testing**: Cross-browser compatibility verification
- **Mobile Testing**: Responsive design validation

This template represents a complete **white-label website factory** designed for solopreneurs to efficiently deliver professional client websites while maintaining high standards and enabling client independence through Sanity CMS.