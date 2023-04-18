import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 20rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
  }
`;

export const Content = styled.div`
  max-width: 114rem;

  margin: 0 auto;
  padding-bottom: 5.2rem;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 4rem;

    > h2 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > a {
      width: 20.7rem;
    }
  }

  .notes {
    max-height: 60rem;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const NewNote = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4.8rem;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.GRAY_BUTTON};

  > svg {
    margin-right: 8px;
    margin-top: 2px;
    color: ${({ theme }) => theme.COLORS.GRAY_BUTTON};
  }
`;
