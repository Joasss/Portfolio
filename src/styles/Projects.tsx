import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    margin: 0px auto;
    text-align: left;
    max-width: 100%;

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
            line-break: anywhere;

            &:hover {
               text-decoration: underline;
            }
        }
        p {
            margin: 0px;
            margin-top: 5px;
            line-break: anywhere;

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

export const LanguagesContainer = styled.div`
    width: 250px;
    max-width: 100%;
    margin: 0px auto;
    text-align: left;

    div {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
        color: white;
        text-decoration: none;
        align-items: center;

        div {
            display: block;
            margin-left: 20px;
            margin-bottom: 0px;
        }

        b {
            margin: 0px;
        }

        img {
            border-radius: 5px;
            width: 30px;
            height: 30px;
        }
    }
`;

export const ProgressBar = styled.div<{ progress: number }>`
    height: 15px;
    background-color: #333;
    border-radius: 10px;
    margin-top: 5px;
    margin-left: 0px !important;
    overflow: hidden;

    div {
        width: ${props => props.progress}%;
        height: 100%;
        margin-left: 0px !important;
        background-color: #c383ff;
    }
`;