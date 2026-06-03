# Kyle Suk — Personal Profile Website

A clean, modern single-page profile/resume site for **Kyle Suk**, a Cerritos High School
student pursuing engineering in college.

Built with **HTML + Tailwind CSS (CDN) + vanilla JavaScript** — no build step required.

## Run it

Just open `index.html` in any web browser (double-click the file).

Optionally, serve it locally:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## Features

- Fixed navbar with smooth-scroll section links + mobile hamburger menu
- Light / **dark mode** toggle (remembers your choice via `localStorage`)
- Reveal-on-scroll animations and active-section highlighting
- Fully responsive (mobile → desktop)
- Sections: Education · Volunteer · Experience · Extracurricular Activities · Awards · Sports · Work Experience

## Customize

| What | Where |
| --- | --- |
| **Profile photo** | In `index.html`, find the Hero "Avatar placeholder" (`KS` circle). Replace the `<div>` with `<img src="your-photo.jpg" class="w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover ... ">`. Put the image file in this folder. |
| **GitHub link** | In `index.html` footer, find the GitHub `<a href="#" ...>` and replace `#` with `https://github.com/<your-username>` (and remove the "link coming soon" note). |
| **Colors** | In `index.html`, edit the `navy` palette inside the inline `tailwind.config` `<script>`. |
| **Text content** | Edit the relevant `<section>` directly in `index.html`. |

## Files

```
kyle-suk/
├── index.html   # All markup + Tailwind config
├── script.js    # Dark mode, scroll reveal, mobile menu, scrollspy
└── README.md
```

## Deploy (free hosting)

- **GitHub Pages** — push these files to a repo, then enable Pages in the repo settings.
- **Netlify / Vercel** — drag-and-drop this folder, or connect the repo.
