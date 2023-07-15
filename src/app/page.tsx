"use client";
import Image from "next/image";
import ResumeImage from "@assets/img/abstractimg.jpeg";
import { addresses, skillsList } from "@data/resume";
import { Address } from "@/components/core/Address/Address";
import { ResumeWrapper } from "@/components/core/ResumeWrapper/ResumeWrapper";
import { styled } from "styled-components";
import { Fragment } from "react";
import { SkillList } from "@/components/core/SkillList/SkillList";
import { SideInfo } from "@/components/share/SideInfo/SideInfo";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { devices } from "@/data/breakpoints";

const MainResumeWrapper = styled.main`
  background: ${(props) => props.theme.color.Primary};
  margin: 3rem;
  display: flex;
  gap: 3rem;
`;
const ResumeHeaderSection = styled.section`
  gap: 3rem;
  flex-direction: column;
  height: 100%;
  display: flex;
  flex: 1 0;
`;
const ResumeImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 200px;
  }
  h6 {
    text-align: center;
    position: absolute;
    font-size: ${(props) => props.theme.font.size.big};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background: ${(props) => props.theme.color.Secondary};
    color: ${(props) => props.theme.color.OnSecondary};
    opacity: 0.5;
    margin: 0;
  }
`;
const AddressWrapper = styled.address`
  display: flex;
  flex-direction: column;
  gap: 4;
  justify-content: space-evenly;
  margin-bottom: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
  }
`;
const ResumeWrapperSkills = styled(ResumeWrapper)`
  h2 {
    margin: 0;
    font-size: ${(props) => props.theme.font.size.big};
  }
`;

export default function Resume() {
  const isDesktop = useMediaQuery(devices.lg);
  return (
    <>
      <MainResumeWrapper>
        <ResumeHeaderSection>
          <ResumeWrapper>
            <ResumeImageWrapper>
              <Image
                src={ResumeImage}
                className="w-100 object-fit-cover"
                alt="Resume"
              />
              <h6>Resume</h6>
            </ResumeImageWrapper>
            <hr className="solid" />
            <AddressWrapper>
              {addresses.map((address, index) => (
                <Address
                  key={index}
                  name={address.name}
                  url={address.url}
                  img={{
                    src: address.img.src,
                    alt: address.img.alt,
                  }}
                />
              ))}
            </AddressWrapper>
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
        </ResumeHeaderSection>
        {isDesktop && <SideInfo />}
      </MainResumeWrapper>
    </>
  );
}
