import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 111rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin: 0 auto;

  .movie-details {
    height: 70rem;
    overflow-y: auto;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;

  margin: 2.4rem 0;

  > h2 {
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.7rem;
    color: ${({ theme }) => theme.COLORS.WHITE_900};

    margin-right: 1.9rem;
  }

  > span {
    margin-right: 1rem;
    margin-top: 6px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Roboto", sans-serif;

  > img {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_BORDER};
  }

  > svg {
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 4rem 0;
`;
export const Review = styled.div`
  line-height: 2.1rem;
  text-align: justify;

  color: ${({ theme }) => theme.COLORS.WHITE_900};
`;
