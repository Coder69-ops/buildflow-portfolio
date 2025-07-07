# 🔗 Social Media Link Preview Setup

## What This Does
When you share your website link (buildflow.aixplore.me) on social media platforms like WhatsApp, Facebook, Twitter, LinkedIn, or Messenger, it will show a rich preview with:
- Your website title
- Description 
- Preview image
- Website URL

## Quick Setup Steps

### 1. Create Your Preview Image
1. Open `/public/preview-generator.html` in your browser
2. Take a screenshot of the preview box (or use browser's "Save as Image")
3. Crop the image to exactly **1200×630 pixels**
4. Save it as `buildflow-preview.jpg`
5. Upload it to your `public` folder on your website

### 2. Deploy Your Changes
Upload all the updated files to your website (buildflow.aixplore.me)

### 3. Test Your Links
1. Open `/public/social-media-tester.html` to see how your previews will look
2. Use the testing tools provided to verify your setup:
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

## Files Modified

### `index.html`
Added comprehensive meta tags for:
- **Open Graph** (Facebook, WhatsApp, LinkedIn)
- **Twitter Cards** 
- **General SEO**

### New Files Created
- `public/preview-generator.html` - Tool to create your preview image
- `public/social-media-tester.html` - Tool to test your social media previews

## Meta Tags Added

```html
<!-- Open Graph / Facebook Meta Tags -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://buildflow.aixplore.me/" />
<meta property="og:title" content="BuildFlow - Building Digital Experiences That Flow" />
<meta property="og:description" content="Professional web development and ready-made website marketplace..." />
<meta property="og:image" content="https://buildflow.aixplore.me/buildflow-preview.jpg" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="BuildFlow - Building Digital Experiences That Flow" />
<meta name="twitter:description" content="Professional web development and ready-made website marketplace..." />
<meta name="twitter:image" content="https://buildflow.aixplore.me/buildflow-preview.jpg" />
```

## Preview Image Requirements

- **Size:** 1200×630 pixels (Facebook/OG standard)
- **Format:** JPG or PNG
- **File size:** Under 8MB
- **Content:** Should be readable and engaging even at small sizes

## Platform-Specific Notes

### WhatsApp
- Uses Open Graph tags
- Shows image, title, description, and URL
- Caches previews aggressively

### Facebook/Messenger
- Uses Open Graph tags
- Has debugging tools to force cache refresh
- Supports video previews too

### Twitter
- Uses Twitter Card tags
- Fallback to Open Graph if Twitter tags missing
- Supports different card types

### LinkedIn
- Uses Open Graph tags
- Professional content performs better
- Has post inspector tool

## Troubleshooting

### Preview Not Showing?
1. Check if image URL is publicly accessible
2. Verify image dimensions (1200×630)
3. Use platform debugging tools
4. Wait 24-48 hours for cache to clear

### Image Not Loading?
1. Ensure file is named `buildflow-preview.jpg`
2. Check file is in `public` folder
3. Verify URL: `https://buildflow.aixplore.me/buildflow-preview.jpg`
4. Try clearing browser cache

### Old Preview Still Showing?
1. Use Facebook Sharing Debugger to force refresh
2. Add version parameter: `buildflow.aixplore.me/?v=2`
3. Wait for platform cache to expire

## Tools & Resources

### Testing Tools
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Image Creation Tools
- [Canva](https://canva.com) (1200×630 template)
- [Figma](https://figma.com)
- Online OG image generators
- Your preview generator tool (included)

## Success Metrics

When done correctly, sharing your link will show:
✅ Eye-catching preview image  
✅ Compelling title and description  
✅ Professional branding  
✅ Higher click-through rates  
✅ Better social media engagement  

---

**Need Help?** Open the testing tools in your browser to see exactly how your previews will look!
