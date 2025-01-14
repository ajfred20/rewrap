"use client";

import {
  Moon,
  Sun,
  Book,
  Newspaper,
  Laptop,
  Menu,
  X,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-zinc-950 transition-colors`}>
      <header className="fixed top-0 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400 flex items-center gap-2"
          >
            <img src="/rewrap.svg" alt="Rewrap Logo" className="w-6 h-6" />
            Rewrap
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/docs"
              className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center"
            >
              <Book className="mr-1" size={18} />
              Docs
            </Link>
            <Link
              href="/blog"
              className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center"
            >
              <Newspaper className="mr-1" size={18} />
              Blog
            </Link>
            <Link
              href="/showcase"
              className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center"
            >
              <Laptop className="mr-1" size={18} />
              Showcase
            </Link>
            <Link
              href="/contributors"
              className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center"
            >
              <User className="mr-1" size={18} />
              Contributors
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-zinc-600 dark:text-zinc-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/docs"
                className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Book className="mr-2" size={18} />
                Docs
              </Link>
              <Link
                href="/blog"
                className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Newspaper className="mr-2" size={18} />
                Blog
              </Link>
              <Link
                href="/showcase"
                className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Laptop className="mr-2" size={18} />
                Showcase
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
}
