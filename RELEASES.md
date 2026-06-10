# HelpinHire Releases

Official releases with downloadable assets.

---

## v1.1.0 - Brand Logo Package Release 📦

**Release Date**: June 10, 2026

### What's New
Professional logo package including both full brand logo and icon designs.

### 📥 Download Logo Assets

All files are located in the `/public/` directory:

#### Full Logo
- **File**: `logo.svg` (7 KB)
- **Format**: Scalable Vector Graphics (SVG)
- **Dimensions**: 200×200px (scales to any size)
- **Best For**: Marketing materials, web headers, presentations, print
- **Download**: [logo.svg](./public/logo.svg) 

#### Icon Logo  
- **File**: `logo-icon.svg` (6 KB)
- **Format**: Scalable Vector Graphics (SVG)
- **Dimensions**: 200×200px (scales to any size)
- **Best For**: Favicons, social media profiles, app icons
- **Download**: [logo-icon.svg](./public/logo-icon.svg)

### 📋 Asset Documentation
Complete usage guidelines, color specifications, and integration instructions:
- **[BRAND_ASSETS.md](./public/BRAND_ASSETS.md)** - Full brand asset guidelines

### 🎨 Design Specifications

**Colors Used:**
- Navy Primary: `#0B1F3B`
- Action Orange: `#F97316`
- Cloud Light: `#F3F5F8`
- White: `#FFFFFF`

**Logo Symbolism:**
- Two professional profiles represent employer-candidate connection
- Connection lines symbolize networking
- Handshake curve denotes partnership
- Growth arrow indicates progression
- Modern, minimalist design style

### 💻 Integration Examples

**Web Usage:**
```html
<img src="/logo.svg" alt="HelpinHire" width="200" height="200" />
```

**Favicon:**
```html
<link rel="icon" type="image/svg+xml" href="/logo-icon.svg" />
```

**Social Media:**
```html
<!-- Use logo-icon.svg at 200×200px -->
<!-- Perfect for LinkedIn, Twitter, GitHub profiles -->
```

### 🔄 What's Changed
- New professional logo integrated into website header
- Logo visible on all pages next to brand name
- Complete brand asset package available for download

### 📝 Export Instructions

**To PNG (High Quality):**
```bash
# Using ImageMagick
convert -density 300 logo.svg -background transparent logo.png
```

**To ICO (Favicon):**
```bash
# Using ImageMagick
convert -density 300 logo-icon.svg -define icon:auto-resize=256,128,96,64,48,32,16 favicon.ico
```

**Using Online Tools:**
- Visit [cloudconvert.com](https://cloudconvert.com) - Upload SVG, export to PNG/JPG/ICO
- Visit [convertio.co](https://convertio.co) - Quick SVG conversions
- Visit [svgtopng.com](https://svgtopng.com) - SVG to PNG conversion

### ✅ Quality Assurance
- ✓ Tested at multiple scales (16px to 1000px+)
- ✓ Works on all modern browsers
- ✓ Maintains color accuracy across platforms
- ✓ Compatible with all standard design tools
- ✓ Favicon-ready format

### 🔗 Related Resources
- [README.md](./README.md) - Project overview
- [CHANGELOG.md](./CHANGELOG.md) - Version history
- [public/BRAND_ASSETS.md](./public/BRAND_ASSETS.md) - Detailed brand guidelines

---

## v1.0.0 - Initial Release

**Release Date**: June 1, 2026

### Features
- Modern recruitment marketing website
- Responsive design (mobile, tablet, desktop)
- Services showcase
- Contact form
- Accessibility compliant
- Built with React + Tailwind CSS

### 📥 Assets
Website deployed and live

---

## 📞 Support

For questions about logo usage or brand assets, please refer to [BRAND_ASSETS.md](./public/BRAND_ASSETS.md) or open an issue on GitHub.

**Last Updated**: June 10, 2026
