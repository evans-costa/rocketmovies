import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.PINK};
  line-height: 2.1rem;
  text-align: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 1rem;
    margin-top: 2px;
  }
`;
