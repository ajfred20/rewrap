"use client";

import { Layout } from "@/components/layout";
import { CodePreview } from "@/components/code-preview";
import { Testimonial } from "@/components/testimonial";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ArrowRight,
  LayoutGrid,
  Wand2,
  Crown,
  Shapes,
  BadgeAlert,
  Gauge,
  ShieldCheck,
  Cpu,
  Timer,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

const designSystemCode = `<div class="space-y-4">
  <div class="w-96 bg-white shadow rounded">
  <div class="w-72 bg-white shadow rounded">
  <div class="w-64 bg-white shadow rounded">
  <div class="w-56 bg-white shadow rounded">
  <div class="w-48 bg-white shadow rounded">
  <div class="w-40 bg-white shadow rounded">
</div>`;

const codeExample = `Aj Fred> rewrap-vite-tailwind

   ╔══════════════════════╗
   ║                      ║
   ║   Rewrap Installer   ║
   ║                      ║
   ╚══════════════════════╝

√ Is this a new project or an existing project? » New Project
√ What is your project name? ... rewrap-app
√ Which framework would you like to use? » React
√ Which language would you like to use? » TypeScript
√ Would you like to include shadcn/ui components? (React only) ... yes
√ Which icon set would you like to use? » Lucide
√ Select additional features to include: » Dark Mode, Animations
√ Select additional packages to install: »
√ Do you want to proceed with the installation? ... no

Installation aborted. Bye! 👋`;

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-32 pb-16 sm:pb-20 md:pb-40">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-2">
              Create Your Next Fullstack Project
              <span className="block">
                In A <span className="text-gradient">Matter Of Seconds</span>
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-3 sm:px-4">
              Rewrap is a package used to effortlessly add packages neccesary
              for creating a fullstack project hassle free. Use frameworks like{" "}
              <code className="text-purple-600 dark:text-purple-400 font-mono bg-purple-50 dark:bg-purple-900/20 rounded px-1">
                react
              </code>
              ,{" "}
              <code className="text-purple-600 dark:text-purple-400 font-mono bg-purple-50 dark:bg-purple-900/20 rounded px-1">
                vue
              </code>
              , and{" "}
              <code className="text-purple-600 dark:text-purple-400 font-mono bg-purple-50 dark:bg-purple-900/20 rounded px-1">
                svelte
              </code>{" "}
              to build any project, directly in your IDE, without leaving your
              IDE environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4">
              <Link href="/docs" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-sm sm:text-base font-medium px-6 sm:px-8 w-full sm:w-auto"
                >
                  Get started
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>

              <div className="relative w-full sm:w-auto mt-3 sm:mt-0">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-zinc-400"
                  size={18}
                />
                <Input
                  placeholder="Quick search..."
                  className="w-full sm:w-72 pl-10 text-sm bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.purple.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.purple.900/30),transparent)]" />
      </section>

      {/* Code Preview Section */}
      <section className="py-12 sm:py-16 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 max-w-[350px] sm:max-w-none">
              <CodePreview code={codeExample} />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                Simplify your workflow
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Rewrap is a powerful CLI tool that streamlines the process of
                setting up modern web development projects. It provides an
                interactive setup experience, allowing you to quickly configure
                a project with your preferred framework, language, and
                additional features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <Testimonial
              name="Sarah Chen"
              role="Frontend Developer"
              company="TechCorp"
              quote="Rewrap has completely transformed how I build interfaces. Their current approach is a game-changer."
              image="/assets/sarah.svg"
            />
            <Testimonial
              name="Alexa Rivera"
              role="UI Designer"
              company="DesignLab"
              quote="The flexibility and speed of development with Rewrap is unmatched. It's become our go-to CLI for projects."
              image="/assets/alexa.svg"
            />
            <Testimonial
              name="Jordan Lee"
              role="Tech Lead"
              company="StartupX"
              quote="We've cut our workload in half and development time by 40% since switching to Rewrap. It's a must-have for any development team."
              image="/assets/lee.svg"
            />
          </div>
        </div>
      </section>

      {/* Design System API Section */}
      <section className="py-32 bg-gradient-to-b from-white to-purple-50 dark:from-zinc-950 dark:to-purple-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <BadgeAlert className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Hassle Free
              </p>
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              A CLI Tool for your development needs.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Rewrap is a CLI tool that allows you to streamline the process of
              setting up a modern web development project. It provides an
              interactive setup experience, allowing you to quickly configure a
              project with your preferred framework, language, and so much more
              additional features.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  Faster
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  More Secure
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  Faster Processing
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                  <Timer className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  Time-Saving
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  <div className="h-8 bg-purple-100 dark:bg-purple-900/20 rounded w-86" />
                  <div className="h-8 bg-purple-100 dark:bg-purple-900/20 rounded w-72" />
                  <div className="h-8 bg-purple-100 dark:bg-purple-900/20 rounded w-64" />
                  <div className="h-8 bg-purple-100 dark:bg-purple-900/20 rounded w-56" />
                  <div className="h-8 bg-purple-100 dark:bg-purple-900/20 rounded w-48" />
                  <div className="h-8 bg-purple-100 dark:bg-purple-900/20 rounded w-40" />
                </div>
              </div>
              <div className="order-2 md:order-1 ">
                <CodePreview code={designSystemCode} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Whatever Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Wand2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Build anything
              </p>
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Build whatever you want, seriously.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Because Rewrap is so low-level, it never encourages you to design
              the same site twice. Even with the same color palette and sizing
              scale, it's easy to build the same component with a completely
              different look in the next project.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                  <LayoutGrid className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  Simple
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                  <Wand2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  Playful
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  Elegant
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                  <Shapes className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  Brutalist
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-full">
              <ProductCard
                name="Classic Utility Jacket"
                price={110.0}
                image="/assets/classic-utility-jacket.jpg"
                sizes={["XS", "S", "M", "L", "XL"]}
              />
            </div>
            <div className="order-2 md:order-1 mt-3">
              <CodePreview
                code={`<div class="flex font-sans">
                        <div class="flex-none w-48 relative">
                          <img src="/classic-utility-jacket.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                        </div>
                        <form class="flex-auto p-6">
                          <div class="flex flex-wrap">
                            <h1 class="flex-auto text-lg font-semibold text-slate-900">
                              Classic Utility Jacket
                            </h1>
                            <div class="text-lg font-semibold text-slate-500">
                              $110.00
                            </div>
                          </div>
                        </form>
                      </div>`}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
