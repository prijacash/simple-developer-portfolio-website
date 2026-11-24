import React from "react";
import userData from "@constants/data";
import VentureCard from "./VentureCard";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 px-4">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Ventures
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <p className="pt-16 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Family content, a studio for local businesses, and work in crypto.
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
