import { useReducer } from "react";
import styled from "styled-components";
import Image from "next/image";
import UpButton from "@assets/icons/resume/nav/UpButton.svg";
import DownButton from "@assets/icons/common/Dropdown.svg";
const NavTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  h4 {
    margin: 0;
    font-size: ${(props) => props.theme.font.size.normal};
  }
`;
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
  hr {
    width: 100%;
  }
  margin-bottom: 2rem;
`;
const TextArea = styled.textarea`
  width: 100%;
  display: block;
  min-height: 100px;
  border-radius: 5px;
  margin-bottom: 1rem;
`;
const CommentButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.color.Primary};
  border: 1px solid;
  padding: 0.5rem;
`;
export const SideComments = () => {
  const [show, toggle] = useReducer((checked) => !checked, true);
  return (
    <>
      <AsideBody>
        <NavTitle onClick={toggle}>
          <h4>Share your thoughts</h4>
          <Image
            src={show ? UpButton : DownButton}
            width={24}
            alt="UpButton icon"
          />
        </NavTitle>
        {show && (
          <>
            <hr />
            <TextArea />
            <CommentButton type="button">Save</CommentButton>
          </>
        )}
      </AsideBody>
    </>
  );
};
