# Changelog

All notable changes to HelpinHire will be documented in this file.

## [1.1.0] - 2026-06-10

### Added
- **Professional Logo Package**: New brand identity assets including:
  - **logo.svg** - Full horizontal logo with text and branding (200x200px, scalable)
  - **logo-icon.svg** - Icon-only version for favicons, social media, and app icons (200x200px, scalable)
  - Both logos feature the brand's navy, orange, and white color scheme representing professional connection and growth
  - Logo design incorporates modern elements: two professional profiles, connection lines, and an upward growth arrow
  - Perfect for use as favicon, social media profile picture, or marketing materials

### Changed
- Updated header navigation to display new logo-icon alongside brand name
- Logo provides better brand recognition and visual identity on all platforms

### Design Details
- **Color Palette**: Navy (#0B1F3B), Orange Action (#F97316), Cloud (#F3F5F8), White
- **Style**: Modern, minimalist professional design
- **Usage**: Scalable SVG format works at any resolution
- **Files Location**: `/public/logo.svg` and `/public/logo-icon.svg`

### How to Use the Logos

#### For Websites & Web Applications:
```html
<!-- Full Logo -->
<img src="/logo.svg" alt="HelpinHire Logo" width="200" height="200" />

<!-- Icon Only -->
<img src="/logo-icon.svg" alt="HelpinHire" width="40" height="40" />
```

#### For Favicon:
```html
<link rel="icon" type="image/svg+xml" href="/logo-icon.svg" />
```

#### For Social Media:
Use `logo-icon.svg` at 200x200px for optimal profile pictures on all platforms (LinkedIn, Twitter, GitHub, etc.)

#### For Print & Marketing:
Both SVG files can be exported to PNG, JPG, or PDF at any resolution for printed materials, presentations, and marketing collateral.

---

## [1.0.0] - 2026-06-01

### Initial Release
- Launch of HelpinHire marketing website
- Navigation and hero section
- Services showcase
- Contact form
- Responsive design with Tailwind CSS
- Accessibility features implemented
