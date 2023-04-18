import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  padding: 1.9rem 1.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  border-radius: 1rem;
  border: none;
  outline: none;
  resize: none;
  
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-family: 'Roboto Slab', serif; 

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 1.4rem;
  }
`