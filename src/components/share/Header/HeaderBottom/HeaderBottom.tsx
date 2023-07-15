import styled from "styled-components";
import { bottomLeftHeader, bottomRightHeader } from "@/data/header";
import { HeaderMenu } from "@/components/core/Header/HeaderMenu";
const BottomHeaderSection = styled.section`
  background: ${(props) => props.theme.color.Secondary};
  min-height: 40px;
  margin: 0;
  padding: 0;
  padding-left: 3rem;
  padding-right: 3rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
const MenuWrapper = styled.section`
  display: flex;
  flex-basis: auto;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
`;
export const HeaderBottom = () => {
  return (
    <>
      <BottomHeaderSection>
        <MenuWrapper>
          <HeaderMenu data={bottomLeftHeader} />
          <HeaderMenu data={bottomRightHeader} />
        </MenuWrapper>
      </BottomHeaderSection>
    </>
  );
};
