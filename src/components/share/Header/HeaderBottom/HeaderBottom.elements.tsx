'use client';
import { styled } from 'styled-components';
import { FC, PropsWithChildren } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { devices } from '@/data/breakpoints';

const HeaderBottomWrapper: FC<PropsWithChildren> = ({ children }) => {
  const isDesktop = useMediaQuery(devices.lg);
  return (
    <>
      {isDesktop && (
        <BottomHeaderSection>
          <MenuWrapper>{children}</MenuWrapper>
        </BottomHeaderSection>
      )}
    </>
  );
};
const BottomHeaderSection = styled.section`
  background: ${(props) => props.theme.color.Primary};
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
export default HeaderBottomWrapper;
