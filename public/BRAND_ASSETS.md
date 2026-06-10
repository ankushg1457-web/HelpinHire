# HelpinHire Brand Assets

This directory contains official HelpinHire logo and brand assets.

## Files

### logo.svg
- **Purpose**: Full brand logo with circular badge design
- **Dimensions**: 200x200px (SVG - scalable to any size)
- **Format**: Vector (SVG)
- **Best For**: Marketing materials, landing pages, presentations, large displays
- **License**: Proprietary - HelpinHire ©2026

### logo-icon.svg
- **Purpose**: Icon-only version with navy gradient background
- **Dimensions**: 200x200px (SVG - scalable to any size)
- **Format**: Vector (SVG)
- **Best For**: Favicons, social media profile pictures, app icons, smaller displays
- **License**: Proprietary - HelpinHire ©2026

## Color Specifications

| Color | Hex | RGB | Purpose |
|-------|-----|-----|---------|
| Navy | #0B1F3B | rgb(11, 31, 59) | Primary background and text |
| Action Orange | #F97316 | rgb(249, 115, 22) | Accent and highlights |
| Cloud | #F3F5F8 | rgb(243, 245, 248) | Light backgrounds |
| White | #FFFFFF | rgb(255, 255, 255) | Text and contrast elements |

## Design Elements

### Logo Symbolism
- **Two Professional Profiles**: Represents employer-candidate connection
- **Connection Lines**: Symbolizes networking and relationship building
- **Handshake Curve**: Denotes partnership and collaboration
- **Growth Arrow**: Indicates career progression and business growth
- **Gradient**: Navy to navy progression conveys professionalism and stability

## Usage Guidelines

### Do's ✓
- Use SVG files for web to maintain scalability and small file sizes
- Maintain proper padding/whitespace around the logo
- Preserve the original color scheme for brand consistency
- Export to PNG/JPG when needed for non-web applications
- Use logo-icon.svg for favicons and small applications

### Don'ts ✗
- Do not distort or stretch the logo
- Do not change the original colors
- Do not remove or modify design elements
- Do not use on dark backgrounds without proper contrast adjustment (use logo-icon.svg instead)

## Download & Export

### Export to PNG (High Quality)
```bash
# Using ImageMagick
convert -density 300 logo.svg -background transparent logo-hq.png

# Or use online SVG converters
```

### Export to ICO (Favicon)
```bash
# Using ImageMagick
convert -density 300 logo-icon.svg -define icon:auto-resize=256,128,96,64,48,32,16 favicon.ico
```

## Integration

### Web Integration
```html
<!-- In index.html -->
<link rel="icon" type="image/svg+xml" href="/public/logo-icon.svg" />
<meta property="og:image" content="/public/logo.svg" />
```

### Social Media
- **LinkedIn Company Page**: 1200x627px recommended (use logo.svg)
- **Twitter/X Profile**: 400x400px (use logo-icon.svg)
- **Facebook**: 470x246px (use logo.svg)
- **GitHub**: 200x200px (use logo-icon.svg)

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-06-10 | Initial logo design and release |

## Contact

For brand asset inquiries or usage permissions, please contact the HelpinHire team.

---

**Last Updated**: June 10, 2026
**Brand Guidelines Version**: 1.0
