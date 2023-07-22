import Image from 'next/image';
import ResumeImage from '@assets/img/abstractimg.jpeg';
import {
  ResumeImageWrapper,
  ResumePageWrapper,
  ResumeWrapper,
  ResumeWrapperSkills,
} from '@/components/pageSpecific/resume.elements';
import AddressList from '@/components/core/Address/AddressList';
import SideInfo from '@/components/share/SideInfo/SideInfoMain/SideInfo';
import { skillsList } from '@/data/resume';
import SkillList from '@/components/core/SkillList/SkillList';
import { Fragment } from 'react';

export default function Resume() {
  return (
    <ResumePageWrapper sidebar={<SideInfo />}>
      <ResumeWrapper>
        <ResumeImageWrapper>
          <Image src={ResumeImage} alt="Resume" />
          <h6>Resume</h6>
        </ResumeImageWrapper>
        <hr className="solid" />
        <AddressList />
      </ResumeWrapper>
      <ResumeWrapperSkills>
        <h2>Skills</h2>
        <hr className="solid" />
        {skillsList.map((element, index) => (
          <Fragment key={index}>
            <SkillList title={element.title} skills={element.skills} />
            <hr className="solid" />
          </Fragment>
        ))}
      </ResumeWrapperSkills>
    </ResumePageWrapper>
  );
}
