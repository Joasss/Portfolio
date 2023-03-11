import styled, { css } from 'styled-components';

export const HomeMarginWrapper = styled.div`
    margin: 0px 7.40740741%;
`;

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 106px;
`;

export const HomeLanguage = styled.h1`
    text-align: right;
    text-transform: uppercase;
    font-size: 64px;
    margin: 0px;
    margin-left: 10px;
    transition: 0.2s;
    margin-bottom: 30px;
    color: #454545;
    font-weight: 600;

    @media screen and (max-width: 1000px) {
        font-size: 54px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const HomeTitle = styled.h1`
    font-size: 70px;
    color: white;
    margin: 0px;
    margin-bottom: 16px;

    span {
        color: #4AA1F1;
    }
`;

export const HomeSubtitle = styled.h3`
    font-size: 36px;
    color: white;
    max-width: 750px;
    margin: 0px;
`;

export const HomeContactTitle = styled.div`
    margin: 0px;
    color: #B9B9B9;
    font-size: 16px;
    margin-bottom: 7px;
    font-weight: 600;
`;

export const HomeHeightWrapper = styled.div`
    min-height: calc(100vh - 226px - 56px - 40px);
`;

export const HomeContactWrapper = styled.div`
    margin-bottom: 40px;

    svg {
        margin-right: 21px;
        cursor: pointer;
    }
`;