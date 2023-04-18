import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  > h2 {
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.7rem;
    align-self: flex-start;

    margin-top: 2.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE_900};
  }
`