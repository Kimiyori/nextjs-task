import styled from "styled-components";

type TSkillList = {
  title: string;
  skills: string[];
};

const SkillElement = styled.article`
  h5 {
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.font.size.middle};
    font-weight: ${(props) => props.theme.font.weight};
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
export const SkillList = ({ title, skills }: TSkillList) => {
  return (
    <>
      <SkillElement>
        <h5 >{title}</h5>
        <div className="d-flex flex-row flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-body-secondary bg-opacity-75 px-4 py-2 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </SkillElement>
    </>
  );
};
