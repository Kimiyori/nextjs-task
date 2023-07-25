import { FC } from 'react';
import { SkillListWrapper } from './SkillList.elements';

type SkillListProps = {
  title: string;
  skills: string[];
};

const SkillList: FC<SkillListProps> = ({ title, skills }) => {
  return (
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
  );
};
export default SkillList;
