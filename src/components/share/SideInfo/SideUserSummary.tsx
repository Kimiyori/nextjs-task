import UserAvatar from "@assets/img/user-avatar.png";
import Telegram from "@assets/icons/resume/nav/Telegram.svg";
import GitHub from "@assets/icons/resume/nav/Github.svg";
import Twitter from "@assets/icons/resume/nav/Twitter.svg";
import Image from "next/image";
import { styled } from "styled-components";

const AsideBody = styled.aside`
  background: ${(props) => props.theme.color.Secondary};
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:1rem;
`;

const StyledUserAvatar = styled(Image)`
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const Name = styled.h4`
  font-weight: ${(props) => props.theme.font.weight};
  font-size: ${(props) => props.theme.font.size.middle};
  margin:0;
`;
const Activity = styled.h5`
  font-weight: ${(props) => props.theme.font.weight};
  font-style: italic;
  font-size: ${(props) => props.theme.font.size.normal};
  margin: 0;
`;

const LinksList = styled.div`
  display:flex;
  justify-content: center;
  gap:1.5rem;
`;
export const SideUserSummary = () => {
  return (
    <>
      <AsideBody>
        <StyledUserAvatar
          src={UserAvatar}
          alt="User avatar"
          width={200}
          height={200}
        />
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
