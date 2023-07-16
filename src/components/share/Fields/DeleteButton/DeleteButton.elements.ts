import { Button } from "@/components/core/Button/Button";
import { styled } from "styled-components";

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
`;
export const StyledPopupButton = styled(Button)`
  border:1px solid ${props=>props.theme.color.Outline};
`;
