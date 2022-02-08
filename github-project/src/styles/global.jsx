import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #30363d;
    --text:  #e5e5e5;
    --container: #777;
    --orange: #daa520;
    --text-body: #969CB3;
    --more-dark: #1b1b1e;
  }
  *{
    margin:0;
    padding: 0;
  }
  html{
    @media(max-width: 1080px){

      font-size: 93.75% //15px
    }
    @media(max-width: 720px){
      font-size: 87.5% //15px
    } 
  }
  body{
    background: var(--background);
    --webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--orange);
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight:600;
  }

  .react-modal-overlay{
    background: transparent;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
  }
  .react-modal-content{
    border: 2px solid ;
    width: 100%;
    max-width:576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
      width: 60px;
      transition:  0.1s;
      &:hover{
        color:var(--background);
        background: var(--orange);
        border-radius: 0.25rem;
      }
    }

    
  }
  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button{
    cursor: pointer;
  }
  `
