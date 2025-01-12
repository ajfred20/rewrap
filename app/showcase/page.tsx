import { Layout } from "@/components/layout";
import { Footer } from "@/components/footer";
import { Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ShowcasePage() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <h1 className="mt-8 text-2xl font-bold text-zinc-900 dark:text-white">
            Project Overview
          </h1>
          <div className="mt-4">
            <video className="w-full max-w-4xl" autoPlay loop muted playsInline>
              <source src="/testrun.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Project Structure
            </h2>
            <p className="mt-2 list-disc list-inside text-zinc-600 dark:text-zinc-400"></p>
            The installer creates a well-organized project structure:
            <ul className="mt-2 list-disc list-inside text-zinc-600 dark:text-zinc-400">
              <li>Configures TailwindCSS with a custom configuration.</li>
              <li>
                Sets up a global CSS file with design tokens for light and dark
                modes.
              </li>
              <li>
                Creates reusable components like Layout and Sidebar (if
                selected).
              </li>
              <li>
                Implements ThemeProvider for dark mode functionality (if
                selected).
              </li>
              <li>Adds a sample form component (if selected).</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Features
            </h2>
            <ul className="mt-2 list-disc list-inside text-zinc-600 dark:text-zinc-400">
              <li className="mt-2">
                Multiple Framework Support: Choose between React, Vue, and
                Svelte.
              </li>
              <li className="mt-2">
                Language Options: Set up your project with JavaScript or
                TypeScript.
              </li>
              <li className="mt-2">
                TailwindCSS Integration: Automatically installs and configures
                TailwindCSS.
              </li>
              <li className="mt-2">
                UI Component Libraries: Option to include shadcn/ui components
                (for React projects).
              </li>
              <li className="mt-2">
                Icon Sets: Choose from Lucide, Font Awesome, or Heroicons.
              </li>
              <li className="mt-2">
                Additional Features:{" "}
                <span className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
                  Dark Mode, Responsive Sidebar, Sample Form & Animations
                </span>
              </li>
              <li className="mt-2">
                Popular Package Integration: Easily add packages like React
                Router, Axios, Redux Toolkit, React Query, Framer Motion, and
                React Hook Form.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
