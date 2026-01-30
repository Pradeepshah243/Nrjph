# Images Folder

This folder is for storing your custom images that will be used throughout the website.

## Folder Structure

```
/public/images/
├── services/          # Service-related images
├── projects/          # Project gallery images
├── team/             # Team member photos
├── testimonials/     # Client photos for testimonials
├── hero/             # Hero slider images
└── general/          # General purpose images
```

## How to Use Images

Once you upload an image to this folder, you can reference it in your code using:

### In React Components (ImageWithFallback):
```tsx
<ImageWithFallback 
  src="/images/services/your-image.jpg" 
  alt="Description"
  className="your-classes"
/>
```

### In Regular img tags:
```tsx
<img 
  src="/images/projects/your-image.jpg" 
  alt="Description"
  className="your-classes"
/>
```

### In CSS (if needed):
```css
background-image: url('/images/hero/background.jpg');
```

## Recommended Image Formats

- **JPG/JPEG**: For photos and complex images
- **PNG**: For images with transparency or logos
- **WebP**: For optimized web images (modern format)
- **SVG**: For icons and vector graphics

## Image Size Recommendations

- **Hero Images**: 1920x1080px or larger
- **Project Gallery**: 800x600px minimum
- **Testimonial Photos**: 200x200px (square)
- **Team Photos**: 400x400px (square)
- **Service Images**: 600x400px

## Notes

- All images in the `/public` folder are served directly
- No need to import them in your code
- Just reference them with `/images/...` path
- Keep file names lowercase with hyphens (e.g., `my-image.jpg`)
