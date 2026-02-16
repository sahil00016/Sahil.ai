# Sahil.ai - Digital Experience Portfolio

A high-performance, animation-heavy portfolio website built for [Sahil.ai](https://sahil.ai). This project showcases advanced React patterns, complex Framer Motion animations, and AI integration.

![Project Preview](public/preview.png)

## 🚀 Key Features

### 🎨 Visuals & Animations
-   **Smooth Scrolling**: Integrated **Lenis** for buttery smooth inertial scrolling.
-   **Cursor Parallax**: Custom cursor interactions that react to mouse movement.
-   **Text Reveals**: Staggered character and word reveals using `framer-motion`.
-   **Scroll-Driven Animations**:
    -   **Horizontal Scroll**: "Philosophy" section features a train-like bidirectional text scroll.
    -   **Stacking Cards**: "Process" section cards slide and stack on scroll.
    -   **Mask Reveal**: "Final CTA" section uses a spotlight clip-path animation.
    -   **Parallax Backgrounds**: Floating shapes and fluid gradients.

### 🤖 AI Integration
-   **Smart Chatbot**: Integrated **Google Gemini API** for a conversational AI assistant.
-   **Contextual Awareness**: The bot acts as a portfolio guide, answering questions about services and work.
-   **Fallback Strategy**: robust error handling with model fallbacks (Flash -> Pro).

### 🛠 Tech Stack
-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Scrolling**: [Lenis](https://github.com/studio-freight/lenis)
-   **AI**: [Google Gemini](https://deepmind.google/technologies/gemini/)

## 📂 Project Structure

```bash
src/
├── animations/     # Reusable animation variants & constants
├── components/     # UI components (Chatbot, Navbar, Cursor)
├── hooks/          # Custom hooks (useScroll, useParallax)
├── layout/         # Layout wrappers (Footer, SmoothScroll)
├── pages/          # Main page views
├── sections/       # Landing page sections (Hero, Work, Process)
└── ui/             # Design tokens and base styles
```

## ⚡️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sahil00016/Sahil.ai.git
    cd Sahil.ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root and add your Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## 🚀 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  Add your `VITE_GEMINI_API_KEY` in Vercel Project Settings > Environment Variables.
4.  Deploy!

---

Built with ❤️ by [Sahil.ai](https://sahil.ai)
