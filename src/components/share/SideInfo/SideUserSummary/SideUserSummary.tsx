import UserAvatar from '@assets/img/user-avatar.png';
import Telegram from '@assets/icons/resume/nav/Telegram.svg';
import GitHub from '@assets/icons/resume/nav/Github.svg';
import Twitter from '@assets/icons/resume/nav/Twitter.svg';
import { Activity, AsideBody, LinksList, Name, StyledUserAvatar } from './SideUserSummary.elements';
import { FC } from 'react';

const SideUserSummary: FC = () => {
  return (
    <AsideBody>
      <StyledUserAvatar src={UserAvatar} alt="User avatar" width={200} height={200} />
      <Name>Maxim Maxim</Name>
      <Activity>Web programmer</Activity>
      <LinksList>
        <a href="https://t.me/tooooooook/">
          <Telegram title="Telegram" />
        </a>
        <a href="https://github.com/Kimiyori">
          <GitHub title="Github" />
        </a>
        <a href="https://twitter.com/xmayedax">
          <Twitter title="Twitter" />
        </a>
      </LinksList>
    </AsideBody>
  );
};
export default SideUserSummary;
