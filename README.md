# 🎓 Certificate Verification System

> A web-based digital certificate generation and verification platform built for **RVS College of Engineering & Technology**.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=flat-square&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

🔗 **Live Demo:** [certificate-verification-system-eight.vercel.app](https://certificate-verification-system-eight.vercel.app)

---

## 📌 Overview

The **Certificate Verification System** allows RVS College to generate, download, and verify official digital certificates. It eliminates the need for manual paper-based certificates, making the process faster, more reliable, and tamper-evident.

---

## ✨ Features

- 🏆 **Certificate Generation** — Generate official college certificates instantly
- 📥 **Download Certificates** — Export certificates as downloadable files
- ✅ **Certificate Verification** — Verify authenticity of issued certificates
- 📱 **Responsive Design** — Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast Performance** — Built with Vite for lightning-fast load times
- 🎨 **Clean UI** — Styled with Tailwind CSS for a modern look

---

## 🛠️ Tech Stack

| Layer        | Technology              |
|-------------|--------------------------|
| Frontend     | React 18                |
| Build Tool   | Vite                    |
| Styling      | Tailwind CSS            |
| Linting      | ESLint                  |
| Deployment   | Vercel                  |

---

## 📁 Project Structure

```
Certificate-Verification-System/
├── public/
│   └── favicon.ico               # App favicon
│
├── src/
│   ├── assets/                   # Static assets (images, icons)
│   ├── components/               # Reusable UI components
│   │   ├── CertificateCard.jsx   # Certificate display component
│   │   ├── VerifyForm.jsx        # Certificate verification form
│   │   └── Navbar.jsx            # Navigation bar
│   ├── pages/                    # Page-level components
│   │   ├── Home.jsx              # Landing/home page
│   │   ├── Generate.jsx          # Certificate generation page
│   │   └── Verify.jsx            # Certificate verification page
│   ├── App.jsx                   # Root component with routing
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles (Tailwind base)
│
├── .gitignore
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML entry point
├── package.json                  # Project dependencies & scripts
├── package-lock.json             # Locked dependency versions
├── postcss.config.js             # PostCSS config (for Tailwind)
├── tailwind.config.js            # Tailwind CSS configuration
├── vite.config.js                # Vite build configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sauban13/Certificate-Verification-System-.git

# 2. Navigate to the project directory
cd Certificate-Verification-System-

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📜 Available Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start local development server       |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview production build locally     |
| `npm run lint`    | Run ESLint checks                    |

---

## 🌐 Deployment

This project is deployed on **Vercel**. Any push to the `main` branch triggers an automatic deployment.

To deploy your own instance:

1. Fork this repository
2. Connect it to your [Vercel](https://vercel.com) account
3. Set the framework preset to **Vite**
4. Deploy 🚀

---

## 📸 Screenshots

> *(Add screenshots of your app here)*

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Sauban**
- GitHub: [@sauban13](https://github.com/sauban13)
- College: RVS College of Engineering & Technology

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> ⭐ If you found this project helpful, please give it a star!
