"use client";

import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-border">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AchroDev. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/AchroDev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="Github" size={24} />
          </a>
          <a href="mailto:achrodev@proton.me" className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="Mail" size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;