import { Layout } from "@/components/layout";
import { Footer } from "@/components/footer";
import { Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/20 rounded-full scale-150" />
            <Lock className="relative w-24 h-24 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="mt-8 text-2xl font-bold text-zinc-900 dark:text-white">
            Under Development
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto">
            This page is still under construction. Please check back later.
          </p>
          <div className="mt-8 space-x-4">
            <Link href="/">
              <Button variant="outline">Go Home</Button>
            </Link>
            <Link href="/docs">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View Docs
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
