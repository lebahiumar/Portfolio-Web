import type { Project } from "@/components/project-card";
import { ProjectCard } from "@/components/project-card";

const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with a modern UI, product management, and payment integration. Built with Next.js, Tailwind CSS, and Stripe.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "#",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application designed to improve team productivity. Features include drag-and-drop boards and real-time updates.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "productivity tool",
    tags: ["React", "Firebase", "Material UI"],
    githubUrl: "https://github.com/yourusername/task-app",
    liveUrl: "#",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "This very portfolio website, showcasing my skills and projects. Designed with a focus on clean aesthetics and user experience.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "personal website",
    tags: ["Next.js", "Shadcn/UI", "Spline"],
    githubUrl: "https://github.com/yourusername/portfolio-pro",
  },
   {
    id: "4",
    title: "AI Content Generator",
    description: "An innovative tool leveraging generative AI to create marketing copy, blog posts, and social media updates. Integrated with OpenAI API.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "artificial intelligence",
    tags: ["Python", "Flask", "OpenAI API", "React"],
    githubUrl: "https://github.com/yourusername/ai-content-gen",
    liveUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-primary">Creations</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
