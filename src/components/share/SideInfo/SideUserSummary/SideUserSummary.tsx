import UserAvatar from '@assets/img/user-avatar.png';
import Telegram from '@assets/icons/resume/nav/Telegram.svg';
import GitHub from '@assets/icons/resume/nav/Github.svg';
import Twitter from '@assets/icons/resume/nav/Twitter.svg';
import Image from 'next/image';
import { Activity, AsideBody, LinksList, Name, StyledUserAvatar } from './SideUserSummary.elements';

export const SideUserSummary = () => {
  return (
    <>
      <AsideBody>
        <StyledUserAvatar src={UserAvatar} alt="User avatar" width={200} height={200} />
        <Name>Maxim Maxim</Name>
        <Activity>Web programmer</Activity>
        <LinksList>
          <a href="https://t.me/tooooooook/">
            <Image src={Telegram} alt="Telegram" />
          </a>
          <a href="https://github.com/Kimiyori">
            <Image src={GitHub} alt="Github" />
          </a>
          <a href="https://twitter.com/xmayedax">
            <Image src={Twitter} alt="Twitter" />
          </a>
        </LinksList>
      </AsideBody>
    </>
  );
};
