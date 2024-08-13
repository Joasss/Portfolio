import styled, { css } from 'styled-components';

export const Tabs = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0px;
`;

export const Tab = styled.div`
    color: black;
    background: white;
    padding: 8px 38px;
    border-radius: 38px;
    margin: 0px 20px;
    cursor: default;
`;

export const TabButton = styled.div`
    padding: 8px 10px;
    cursor: pointer;
    border-radius: 99px;
    background: white;
    color: black;
    font-variant-ligatures: common-ligatures;
`;

export const PageContainer = styled.div`
    margin: 0px auto;
    transition: 1s;
    width: fit-content;
    display: flex;
    align-items: center;
    height: 100vh;
    text-align: center;
    vertical-align: middle;
`;