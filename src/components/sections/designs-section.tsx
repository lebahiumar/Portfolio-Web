
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Design } from "@/components/design-card"; // Keep type for data structure

const designsData: Design[] = [
  {
    id: "design1",
    title: "Modern Logo Concept",
    description: "A sleek and minimalist logo designed for a tech startup. Focus on geometric shapes and a vibrant color palette.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "logo design",
    tools: ["Illustrator", "Photoshop"],
  },
  {
    id: "design2",
    title: "Mobile App UI Kit",
    description: "User interface components for a social networking mobile application. Clean, intuitive, and user-friendly.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "ui kit",
    tools: ["Figma", "Sketch"],
  },
  {
    id: "design3",
    title: "Brand Identity Package",
    description: "Comprehensive branding guidelines including logo variations, color schemes, and typography for a coffee shop.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "brand identity",
    tools: ["InDesign", "Illustrator"],
  },
   {
    id: "design4",
    title: "Promotional Web Banner",
    description: "Eye-catching web banner for a seasonal marketing campaign. Designed to maximize click-through rates.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "web banner",
    tools: ["Photoshop", "Canva"],
  },
];

export function DesignsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? designsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === designsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!designsData || designsData.length === 0) {
    return (
      <section id="designs" className="container mx-auto px-4">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-primary">Designs</span>
        </h2>
        <p className="text-center text-muted-foreground">No designs to display yet.</p>
      </section>
    );
  }

  const currentDesign = designsData[currentIndex];

  return (
    <section id="designs" className="container mx-auto px-4">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-primary">Designs</span>
      </h2>
      
      <div className="relative flex flex-col items-center max-w-3xl mx-auto">
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg shadow-2xl border border-border/60">
          <Image
            src={currentDesign.imageUrl}
            alt={currentDesign.title} // Alt text for accessibility
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500 ease-in-out"
            key={currentDesign.id} // Ensures re-render on image change for transition
            data-ai-hint={currentDesign.imageHint || "graphic design abstract"}
          />
          <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="bg-background/70 hover:bg-background/90 text-foreground rounded-full shadow-md"
              aria-label="Previous design"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="bg-background/70 hover:bg-background/90 text-foreground rounded-full shadow-md"
              aria-label="Next design"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
