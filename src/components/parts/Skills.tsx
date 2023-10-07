import React from 'react';

interface Skill {
  name: string;
  rating: number;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills">
      <h2 className="text-3xl py-4 flex justify-center font-bold tracking-tight text-gray-100">
        Compétences
      </h2>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4"
          >
            <div className="my-4 flex flex-col md:flex-row md:items-center justify-start">
              <span className="text-xl text-gray-300">• {skill.name}</span>
              <div className="flex ml-2 mt-2 md:mt-0">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-3xl mx-1 ${
                      i < skill.rating
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                  >
                    &#x2605;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
