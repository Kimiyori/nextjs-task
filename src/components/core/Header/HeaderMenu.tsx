import styled, { css } from "styled-components";
import { bottomLeftHeader } from "@data/header";
import { NavLink } from "@/components/core/Link/Link";
const Menu = styled.ul<{ $isHorizontal: boolean }>`
  ${({ $isHorizontal }) =>
    $isHorizontal &&
    css`
      height: 100%;
    `}
  gap: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const HeaderMenu = ({
  data,
  isHorizontal = true,
}: {
  data: typeof bottomLeftHeader;
  isHorizontal?: boolean;
}) => {
  return (
    <Menu $isHorizontal={isHorizontal}>
      {data.map((element) => (
        <NavLink
          key={element.name}
          url={element.url}
          img={{ image: element.img.image, altName: element.img.altName }}
          name={element.name}
          isHorizontal={isHorizontal}
        />
      ))}
    </Menu>
  );
};
