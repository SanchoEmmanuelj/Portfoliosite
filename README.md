# Finance Portfolio Website

Your professional portfolio showcasing data analysis expertise, financial control capabilities, and decision-making skills.

## File Structure

```
portfolio_site/
├── index.html       # Main website structure
├── styles.css       # Styling (gray + teal color scheme)
├── config.json      # ALL YOUR CONTENT (edit this to update site)
├── script.js        # Loads content from config.json
└── README.md        # This file
```

## How to Update Your Portfolio

**All content is stored in `config.json`**. Edit this file to:
- Update your profile information
- Add new projects/work showcase
- Update skills
- Add new experience
- Change contact information

You DON'T need to touch HTML or CSS—just edit `config.json` and the site updates automatically.

### Example: Adding a New Project

Open `config.json` and add to the `"projects"` array:

```json
{
  "id": 4,
  "title": "Your New Project Title",
  "category": "Data Analysis",
  "description": "Brief description",
  "details": "Detailed explanation of what you did",
  "highlights": [
    "Key achievement 1",
    "Key achievement 2"
  ],
  "skills": ["Skill1", "Skill2"]
}
```

### Example: Adding New Skills

Edit the `"skills"` section:

```json
{
  "category": "Your Skill Category",
  "items": [
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ]
}
```

## Deployment (Free Options)

### Option 1: GitHub Pages (Recommended)
1. Create a GitHub account (free)
2. Create a new repository named `portfolio`
3. Upload all files (index.html, styles.css, config.json, script.js)
4. Enable GitHub Pages in settings
5. Your site goes live at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify
1. Go to netlify.com
2. Drag & drop your folder
3. Site goes live instantly (free subdomain or custom domain)

### Option 3: Simple File Server
- Use Python: `python -m http.server 8000` then visit `http://localhost:8000`
- Or any basic file hosting service

## Customization Tips

### Change Colors
Edit `styles.css` at the top:
```css
:root {
    --primary-color: #1a472a;      /* Change this */
    --accent-color: #0d9488;       /* Change this */
}
```

### Add Your CV for Download
1. Rename your CV to: `Emmanuel_Sancho_CV.pdf`
2. Place it in the same folder as index.html
3. The download button will work automatically

### Update Contact Information
Edit `config.json`:
```json
"profile": {
  "email": "your.email@example.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourprofile"
}
```

## Content You Can Easily Add Later

Since everything is in `config.json`, you can add:
- ✅ New projects/case studies
- ✅ Additional skills
- ✅ More work experience
- ✅ Certifications
- ✅ New achievements or highlights
- ✅ Updated contact info
- ✅ New education entries

Just edit the JSON and save—no coding required!

## Browser Support

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Questions?

The structure is straightforward:
1. **index.html** = What the site looks like
2. **styles.css** = How it's styled
3. **config.json** = Your content (EDIT THIS)
4. **script.js** = Glues it together

## Next Steps

1. Download all files
2. Edit `config.json` with your information
3. Update contact details (email, LinkedIn, GitHub)
4. Add your CV file (PDF)
5. Deploy to GitHub Pages or Netlify
6. Share the link with employers! 🚀
