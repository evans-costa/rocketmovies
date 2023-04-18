import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 1rem;
  border: ${({ isNew, theme }) =>
		isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
  background-color: ${({ isNew, theme }) =>
		isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};
  
  input {
    height: 5.6rem;
    width: 100%;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    line-height: 1.9rem;

    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  button {
    background: transparent;
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-right: 1.6rem;
    height: 2.4rem;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;
