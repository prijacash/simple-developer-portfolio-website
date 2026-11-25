import userData from "@constants/data";
import React from "react";

export default function Experience() {
  const items = userData.experience;

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 px-4 pt-2 pb-8 md:pb-12">
        <h1 className="text-5xl md:text-8xl font-bold leading-none text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
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
                  points={exp.points}
                  year={exp.year}
                  company={exp.company}
                  companyLink={exp.companyLink}
                  detail={exp.detail}
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

const ExperienceCard = ({
  title,
  desc,
  points,
  year,
  company,
  companyLink,
  detail,
}) => {
  const longYear = year && year.length > 9;
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <p
        className={`absolute -top-10 left-0 md:-left-10 md:-top-10 font-bold text-gray-400 dark:text-gray-500 ${
          longYear ? "text-lg md:text-2xl max-w-[16rem]" : "text-4xl"
        }`}
      >
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
      {detail ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">{detail}</p>
      ) : null}
      {points?.length ? (
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 my-2 space-y-1">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
      )}
    </div>
  );
};
