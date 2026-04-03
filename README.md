# ajitdev.com — Personal Portfolio Website

> 🌐 **Live Site:** [ajitdev.com](https://www.ajitdev.com)

A modern, animated personal portfolio website for **Ajit Kumar** — DevOps, DevSecOps & Cloud Security Engineer. Built with React + Vite, featuring smooth animations, a responsive layout, contact form integration, and SEO optimization.

---

## 🖥️ Preview

Visit the live site → **[www.ajitdev.com](https://www.ajitdev.com)**

---

## ✨ Features

- ⚡ Blazing fast — powered by **Vite**
- 🎨 Fully responsive design with **Tailwind CSS**
- 🎞️ Smooth page & element animations via **Framer Motion**
- 🧭 Client-side routing with **React Router DOM**
- 📬 Contact form with **EmailJS** (no backend needed)
- 🪖 SEO & meta tags via **React Helmet Async**
- 🔒 Form validation with **Zod**
- 🧩 Rich icon library via **React Icons** + **FontAwesome**
- 📱 Mobile-first layout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Routing | React Router DOM |
| Icons | React Icons, FontAwesome |
| Email | EmailJS |
| Validation | Zod |
| SEO | React Helmet Async |
| Linting | ESLint |

---

## 📁 Project Structure

```
ajitdev.com/
│
├── public/               # Static assets (favicon, images)
│
├── src/
│   ├── Components/       # Reusable UI components (Navbar, Footer, etc.)
│   ├── Pages/            # Route-level page components
│   ├── App.jsx           # Root component with routing
│   └── main.jsx          # Entry point
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

**Clone the repository**
```bash
git clone https://github.com/ajitdev01/ajitdev.com.git
cd ajitdev.com
```

**Install dependencies**
```bash
npm install
```

**Start development server**
```bash
npm run dev
```

**Build for production**
```bash
npm run build
```

**Preview production build**
```bash
npm run preview
```

> The dev server runs at `http://localhost:5173` by default.

---

## 📬 Contact Form Setup (EmailJS)

This project uses [EmailJS](https://www.emailjs.com/) to send emails directly from the frontend — no backend server required.

To configure it:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Set up a **Service**, **Template**, and get your **Public Key**
3. Create a `.env` file in the root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ Never commit your `.env` file — add it to `.gitignore`

---

## 🌍 Deployment

This site can be deployed to any static hosting platform:

| Platform | How |
|---|---|
| **Vercel** | Connect GitHub repo → auto deploy on push |
| **Netlify** | Drag & drop `dist/` or connect repo |
| **GitHub Pages** | Use `vite-plugin-gh-pages` |

Build output goes to the `dist/` folder after `npm run build`.

---

## 👤 About

**Ajit Kumar** is a DevOps, DevSecOps & Cloud Security Engineer based in India, passionate about building secure, scalable infrastructure and modern web experiences.

- 🌐 Website: [ajitdev.com](https://www.ajitdev.com)
- 💼 GitHub: [@ajitdev01](https://github.com/ajitdev01)

---

## 📄 License

This project is open source. Feel free to take inspiration — just don't copy it wholesale.

⭐ Star this repo if you found it helpful!
