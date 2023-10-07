import React from 'react';

interface Skill {
  name: string;
  rating: number;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const halfLength = Math.ceil(skills.length / 2);
  const skillsLeft = skills.slice(0, halfLength);
  const skillsRight = skills.slice(halfLength);

  return (
    <section id="skills">
      <h2 className="text-3xl py-4 flex justify-center font-bold tracking-tight text-gray-100">
        Compétences
      </h2>
      <div className="flex">
        {/* Première colonne de compétences */}
        <ul className="w-1/2">
          {skillsLeft.map((skill, index) => (
            <li
              key={index}
              className="my-4 flex items-center justify-start"
            >
              <span className="text-xl text-gray-300">• {skill.name}</span>
              <div className="flex ml-2">
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
            </li>
          ))}
        </ul>

        {/* Deuxième colonne de compétences */}
        <ul className="w-1/2">
          {skillsRight.map((skill, index) => (
            <li
              key={index + halfLength}
              className="my-4 flex items-center justify-start"
            >
              <span className="text-xl text-gray-300">• {skill.name}</span>
              <div className="flex ml-2">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
