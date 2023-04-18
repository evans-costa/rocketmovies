import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4.8rem;
  padding: 1.6rem;

  font-size: 1.6rem;

  background-color: ${({ theme, isRemove }) =>
    isRemove ? theme.COLORS.BACKGROUND_SECONDARY : theme.COLORS.PINK};
  border-radius: 8px;

  color: ${({ theme, isRemove }) => (isRemove ? theme.COLORS.PINK : theme.COLORS.GRAY_BUTTON)};

  > svg {
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_BUTTON};
  }
`;
