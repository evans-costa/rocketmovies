import styled from "styled-components";
import backgroundImg from "../../assets/home.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Register = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 0 30rem;
  

  h1 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;
    
    color: ${({ theme }) => theme.COLORS.PINK}
  }

  p {
    font-size: 1.4rem;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 4.8rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE_900};

    margin-bottom: 4.8rem
  }

  > button {
    margin-top: 1.6rem;
  }

  a {
    align-self: center;
    margin-top: 4.2rem;
  }
`;

export const Image = styled.div`
  flex: 1;
  opacity: 0.5;

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
`;
