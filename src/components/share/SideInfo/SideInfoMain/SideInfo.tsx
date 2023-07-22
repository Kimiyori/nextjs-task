import SideUserSummary from '@/components/share/SideInfo/SideUserSummary/SideUserSummary';
import SideNavigation from '@/components/share/SideInfo/SideNavigation/SideNavigation';
import SideComments from '@/components/share/SideInfo/SideComments/SideComment';
import SideInfoWrapper from '@components/share/SideInfo/SideInfoMain/SideInfo.elements';

const SideInfo = ({ className }: { className?: string }) => {
  return (
    <SideInfoWrapper className={className}>
      <SideUserSummary />
      <SideNavigation />
      <SideComments />
    </SideInfoWrapper>
  );
};
export default SideInfo;
