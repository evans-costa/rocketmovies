import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    display: flex;
    align-items: center;

    height: 14.4rem;
    padding-left: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTES};
  }
`
export const Profile = styled.div`
  position: relative;
  
  margin: -9.3rem 0 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;

    width: 4.8rem;
    height: 4.8rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      width: 2.4rem;
      height: 2.4rem;

      color: ${({ theme }) => theme.COLORS.GRAY_BUTTON}
    }

    input {
      display: none;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin: 0 auto;
  
  max-width: 34rem;

  > div:nth-child(4), button {
    margin-top: 2.4rem;
  }
`
