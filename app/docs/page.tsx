import { Layout } from "@/components/layout";
import { CodePreview } from "@/components/code-preview";
import { Button } from "@/components/ui/button";
import { CheckCircle, HelpCircle } from "lucide-react";
import { Footer } from "@/components/footer";
import Link from "next/link";

const jsIntegrationCode = `// Install Rewrap
npm i -g rewrap-vitejs-tailwind

// Or use NPX
npx rewrap-vite-tailwind

// Run the installer if you have installed globally to initialize the package
rewrap-installer

// Run development server
cd my-project-name
npm run dev`;

export default function RewrapDocsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center">
          How to use Rewrap
        </h1>

        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
              React Integration
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Here's how to use Rewrap to add utility classes to your React
              project:
            </p>
            <CodePreview code={jsIntegrationCode} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center">
              <CheckCircle className="mr-2" size={24} />
              Integration Steps
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Run the installer command.</li>
              <li>Follow the interactive prompts to configure your project:</li>
              <li>
                Choose between creating a new project or configuring an existing
                one.
              </li>
              <li>Select your preferred framework (React, Vue, or Svelte).</li>
              <li>Choose the language (JavaScript or TypeScript).</li>
              <li>Choose the language (JavaScript or TypeScript).</li>
              <li>Opt for additional features and packages.</li>
              <li>
                The installer will set up your project with the selected
                configuration.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
              Project Structure
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              To see how the project would be structured after the running the
              commands please visit the projects showcase page.
            </p>
            <Link href="/showcase">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Project Showcase
              </Button>
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center">
              <HelpCircle className="mr-2" size={24} />
              Need Help?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you need assistance with integration or have any questions, our
              support team is here to help. Check out our{" "}
              <a href="/docs" className="text-purple-600 hover:underline">
                documentation
              </a>{" "}
              or{" "}
              <a
                href="https://x.com/iamajfred_"
                className="text-purple-600 hover:underline"
              >
                contact support
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
