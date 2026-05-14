# Ravindra Sisodia — Portfolio v2

A complete redesign in a dark, moody, cinematic style. Warm cream palette.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS 3
- framer-motion — animations
- lucide-react — icons

## Run

```sh
cd portfolio-v2
npm install
npm run dev
```

Open the printed `http://localhost:5173` URL.

## Build

```sh
npm run build
npm run preview
```

## Structure (flat)

```
portfolio-v2/
├── index.html                    # standalone preview · Tailwind CDN + vanilla JS
├── package.json
├── tsconfig.json / tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js            # primary: #DEDBC8, serif: Instrument Serif
├── postcss.config.js
├── main.tsx                      # Vite entry
├── App.tsx                       # Hero · About · Features
├── index.css                     # globals + noise textures
├── vite-env.d.ts
├── Hero.tsx                      # full-bleed video, giant "Ravindra*", nav, CTA
├── About.tsx                     # 3-segment heading, scroll-linked letter reveal
├── Features.tsx                  # 4-card grid: video + 3 capability cards
├── WordsPullUp.tsx               # animation primitive
├── WordsPullUpMultiStyle.tsx     # animation primitive
└── AnimatedLetter.tsx            # animation primitive
```

> **Note:** `index.html` currently uses the Tailwind CDN + vanilla JS so it works offline without `npm install`. When you switch to the Vite build, edit `index.html` to add `<script type="module" src="/main.tsx"></script>` and remove the inline `<script>` block.

## Design tokens

| Surface       | Value       |
|---------------|-------------|
| Background    | `#000000`   |
| About card    | `#101010`   |
| Features card | `#212121`   |
| Primary text  | `#E1E0CC`   |
| Tailwind primary | `#DEDBC8` |
| Gray text     | `gray-400` / `gray-500` |

Fonts: `Almarai` (300/400/700/800) as global default; `Instrument Serif` italic for accent text in About.
