'use client';
import styled from 'styled-components';
export const SkillListWrapper = styled.article`
  h5 {
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.font.size.middle};
    font-weight: ${(props) => props.theme.font.weight};
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
