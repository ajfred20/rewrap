"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

interface CodePreviewProps {
  code: string;
}

export function CodePreview({ code }: CodePreviewProps) {
  const [, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightSyntax = (code: string) => {
    return code.split("\n").map((line, index) => (
      <span key={index} className="block">
        {line.split(" ").map((word, wordIndex) => {
          if (word.startsWith("//")) {
            return (
              <span key={wordIndex} className="text-zinc-500">
                {word}{" "}
              </span>
            );
          } else if (["npm"].includes(word)) {
            return (
              <span key={wordIndex} className="text-purple-400">
                {word}{" "}
              </span>
            );
          } else if (["cd", "npx"].includes(word)) {
            return (
              <span key={wordIndex} className="text-blue-400">
                {word}{" "}
              </span>
            );
          } else if (
            word.startsWith("rewrap-vite-tailwind") ||
            word.startsWith("'")
          ) {
            return (
              <span key={wordIndex} className="text-emerald-300">
                {word}{" "}
              </span>
            );
          } else if (
            word.startsWith("rewrap-vitejs-tailwind") ||
            word.endsWith(" >") ||
            word.endsWith("create vite@latest")
          ) {
            return (
              <span key={wordIndex} className="text-orange-300">
                {word}{" "}
              </span>
            );
          } else if (["-g", "create", "vite@latest"].includes(word)) {
            return (
              <span key={wordIndex} className="text-red-400">
                {word}{" "}
              </span>
            );
          } else {
            return <span key={wordIndex}>{word} </span>;
          }
        })}
      </span>
    ));
  };

  return (
    <div className="rounded-xl bg-zinc-900 overflow-hidden text-sm sm:text-base">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-zinc-800/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <button
          onClick={copyToClipboard}
          className="text-zinc-400 hover:text-zinc-300 transition-colors"
        >
          <Copy size={16} />
        </button>
      </div>
      <div className="p-3 sm:p-4 overflow-x-auto">
        <pre className="text-xs sm:text-sm text-zinc-300">
          <code>{highlightSyntax(code)}</code>
        </pre>
      </div>
    </div>
  );
}
