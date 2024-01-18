import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    align-items: center;

    @media (max-width: 1439px) {
        width: 100%;
    }


    > input {
        height: 2.2rem;
        width: 100%;

        padding: 1rem;

        border: 0;
        border-radius: .2rem;

        &::placeholder {
            color: #666464;
            font-size: 1.2rem;
        }
    }

`;