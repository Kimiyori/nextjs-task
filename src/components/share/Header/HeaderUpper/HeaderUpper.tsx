import { upperHeader } from "@data/header";
import Back from "@assets/icons/header/Back.svg";
import Image from "next/image";
import { styled } from "styled-components";
import { HeaderMenu } from "@/components/core/Header/HeaderMenu";
import { Sidebar } from "../../SideBar/Sidebar";

const UpperHeaderSection = styled.section`
  background: ${(props) => props.theme.color.Primary};
  min-height: 64px;
  z-index: 1;
  margin: 0;
  padding: 0;
  padding-left: 3rem;
  padding-right: 3rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
const LeftElement = styled.figure`
  margin: 0;
  display: flex;
  align-items: center;
  span {
    margin-left: 1rem;
    font-size: ${(props) => props.theme.font.size.middle};
    font-weight: ${(props) => props.theme.font.weight};
  }
`;

export const UpperHeader = ({ isDesktop }: { isDesktop:boolean }) => {
  return (
    <>
      <UpperHeaderSection>
        <LeftElement>
          <Image src={Back} alt="Back" />
          <span>User pages - Profile</span>
        </LeftElement>
        {isDesktop ? (
          <HeaderMenu data={upperHeader} isHorizontal={false} />
        ) : (
          <Sidebar />
        )}
      </UpperHeaderSection>
    </>
  );
};
