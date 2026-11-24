# Ankit Gupta — Portfolio

I’m **Ankit Gupta**, a B.Sc. student learning to turn careful thinking into practical software. I’m studying computer applications, mathematics and physics at Mahatma Gandhi Post Graduate College, while exploring web development, databases, programming and student-focused technology.

This portfolio documents my learning journey, the tools I’m practising and the projects I’m beginning to build. I’m interested in creating useful, understandable software that solves real problems for students and communities.

## Education

- **B.Sc. with Computer Applications, Mathematics and Physics** — Mahatma Gandhi Post Graduate College, Gorakhpur · 2024–present
- **Intermediate** — Kendriya Vidyalaya No. 2 FCI, Gorakhpur · Science stream
- **High School** — Kendriya Vidyalaya Babina Cantt

## Campus Skill Exchange

[Campus Skill Exchange](https://ankitgupta2006.github.io/campus-skill-exchange/index.html) is a student-first platform concept where students can share skills, discover peer learning opportunities and connect with people who can teach or learn alongside them.

### The problem

Students often have useful technical, creative or academic skills, but finding the right peer to learn from is informal and fragmented. The project explores how a focused campus space could make peer learning easier to discover and organise.

### The direction

The platform is designed around reciprocal learning. A student can create a profile, share the skills they can offer, discover skills they want to learn and connect with another student.

### Current prototype features

- Student-focused homepage and onboarding flow
- Skill categories for coding, design, languages, photography, academics and communication
- Student profile and registration pages
- Skill discovery and profile browsing pages
- Demonstration flows for learning connections and exchange requests
- Admin and dashboard concepts for future development

### Technical snapshot

- **Frontend:** HTML, CSS and JavaScript
- **Architecture:** Multi-page static web application
- **Data layer:** Browser `localStorage` for prototype interactions
- **Deployment:** GitHub Pages

The current version is a front-end prototype. Login state, profiles, exchange requests and administrative actions are demonstrated locally in the browser. A production version would require a secure backend, authentication, server-side validation and persistent database storage.

### Links

- [Open the live prototype](https://ankitgupta2006.github.io/campus-skill-exchange/index.html)
- [View the source repository](https://github.com/ankitgupta2006/campus-skill-exchange)
- [Read the project brief](project.html)

### Next steps

1. Validate the idea with students and refine the main user flows.
2. Build a secure backend for accounts, profiles and exchange requests.
3. Add search, filters, messaging and learning-session management.
4. Improve trust, reporting and privacy controls for campus communities.

## Included files

- `index.html` — homepage with introduction, skills, project summary, education and contact
- `project.html` — detailed Campus Skill Exchange case study
- `style.css` — shared visual system and responsive layout
- `script.js` — shared mobile navigation and project brief interaction
- `campus-skill-exchange-preview.webp` — project preview image
- `favicon.svg` — lightweight site icon
- `README.md` — setup and customization guide
- `.gitignore` — common local files excluded from Git

## Run locally

No build step, framework, package manager or server configuration is required.

Open the folder in VS Code and launch it with the **Live Server** extension. Then open the local URL shown by the extension in your browser.

Alternatively, serve the folder with Python:

```shell
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Customize the site

1. Edit the text and links in `index.html` and `project.html`.
2. Change colours and spacing in the `:root` section of `style.css`.
3. Replace `campus-skill-exchange-preview.webp` with another image, keeping the same filename or updating the `<img>` path.
4. Update the GitHub links, email, education, skills and project URLs before publishing.
5. Keep the layout semantic: use headings in order and meaningful `alt` text on images.

## Contact

- **Email:** [guptaankit05321@gmail.com](mailto:guptaankit05321@gmail.com)
- **GitHub:** [github.com/ankitgupta2006](https://github.com/ankitgupta2006)
- **Portfolio:** [ankitgupta2006.github.io/ankit-portfolio](https://ankitgupta2006.github.io/ankit-portfolio/)

## Deploy on GitHub Pages

This repository is deployed directly from the `main` branch.

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and the `/ (root)` folder, then click **Save**.
4. The live site is available at:
   <https://ankitgupta2006.github.io/ankit-portfolio/>

Because this is a static site, no server, database, environment variables or build pipeline is required.
