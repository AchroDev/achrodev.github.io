"use client";

import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ title, description = [], tags = [], link, liveLink, wip }) => {

  // If the project is a work-in-progress, render the construction card
  if (wip) {
    return (
      <motion.div variants={cardVariants} className="h-full">
        <Card className="h-full flex flex-col items-center justify-center p-6 border-dashed border-border/80 bg-muted/20 opacity-60">
          <div 
            className="w-full h-full flex items-center justify-center rounded-md" 
            style={{ 
              backgroundImage: 'repeating-linear-gradient(-45deg, oklch(var(--primary)), oklch(var(--primary)) 20px, #0000 20px, #0000 40px)' 
            }}
          >
            <div className="bg-background px-4 py-2 rounded-md shadow-lg">
              <p className="font-semibold text-lg text-foreground">
                Under Construction
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Otherwise, render the standard project card
  return (
    <motion.div
      variants={cardVariants}
      className="h-full"
    >
      <Card className="h-full flex flex-col card-glow">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div>
            {liveLink && (
              <Button asChild>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  View Live
                </a>
              </Button>
            )}
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="Github" size={24} />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;