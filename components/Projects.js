import React from "react";
import userData from "@constants/data";
import VentureCard from "./VentureCard";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 px-4 pt-2 pb-8 md:pb-12">
        <h1 className="text-5xl md:text-8xl font-bold leading-none text-center md:text-left">
          Web3 Work
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <p className="pt-10 md:pt-14 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Content creation, community, and creator work around meme projects on BNB Chain and Base. CHOMP is a memecoin built on Base: co-founder, operations, marketing, and art direction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 pb-24 md:pb-40">
            {userData.ventures.map((venture, idx) => (
              <VentureCard
                key={venture.title}
                title={venture.title}
                summary={venture.summary}
                label={venture.label}
                links={venture.links}
                number={idx + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
