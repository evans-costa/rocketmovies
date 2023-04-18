import styled from "styled-components";

export const Container = styled.span`
  padding: 0.5rem 1.6rem;

  background: ${({ theme }) => theme.COLORS.GRAY_BUTTON};
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.WHITE_800};
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
`;
