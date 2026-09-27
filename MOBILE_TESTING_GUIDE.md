# Mobile Testing Guide

## How to Test Mobile Responsiveness

### Method 1: Browser DevTools (Recommended)

#### Chrome DevTools:
1. Open the website in Chrome
2. Press `F12` or right-click and select "Inspect"
3. Click the device toolbar icon (or press `Ctrl+Shift+M` / `Cmd+Shift+M`)
4. Select a device from the dropdown or choose "Responsive"
5. Test different screen sizes by dragging the viewport edges

#### Firefox DevTools:
1. Open the website in Firefox
2. Press `F12` or right-click and select "Inspect Element"
3. Click the Responsive Design Mode icon (or press `Ctrl+Shift+M` / `Cmd+Option+M`)
4. Choose a device preset or enter custom dimensions

### Method 2: Real Device Testing

#### On Your Phone:
1. Start the development server: `npm run dev`
2. Find your computer's local IP address:
   - Windows: `ipconfig` (look for IPv4 Address)
   - Mac/Linux: `ifconfig` or `ip addr`
3. On your phone, open the browser and navigate to: `http://YOUR_IP:5173`
   - Example: `http://192.168.1.100:5173`
4. Make sure your phone and computer are on the same WiFi network

### Screen Sizes to Test

| Device Type | Width | Common Devices |
|------------|-------|----------------|
| Small Phone | 320px - 375px | iPhone SE, iPhone 12 Mini |
| Medium Phone | 375px - 414px | iPhone 12/13, Galaxy S21 |
| Large Phone | 414px - 480px | iPhone 12 Pro Max, Pixel 6 |
| Tablet Portrait | 768px - 834px | iPad Mini, iPad |
| Tablet Landscape | 1024px - 1112px | iPad Pro |
| Desktop | 1280px+ | Laptops, Desktops |

## Testing Checklist

### ✅ Navigation (Navbar)
- [ ] Logo displays correctly on all sizes
- [ ] Mobile menu hamburger appears below 768px
- [ ] Mobile menu opens and closes smoothly
- [ ] All nav links are tappable (min 44px height)
- [ ] CTA button fits properly on mobile
- [ ] No horizontal scrolling

### ✅ Home Page
- [ ] Hero heading is readable on small screens
- [ ] Buttons stack vertically on mobile
- [ ] Trust badges wrap properly
- [ ] Hero illustration hidden on mobile (< lg)
- [ ] Feature cards stack in single column on mobile
- [ ] Stats grid shows 2 columns on mobile, 4 on desktop
- [ ] CTA section text doesn't overflow

### ✅ Dashboard Page
- [ ] Page title is readable on mobile
- [ ] Stat cards display 1 column on mobile, 2 on tablet, 4 on desktop
- [ ] Chart cards stack vertically on mobile
- [ ] Charts render at appropriate size (not too small)
- [ ] Insight cards stack on mobile
- [ ] Case study widget button is full-width on mobile
- [ ] All text is readable without zooming

### ✅ Risk Analyzer Page
- [ ] Page header is properly sized
- [ ] Mode toggle buttons (Personal/Group) are tappable
- [ ] Form fields are easy to tap and fill
- [ ] Input fields have proper spacing
- [ ] Labels are readable
- [ ] Submit button is full-width and tappable
- [ ] Results display properly on mobile
- [ ] Download report button works on mobile

### ✅ Compliance Page
- [ ] Page title fits on screen
- [ ] Overview cards show 1 column on mobile, 3 on tablet+
- [ ] Regulation cards stack vertically on mobile
- [ ] Card content is readable
- [ ] Icons are properly sized
- [ ] Status badges display correctly

### ✅ Case Study Page
- [ ] Page header is properly sized
- [ ] Stats grid shows 2 columns on mobile, 4 on desktop
- [ ] Case study cards stack vertically
- [ ] Card images (if any) scale properly
- [ ] Read more buttons are tappable
- [ ] Tag elements wrap properly

## Common Issues to Check

### Text Issues
- [ ] No text is cut off or overflowing
- [ ] All headings scale appropriately
- [ ] Line height is comfortable for reading
- [ ] Font sizes are large enough (min 14px for body text)

### Layout Issues
- [ ] No horizontal scrolling on any page
- [ ] Cards have proper padding/margins
- [ ] Sections have adequate spacing
- [ ] Grid layouts collapse properly
- [ ] Flexbox elements wrap as expected

### Interactive Elements
- [ ] All buttons are at least 44px in height
- [ ] Links are easy to tap (not too close together)
- [ ] Form inputs are large enough
- [ ] Dropdowns work properly on touch devices
- [ ] Hover effects don't break touch interactions

### Visual Issues
- [ ] Background gradients display correctly
- [ ] Border radius looks good at all sizes
- [ ] Shadows don't create performance issues
- [ ] Animations are smooth
- [ ] Colors have sufficient contrast

## Performance Testing

### Test Page Load Speed:
1. Open DevTools Network tab
2. Throttle to "Fast 3G" or "Slow 3G"
3. Reload the page
4. Check if:
   - Page loads in < 3 seconds
   - Images load progressively
   - Charts render without blocking

### Test Scrolling Performance:
1. Enable FPS meter in DevTools
2. Scroll up and down the page
3. Check if frame rate stays above 30 FPS
4. Look for janky animations

## Orientation Testing

Test both orientations on mobile devices:

### Portrait Mode (Vertical)
- [ ] All pages display correctly
- [ ] Navigation works properly
- [ ] Content is readable

### Landscape Mode (Horizontal)
- [ ] Layout adapts appropriately
- [ ] Doesn't just look like zoomed portrait
- [ ] Charts utilize the extra width

## Quick Test Commands

```bash
# Start development server
npm run dev

# Build for production (to test production optimizations)
npm run build

# Preview production build
npm run preview
```

## Browser Testing Matrix

Test on these browsers (minimum):

| Browser | Mobile | Desktop |
|---------|--------|---------|
| Chrome | ✅ | ✅ |
| Safari | ✅ (iOS) | ✅ (macOS) |
| Firefox | ✅ | ✅ |
| Edge | - | ✅ |
| Samsung Internet | ✅ | - |

## Automated Testing (Optional)

For more thorough testing, you can use:

### Lighthouse (Chrome DevTools)
1. Open DevTools
2. Go to "Lighthouse" tab
3. Select "Mobile" device
4. Click "Generate report"
5. Check scores for:
   - Performance
   - Accessibility
   - Best Practices

### Responsive Design Checker Tools
- [Responsinator](http://www.responsinator.com/)
- [BrowserStack](https://www.browserstack.com/)
- [LambdaTest](https://www.lambdatest.com/)

## Reporting Issues

If you find any mobile responsiveness issues:

1. **Note the device/browser:**
   - Device model or screen size
   - Browser name and version
   - Operating system

2. **Describe the problem:**
   - What page were you on?
   - What did you expect to see?
   - What actually happened?

3. **Take a screenshot:**
   - Shows the issue clearly
   - Include the entire viewport

4. **Note any console errors:**
   - Open DevTools console
   - Copy any red error messages

## Success Criteria

The mobile version is successful if:

✅ **Usability**
- Users can complete all tasks on mobile
- No pinch-to-zoom required for reading
- All interactive elements are easily tappable
- Forms are easy to fill out

✅ **Visual**
- Layout looks intentional on all screen sizes
- Content doesn't overflow or get cut off
- Proper spacing and alignment
- Images and charts display correctly

✅ **Performance**
- Pages load quickly on 3G
- Smooth scrolling
- No janky animations
- Charts render smoothly

✅ **Accessibility**
- Sufficient color contrast
- Tap targets meet WCAG standards (44x44px)
- Text is readable
- Keyboard navigation works

## Additional Resources

- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [WCAG Touch Target Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

---

**Happy Testing! 🚀📱**
