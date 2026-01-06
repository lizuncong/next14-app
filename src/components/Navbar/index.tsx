import Link from "next/link";
import { navItems } from "./menu";

export default function Navbar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-full w-80 bg-white shadow-xl dark:bg-gray-900">
      <div className="flex h-full flex-col">
        {/* 头部 */}
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Next 14教程
          </Link>
        </div>

        {/* 导航内容 */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-2">
            {navItems.map((item) => {
              if (item.href) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.target}
                    className="block rounded-md px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.children) {
                return (
                  <details key={item.label} open>
                    <summary className="flex items-center justify-between rounded-md px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer transition-colors list-none">
                      <span>{item.label}</span>
                      <svg
                        className="h-5 w-5 transition-transform duration-300 ease-in-out"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </summary>
                    <div className="ml-4 mt-1 space-y-1 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href || "#"}
                          className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              }

              return null;
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
