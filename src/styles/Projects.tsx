import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    width: fit-content;
    margin: 0px auto;
    text-align: left;

    a {
        display: flex;
        margin-bottom: 20px;
        color: white;
        text-decoration: none;
        cursor: pointer;
        align-items: center;

        div {
            display: block;
            margin-left: 20px;
        }

        b {
            margin: 0px;

            &:hover {
               text-decoration: underline;
            }
        }
        p {
            margin: 0px;
            margin-top: 5px;

            &:hover {
                text-decoration: underline;
            }
        }

        img {
            border-radius: 10px;
            width: 40px;
            height: 40px;
        }
    }
`;