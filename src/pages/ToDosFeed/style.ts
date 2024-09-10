import styled from "styled-components"

export const ProjectTitle = styled.div`
    width: auto;
    text-align: center;
    font-size: 10rem
`;
export const Wrapper = styled.div`
    background: red;
    width: 30%;
    height: 70vh;
    margin: auto;
    padding: 0.1rem;
    overflow: scroll;
`;

export const TodoItemWrapper = styled.div`
    background: cyan;
    margin: 1rem;
    padding: 0.4rem;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 6fr 2fr 2fr;
    gap: 1rem;
`
export const TodoBody = styled.div`
    font-size: 1rem;
    grid-area: 1 / 1 / 2 / 2
`
export const EditButton = styled.div`
    background: yellow;
    grid-area: 1 / 2 / 2 / 3
`
export const DelButton = styled.div`
    background: yellow;
    grid-area: 1 / 3 / 2 / 4
    
`
