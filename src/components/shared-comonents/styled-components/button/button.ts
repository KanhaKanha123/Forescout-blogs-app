import styled from 'styled-components';

interface ButtonTypes {
    backgroundcolor?: string,
}
export const Button = styled.div<ButtonTypes>`
background-color:${({ backgroundcolor }) => backgroundcolor};
padding: 5px;
border-radius:10px;
display:flex;
justify-content: center;
align-items: center;
color:white;
font-size:15px;
font-weight:bold;
cursor:pointer;
`;
