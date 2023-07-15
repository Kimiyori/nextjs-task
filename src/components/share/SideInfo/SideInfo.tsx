import { styled } from "styled-components";

import { SideUserSummary } from "@/components/share/SideInfo/SideUserSummary";
import { SideNavigation } from "@/components/share/SideInfo/SideNavigation";
import { SideComments } from "@/components/share/SideInfo/SideComment";

const SideWrapper = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const SideInfo = ({ className }: { className?: string }) => {
  return (
    <>
      <SideWrapper className={className}>
        <SideUserSummary />
        <SideNavigation />
        <SideComments />
      </SideWrapper>
    </>
  );
};
