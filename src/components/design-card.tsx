
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface Design {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tools?: string[];
}

interface DesignCardProps {
  design: Design;
}

export function DesignCard({ design }: DesignCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-border/60">
      <CardHeader className="p-0">
        <div className="aspect-square relative w-full overflow-hidden group">
          <Image
            src={design.imageUrl}
            alt={design.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={design.imageHint || "graphic design abstract"}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{design.title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-3 text-sm leading-relaxed">
          {design.description}
        </CardDescription>
        {design.tools && design.tools.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {design.tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="text-xs">{tool}</Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
