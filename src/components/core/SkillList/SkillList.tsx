import { SkillListWrapper } from './SkillList.elements';

type TSkillList = {
  title: string;
  skills: string[];
};

export const SkillList = ({ title, skills }: TSkillList) => {
  return (
    <>
      <SkillListWrapper>
        <h5>{title}</h5>
        <div className="d-flex flex-row flex-wrap gap-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-body-secondary bg-opacity-75 px-4 py-2 rounded">
              {skill}
            </span>
          ))}
        </div>
      </SkillListWrapper>
    </>
  );
};
