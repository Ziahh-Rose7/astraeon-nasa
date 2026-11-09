# ASTRAEON — A Living Museum of Space Exploration

> *"Every machine has a story. Every discovery echoes through the cosmos."*

ASTRAEON is an interactive 3D website built for the **NASA Space Apps Challenge 2026** challenge
**"Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars."**

You fly through a 3D Solar System, zoom to Mars, the Moon, Earth orbit or deep space, and meet **25 NASA machines**
on a glowing **Ghost Map**. Each one tells its own story in the first person, with a voice and cinematic subtitles,
and also has a **Real Science Mode** with instruments, discoveries, sources and real NASA photographs.

Not every machine here is "abandoned". Curiosity, Perseverance, Hubble, the ISS and the Voyagers are still working.
ASTRAEON shows a clear **status badge** on every spacecraft so nothing alive is ever called dead.

---

## Table of contents

1. [Quick start (Windows)](#quick-start-windows)
2. [Features](#features)
3. [How to use the website](#how-to-use-the-website)
4. [Project structure](#project-structure)
5. [Technologies](#technologies)
6. [Troubleshooting](#troubleshooting)
7. [Customising ASTRAEON](#customising-astraeon)
8. [Publishing your site](#publishing-your-site)
9. [Accuracy, storytelling and credits](#accuracy-storytelling-and-credits)
10. [Known limitations](#known-limitations)

---

## Quick start (Windows)

You need two free programs. You only install them once.

1. **Node.js (LTS version)**: download from <https://nodejs.org> and install with the default options.
   To check: open the Start menu, type `cmd`, press Enter, and run `node --version`. You should see a number like `v20.x` or higher.
2. **Visual Studio Code** (optional, but easy): <https://code.visualstudio.com>

Then:

1. **Download** the ZIP and **extract** it (right-click → *Extract All…*).
2. Open **Visual Studio Code** → *File → Open Folder…* → choose the extracted `astraeon` folder.
3. Open the terminal in VS Code: *Terminal → New Terminal*.
4. Install the libraries (needs internet, takes about a minute):
   ```bash
   npm install
   ```
5. Start the website:
   ```bash
   npm run dev
   ```
6. Open the address shown in the terminal, usually **http://localhost:5173**. (A browser tab may open automatically.)

To stop the server press `Ctrl + C` in the terminal.

**Why not just double-click `index.html`?** Browsers block ES modules and local data files opened straight from a folder.
Running a small local server (`npm run dev`) solves that and is the recommended method.

**No internet?** `npm install` needs internet once. After that, everything except the live NASA photographs works offline.

### Other commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with live reload |
| `npm run build` | Creates an optimised copy of the site in the `dist` folder |
| `npm run preview` | Serves the built `dist` folder so you can test it |

---

## Features

**3D Solar System**
- Glowing Sun, 8 planets, and the Moon, Phobos, Deimos, Europa, Ganymede and Titan, all orbiting and spinning
- Saturn's rings, an asteroid belt, atmospheric glows, a generated Milky Way sky with nebulae and distant galaxies
- Click any planet, moon or label and the camera glides there. The camera cannot clip through planets
- Mouse drag to rotate, scroll to zoom, touch gestures and on-screen zoom buttons
- Sizes and distances are **scaled for clarity**, and the website says so

**Exploration and Ghost Map**
- **Mars**, **Moon**, **Earth orbit** and **Deep space** each have a Ghost Map with glowing, status-coloured markers
- A flat map view (real latitude/longitude) for the Moon and Mars, plus a 3D globe view
- 25 spacecraft: Sojourner, Pathfinder, Spirit, Opportunity, Curiosity, Perseverance, Viking 1 and 2, InSight, Phoenix,
  Apollo 11 lunar module and experiments, Apollo 17 Lunar Roving Vehicle, Surveyor 3, the Apollo science stations (ALSEP),
  all Apollo landing sites, Hubble, the ISS, Vanguard 1, the Compton Gamma Ray Observatory, Voyager 1 and 2,
  Pioneer 10 and 11, New Horizons
- Five clear statuses: **Active**, **Transmitting**, **Decommissioned**, **Inactive hardware**, **Lost signal**

**Spacecraft screen**
- A 3D model of every spacecraft, built in code with Three.js, on a procedural lunar or Martian surface (or in orbit)
- Rotate, zoom, and click numbered markers to inspect each **instrument** (how it worked and what it measured)
- **First-person storytelling** for every spacecraft, including the ten required stories
- **Voice narration** with the browser's Web Speech API and **synchronised subtitles** with word highlighting
- Play, Pause, Restart, Stop, previous/next line, subtitles on/off, voice on/off, speed and volume controls
- **Story mode** and **Real Science mode** (factual briefing, discoveries, sources)
- An animated, horizontally scrollable **mission timeline** with photographs and "scientific significance"
- **Real NASA photographs** loaded live from the free NASA Image and Video Library (no API key)

**Extras**
- Search the archive, filter by celestial body and by status
- Educational quiz (random 6 of 18 questions), 11 collectible badges, rotating space facts
- Generated sound effects (Web Audio API): whooshes, clicks, beeps, chimes, success sound, quiet ambient hum
- Help/tutorial overlay, keyboard shortcuts, fullscreen
- Accessibility: reduced motion, high contrast, large text, subtitles and captions, keyboard navigation, ARIA labels
- Responsive layout for laptops, tablets and phones

---

## How to use the website

1. Press **START EXPLORATION**.
2. Click **Mars** (or press `4`). The camera flies there and the Mars panel opens.
3. Click a **glowing marker** or a name in the list. Try **FLAT MAP** to see all landing sites at once.
4. The spacecraft screen opens and **starts telling its story**. Use the controls at the bottom to pause, restart, change speed or turn the voice off.
5. Rotate the 3D model and click the numbered circles to learn about each instrument.
6. Use the tabs: **OVERVIEW · INSTRUMENTS · TIMELINE · PHOTOS**.
7. Flip **STORY / SCIENCE** at the top for first-person storytelling or factual science.
8. Press **◂ BACK TO MAP** (or `Esc`). Press **BACK TO SOLAR SYSTEM** to leave.
9. Open the **ARCHIVE** to search all spacecraft, or **DEEP SPACE** to visit the Voyagers, Pioneers and New Horizons.

### Keyboard shortcuts

| Key | Action | Key | Action |
|---|---|---|---|
| `Esc` | Go back one step | `A` | Open archive |
| `Space` | Play/pause narration | `/` | Search |
| `S` | Switch Story / Science | `Q` | Quiz |
| `M` | Sound on/off | `B` | Badges |
| `F` | Fullscreen | `0`–`8` | Jump to Sun / planets |
| `?` | Help | `←` `→` | Move along the timeline |

---

## Project structure

```
astraeon/
├── index.html              Page layout: every screen, panel and button
├── package.json            Dependencies and npm commands
├── vite.config.js          Dev server / build settings
├── README.md               This file
│
├── src/                    JavaScript (ES modules)
│   ├── main.js             Starts everything, navigation, keyboard, help and settings
│   ├── solarSystem.js      Sun, planets, moons, orbits, labels, Milky Way sky
│   ├── cameraControls.js   Smooth fly-to camera, follow, no-clipping
│   ├── textures.js         Generates planet textures and the galaxy in code
│   ├── ghostMap.js         3D markers, orbit rings, flat map
│   ├── planetExplorer.js   Mars/Moon/Earth/Deep-space panel and the archive search
│   ├── craftView.js        The spacecraft screen (tabs, controls, hotspots)
│   ├── spacecraft.js       3D viewer: terrain, lighting, instrument hotspots
│   ├── models.js           Procedural 3D models of all spacecraft
│   ├── narration.js        Voice narration (Web Speech API) with fallback timer
│   ├── subtitles.js        Cinematic subtitles with word highlighting
│   ├── soundManager.js     Generated sound effects (Web Audio API)
│   ├── timeline.js         Animated mission timeline
│   ├── scienceMode.js      Story / Science panels, instrument list
│   ├── photos.js           NASA Image Library photo loader and lightbox
│   ├── quiz.js             Quiz
│   ├── badges.js           Discovery badges (saved in your browser)
│   ├── ui.js               Modal dialog and status badge helpers
│   └── utils.js            Helpers, noise, saved settings
│
├── styles/                 CSS
│   ├── main.css            Design system, buttons, title and loading screens
│   ├── solarSystem.css     Labels, panels, Ghost Map
│   ├── interface.css       Top bar, spacecraft screen, timeline, quiz, modals
│   ├── subtitles.css       Subtitles and narration controls
│   └── responsive.css      Tablet and phone layouts
│
├── data/                   All mission information (plain JSON, easy to edit)
│   ├── planets.json        Bodies, orbit settings, facts
│   ├── spacecraft.json     25 spacecraft: details, instruments, discoveries, sources
│   ├── missions.json       Status definitions, regions, disclaimers
│   ├── timeline.json       Timeline events for each spacecraft
│   ├── stories.json        First-person stories (one list of sentences each)
│   ├── quiz.json           Quiz questions
│   └── facts.json          "Did you know?" facts
│
├── public/assets/          Optional drop-in files (served at /assets/...)
│   ├── textures/           Real planet textures (earth.jpg, mars.jpg, ...)
│   ├── models/             Real .glb spacecraft models
│   ├── images/  sounds/  fonts/
│
└── docs/project_description.md   Description for your Space Apps submission
```

---

## Technologies

| Purpose | Technology |
|---|---|
| Page, styles, scripts | HTML5, CSS3, JavaScript ES Modules |
| 3D graphics | **Three.js** (+ OrbitControls, GLTFLoader) |
| Animation | **GSAP** |
| Voice | **Web Speech API** (`speechSynthesis`) |
| Sound effects | **Web Audio API** (all sounds generated, no audio files) |
| Data | Local **JSON** files |
| Photos | NASA Image and Video Library API (free, no key) |
| Dev server and build | **Vite** |
| Fonts | Orbitron and Rajdhani via `@fontsource` (open licences) |

No paid APIs. No API keys. No accounts.

---

## Troubleshooting

**`npm` is not recognized**
Node.js is not installed or the terminal was open during installation. Install Node.js (LTS), then **close and reopen** VS Code.

**PowerShell says "running scripts is disabled on this system"**
In the VS Code terminal click the small arrow next to **+** and choose **Command Prompt**, then run the commands again.
Or run once: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

**`npm install` fails or hangs**
Check your internet connection. On a school network, ask whether npm packages are blocked, or use a phone hotspot.

**"Port 5173 is already in use"**
Another copy is running. Close the other terminal, or open the new address that Vite prints.

**Blank page or only a title**
Press `F12`, open the **Console** tab and read the first red error. Make sure you used `npm run dev` rather than opening `index.html` directly.

**"3D graphics are not available"**
Use a recent Chrome, Edge, Firefox or Safari, and enable *Hardware acceleration* in the browser settings.

**It runs slowly**
Close other tabs, plug in your laptop, turn on *Reduced motion* in Settings (⚙), and use a screen that is not 4K-scaled.
Starting the site on a computer with a dedicated graphics card gives the best experience.

**No sound**
Browsers allow audio only after you click. Click once, then check the **SOUND** button, your volume and the browser tab is not muted.

**No voice narration, or the voice sounds robotic**
The voice comes from your computer or browser. Chrome and Edge on Windows have the best voices (look for names containing *Natural* or *Online*).
Choose another voice in the dropdown at the bottom of the spacecraft screen. If no voice exists, ASTRAEON automatically advances the subtitles on a reading timer.

**Photos are not showing**
Photos are fetched live from NASA, so they need internet. If the NASA service is busy, try again later. The rest of the site still works.

**I changed JSON and the page broke**
JSON is strict: every item needs quotes and commas in the right places. Use VS Code's red underlines to find the mistake.

---

## Customising ASTRAEON

**Add or edit a spacecraft** — open `data/spacecraft.json`, copy an existing entry and change it.
Important fields: `id` (unique), `body` (`mars`, `moon`, `earth` or `deep`), `model` (which 3D model to use),
`status` (`active`, `transmitting`, `decommissioned`, `inactive`, `lost`), `lat` / `lon` for Moon and Mars,
`orbit` for Earth orbit, `deep` for deep space. Then add matching entries in `data/stories.json` (a list of sentences)
and `data/timeline.json`. Instruments need an `anchor` name that exists on the 3D model (see `src/models.js`).

**Write a new story** — add the list of short sentences to `data/stories.json`. Keep it based on verified facts.

**Add quiz questions** — add to `data/quiz.json`. `answer` is the position (starting at 0) of the correct option.

**Use real planet textures** — put equirectangular images named after the body in `public/assets/textures/`:
`earth.jpg`, `moon.jpg`, `mars.jpg`, `mercury.jpg`, `venus.jpg`, `jupiter.jpg`, `saturn.jpg`, `uranus.jpg`,
`neptune.jpg`, `sun.jpg`, `europa.jpg`, `ganymede.jpg`, `titan.jpg`, `phobos.jpg`, `deimos.jpg`.
They are picked up automatically. Good public-domain sources: NASA Visible Earth, NASA Scientific Visualization Studio, and the USGS Astrogeology Science Center.
Check each image's licence.

**Use real 3D models** — NASA publishes free models at <https://nasa3d.arc.nasa.gov>. Convert to `.glb`, then save as
`public/assets/models/<model-key>.glb`, where the key is the `model` value in the JSON (for example `mer.glb`, `msl.glb`, `lm.glb`, `voyager.glb`).
The 3D viewer uses it automatically. Instrument markers are hidden for custom models because their positions are unknown.

**Change colours** — edit the variables at the top of `styles/main.css` (`--cyan`, `--violet`, `--bg`, ...).

**Change the narration voice defaults** — `src/utils.js` (`defaults`) holds the default speed and volume.

---

## Publishing your site

```bash
npm run build
```
This creates a `dist` folder. Upload that folder to a static host such as **Netlify** (drag and drop `dist`),
**Vercel**, **Cloudflare Pages** or **GitHub Pages**. The site is fully static and needs no server code.

---

## Accuracy, storytelling and credits

- **Facts:** mission details come from NASA mission pages and the NASA NSSDC Master Catalog. Every spacecraft lists its sources in Science mode.
  Statuses reflect knowledge up to mid-2026 and can change, so confirm on <https://nasa.gov>.
- **Storytelling:** the first-person stories are **creative writing based on verified facts**. They are not real NASA communications.
  The site says this inside every story.
- **Status honesty:** working spacecraft are labelled *Active* or *Transmitting*. "Lost signal" means contact was lost.
  "Inactive hardware" means equipment deliberately left behind.
- **Scale:** planet sizes and distances are scaled so everything is visible. Positions in Deep Space are schematic.
- **Locations:** Moon and Mars coordinates are real, but the surface images are generated illustrations, so map positions are approximate.
- **Images and data:** photographs come from the NASA Image and Video Library. NASA content is generally not copyrighted, but follow the
  [NASA media usage guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/). ASTRAEON is not endorsed by NASA.
- **Software:** Three.js (MIT), Vite (MIT), GSAP (free standard licence), Fontsource fonts Orbitron and Rajdhani (SIL Open Font License).

---

## Known limitations

- Planet textures and the Milky Way are **generated in code**, so they look stylised rather than photographic. Add real textures (see above) for realism.
- Spacecraft 3D models are **simplified procedural models** (recognisable shapes and instruments, not engineering-accurate). Real `.glb` models can be dropped in.
- Surface locations on the Moon/Mars are accurate in coordinates but shown on an illustrated surface.
- Voice narration depends on the voices installed in the visitor's browser and operating system. Voice quality and word-by-word highlighting vary by browser.
- Photographs require an internet connection.
- Mission statuses can change over time. The Voyagers, for example, are gradually switching off instruments.
- Not every NASA artifact is included. The data files make it easy to add more.
