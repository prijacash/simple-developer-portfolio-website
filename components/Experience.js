import userData from "@constants/data";
import React from "react";

export default function Experience() {
  const items = userData.experience;

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 px-4">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20 pb-24">
          {items.map((exp, idx) => {
            const previous = items[idx - 1];
            const next = items[idx + 1];
            const showEra = !previous || previous.era !== exp.era;
            const eraChangesNext = next && next.era !== exp.era;

            return (
              <div key={`${exp.title}-${exp.company || idx}`}>
                {showEra ? (
                  <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-14 px-4">
                    {exp.era === "now" ? "Now" : "Earlier"}
                  </p>
                ) : null}
                <ExperienceCard
                  title={exp.title}
                  desc={exp.desc}
                  year={exp.year}
                  company={exp.company}
                  companyLink={exp.companyLink}
                />
                {next ? (
                  eraChangesNext ? (
                    <div className="h-16" />
                  ) : (
                    <div className="divider-container flex flex-col items-center -mt-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                        <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                      </div>
                      <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                    </div>
                  )
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <p className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-400 font-bold dark:text-gray-500">
        {year}
      </p>
      <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      {company ? (
        companyLink ? (
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 dark:text-gray-400"
          >
            {company}
          </a>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">{company}</p>
        )
      ) : null}
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};
