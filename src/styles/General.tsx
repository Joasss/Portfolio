import styled from 'styled-components';

export const Tabs = styled.div`
    display: flex;
    align-items: center;
    margin: 0px auto;
    width: fit-content;
`;

export const TabsWrapper = styled.div`
    margin: 0px;
    position: fixed;
    text-align: center;
    bottom: 24px;
    width: 100%;
`;

export const Tab = styled.div`
    color: black;
    background: white;
    padding: 8px 38px;
    border-radius: 38px;
    margin: 0px 20px;
    cursor: default;

    @media (max-width: 500px) {
        padding: 8px 20px;
        margin: 0px 10px;
    }
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