import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 22rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 3.2rem;
  gap: 1.5rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_NOTES};
  border-radius: 1.6rem;
  cursor: pointer;

  > h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > span {
    display: flex;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-family: "Roboto", sans-serif;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    line-height: 1.9rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  footer {
    display: flex;
    gap: 8px;
  }
`;
