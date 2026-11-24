import React from "react";

export default function VentureCard({ title, summary, label, links, number }) {
  const padded = String(number).padStart(2, "0");
  return (
    <article className="h-full bg-white dark:bg-gray-800 rounded-md shadow-xl p-6 md:p-8 flex flex-col">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-sm text-gray-400">{padded}</span>
        {label ? (
          <span className="text-xs font-semibold uppercase tracking-wide text-red-500 text-right">
            {label}
          </span>
        ) : null}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mt-6">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed flex-1">
        {summary}
      </p>
      {links?.length ? (
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-gray-800 dark:border-gray-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
