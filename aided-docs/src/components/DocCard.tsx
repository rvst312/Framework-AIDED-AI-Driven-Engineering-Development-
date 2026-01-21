import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface DocCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function DocCard({ title, description, icon: Icon, href, className }: DocCardProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "group flex flex-col p-6 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl hover:border-gray-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all duration-200",
        className
      )}
    >
      <div className="mb-4">
        <Icon className="w-6 h-6 text-gray-900 dark:text-gray-100 stroke-[1.5] transition-colors" />
      </div>
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">
        {description}
      </p>
    </Link>
  );
}
