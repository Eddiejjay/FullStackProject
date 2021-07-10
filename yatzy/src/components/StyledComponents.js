import styled from 'styled-components'

export const Text = styled.div `
  padding: 12px;
  color:white;
  font-family: "Comic Sans MS", cursive, sans-serif;
 font-size: 25px;
 letter-spacing: 2px;
 word-spacing: 2px;
 
 font-weight: 700;
 text-decoration: none solid rgb(68, 68, 68);
 font-style: italic;
 font-variant: small-caps;
 text-transform: capitalize;`

export const StyledButton = styled.button `
margin: 10px;
padding:0x;
background: transparent;
border: 5px groove rgba(20,20,20,0.17);

`
export const ButtonText = styled.div `
  padding: 12px;
  color:white;
  font-family: "Comic Sans MS", cursive, sans-serif;
 font-size: 17x;
 letter-spacing: 2px;
 word-spacing: 2px;
 
 font-weight: 700;
 text-decoration: none solid rgb(68, 68, 68);
 font-style: italic;
 font-variant: small-caps;
 text-transform: capitalize;`

export const StyledInput = styled.input`
width : 900x;   
        border-style: double;
        background: transparent;
        border: 3px groove rgba(164,164,164,0.17);
        &:hover {
          background: #fff0db;
          
        }

        `