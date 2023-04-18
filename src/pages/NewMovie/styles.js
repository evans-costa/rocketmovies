import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 114rem;
  margin: 0 auto;

  .new-movie {
    max-height: 75rem;
    overflow-y: auto;
  }

  .input-wrapper {
    width: 100%;
    
    display: flex;
    gap: 4rem;

    margin: 2rem 0 
  }
`

export const Bookmarks = styled.div`
  width: 100%;
  margin: 4rem 0;

  > h3 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.6rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .tags { 
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;

    margin-top: 2.4rem;
    padding: 1.6rem;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  }
`
export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 4rem;

  margin-bottom: 2rem;
`