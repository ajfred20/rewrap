import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export function Testimonial({
  name,
  role,
  company,
  quote,
  image,
}: TestimonialProps) {
  return (
    <div className="flex flex-col items-start space-y-6 p-6 rounded-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800">
      <div className="relative w-12 h-12">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-full ring-2 ring-purple-600/20"
        />
      </div>
      <blockquote className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
        &quot;{quote}&quot;
      </blockquote>
      <div>
        <div className="font-semibold text-zinc-900 dark:text-white">
          {name}
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {role} at {company}
        </div>
      </div>
    </div>
  );
}
