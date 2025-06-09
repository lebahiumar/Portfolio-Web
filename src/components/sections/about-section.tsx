import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, CodeXml, Database, Cloud, BrainCircuit, Briefcase, CalendarDays, MapPin } from "lucide-react";

const skills = [
  { name: "JavaScript (ES6+)", icon: CodeXml, category: "Languages" },
  { name: "TypeScript", icon: CodeXml, category: "Languages" },
  { name: "Python", icon: CodeXml, category: "Languages" },
  { name: "React & Next.js", icon: CodeXml, category: "Frameworks/Libraries" },
  { name: "Node.js & Express", icon: CodeXml, category: "Frameworks/Libraries" },
  { name: "SQL & NoSQL Databases", icon: Database, category: "Databases" },
  { name: "Cloud Platforms (AWS, GCP)", icon: Cloud, category: "DevOps & Cloud" },
  { name: "Docker & Kubernetes", icon: Cloud, category: "DevOps & Cloud" },
  { name: "Agile Methodologies", icon: BrainCircuit, category: "Methodologies" },
  { name: "UI/UX Principles", icon: BrainCircuit, category: "Design" },
];

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2021 - Present",
    location: "San Francisco, CA",
    description: "Led development of key features for a SaaS product, mentored junior engineers, and contributed to architectural decisions. Specialized in full-stack development using React, Node.js, and AWS services."
  },
  {
    role: "Software Developer",
    company: "Innovatech Ltd.",
    duration: "Jun 2018 - Dec 2020",
    location: "Boston, MA",
    description: "Developed and maintained web applications for various clients. Gained extensive experience in front-end technologies and agile development practices."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              data-ai-hint="professional portrait"
              className="transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card className="mb-8 shadow-lg border-border/60">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Highly motivated and results-oriented software engineer with X years of experience in designing, developing, and deploying scalable web applications. Proven ability to work in fast-paced environments and collaborate effectively within cross-functional teams. Passionate about leveraging cutting-edge technologies to solve complex problems and deliver exceptional user experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 shadow-lg border-border/60">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="py-2 px-3 text-sm border-primary/50 text-foreground hover:bg-primary/10 transition-colors">
                    <skill.icon className="mr-2 h-4 w-4 text-primary" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-border/60">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="p-4 rounded-md border border-border/40 bg-background hover:shadow-md transition-shadow">
                    <h3 className="font-headline text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-1 mb-2">
                        <span className="flex items-center"><CalendarDays className="mr-1 h-3 w-3" /> {exp.duration}</span>
                        <span className="flex items-center"><MapPin className="mr-1 h-3 w-3" /> {exp.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
