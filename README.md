
# PortfolioPro - Your Professional Showcase

PortfolioPro is a modern, responsive, and customizable portfolio website built with Next.js, React, ShadCN UI, and Tailwind CSS. It's designed to help you showcase your projects, designs, skills, and experience in a visually appealing and professional manner. The project also includes a basic setup for AI integration using Genkit.

## ✨ Features

- **Modern Design:** A sleek and contemporary UI/UX.
- **Responsive Layout:** Looks great on all devices, from desktops to mobile phones.
- **Hero Section:** Engaging introduction to grab attention.
- **Projects Showcase:** Display your development projects with details, tags, and links.
- **Designs Gallery:** Showcase your graphic designs with an image carousel.
- **About Me:** Share your professional summary, skills, and experience.
- **Contact Form:** Allow visitors to get in touch easily (simulated backend).
- **Theme Toggle:** Switch between light and dark modes.
- **3D Background:** Interactive Spline 3D scene in the background.
- **AI Ready:** Basic Genkit setup for potential AI-powered features.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **AI Integration:** [Genkit by Firebase](https://firebase.google.com/docs/genkit)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation
- **Deployment:** Configured for [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    This will start the Next.js development server, typically on `http://localhost:9002`.

4.  **(Optional) Run Genkit development server (for AI features):**
    If you are working with Genkit flows, you might need to run its development server in a separate terminal:
    ```bash
    npm run genkit:dev
    ```

## 🎨 Customization

This portfolio is designed to be easily customizable. Here's how you can update it with your own information:

### 1. Personal Information & Links

-   **Header Logo & Title:** Modify in `src/components/layout/header.tsx`.
-   **Hero Section Name & Tagline:** Update in `src/components/sections/hero-section.tsx`.
-   **Footer Social Links & Copyright:** Change in `src/components/layout/footer.tsx`.
-   **Contact Information (Email, LinkedIn, GitHub):** Update in `src/components/sections/contact-section.tsx` and `src/components/layout/footer.tsx`.
-   **Spline 3D Scene:** Change the `sceneUrl` prop in `src/app/layout.tsx` for the `<SplineEmbed />` component.

### 2. Content Sections

-   **Projects Data:**
    Edit the `projectsData` array in `src/components/sections/projects-section.tsx`. Each project object has fields for `id`, `title`, `description`, `imageUrl`, `imageHint`, `tags`, `githubUrl`, and `liveUrl`.
    Replace placeholder images (`https://placehold.co/...`) with your actual project screenshots.

-   **Designs Data:**
    Edit the `designsData` array in `src/components/sections/designs-section.tsx`. Each design object has fields for `id`, `title`, `description`, `imageUrl`, `imageHint`, and `tools`.
    Replace placeholder images with your design work.

-   **About Me Section:**
    -   **Profile Picture:** Replace the placeholder image URL in `src/components/sections/about-section.tsx`.
    -   **Professional Summary:** Update the text content.
    -   **Skills:** Modify the `skills` array. You can change skill names, icons (from `lucide-react`), and categories.
    -   **Experience:** Update the `experiences` array with your work history.

### 3. Styling & Theme

-   **Colors & Theme:**
    The primary color palette is defined using HSL CSS variables in `src/app/globals.css`. You can adjust these variables to change the overall look and feel.
    ```css
    :root {
      --background: 270 17% 98%; /* Off-white */
      --foreground: 247 5% 21%; /* Dark Gray */
      --primary: 258 16% 67%; /* Dusty Lavender */
      /* ... and so on */
    }
    .dark {
      /* Dark theme overrides */
    }
    ```

-   **Fonts:**
    Fonts (Inter and Space Grotesk) are imported from Google Fonts in `src/app/layout.tsx`. You can change these by updating the `<link>` tags and the `fontFamily` utility classes in `tailwind.config.ts`.

-   **ShadCN UI Components:**
    Components from ShadCN UI are located in `src/components/ui/`. You can customize their appearance by modifying their respective files or by adjusting the theme variables in `globals.css`.

### 4. AI Features (Genkit)

-   Genkit flows are located in `src/ai/flows/`.
-   The Genkit configuration is in `src/ai/genkit.ts`.
-   If you create new flows, remember to import them in `src/ai/dev.ts` for the development server to pick them up.

## 📁 Project Structure

Here's a high-level overview of the project's directory structure:

```
.
├── public/                  # Static assets
├── src/
│   ├── ai/                  # Genkit AI flows and configuration
│   │   ├── flows/           # Individual AI flows
│   │   ├── dev.ts           # Genkit development server entry point
│   │   └── genkit.ts        # Genkit initialization and configuration
│   ├── app/                 # Next.js App Router (pages, layouts, actions)
│   │   ├── (routes)/        # Route groups and pages
│   │   ├── actions.ts       # Server Actions (e.g., form submissions)
│   │   ├── globals.css      # Global styles and Tailwind CSS setup
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main landing page
│   ├── components/          # React components
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Page sections (Hero, Projects, About, etc.)
│   │   ├── ui/              # ShadCN UI components
│   │   ├── design-card.tsx
│   │   ├── project-card.tsx
│   │   ├── spline-embed.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle-button.tsx
│   ├── hooks/               # Custom React hooks (e.g., useToast, useIsMobile)
│   └── lib/                 # Utility functions (e.g., cn for Tailwind class merging)
├── components.json          # ShadCN UI configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── apphosting.yaml          # Firebase App Hosting configuration
```

## ⚙️ Server Actions

Server Actions are used for form submissions (e.g., the contact form). The `submitContactForm` action in `src/app/actions.ts` handles the contact form data. In a real application, you would replace the console logging with actual backend logic (e.g., sending an email or saving to a database).

## ☁️ Deployment

This project is pre-configured for deployment with [Firebase App Hosting](https://firebase.google.com/docs/app-hosting). The `apphosting.yaml` file contains basic configuration.

To deploy:
1.  Ensure you have the Firebase CLI installed and configured.
2.  Set up a Firebase project.
3.  Follow the Firebase App Hosting deployment guides.

You can also deploy this Next.js application to other platforms like Vercel, Netlify, or your own server.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! If you're interested in contributing, please feel free to fork the repository and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.
Alternatively, if this is a personal portfolio you intend to keep private or with restricted use, you can state:
"&copy; [Your Name] [Current Year]. All rights reserved."

---

Happy Coding! We hope this portfolio template helps you create an amazing showcase of your work.
