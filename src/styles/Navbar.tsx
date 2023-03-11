import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.div`
    width: 100%;
    padding: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavbarLinks = styled.div`
    display: flex;
    align-items: center;
    margin-right: 7.40740741%;
`;

export const NavbarLink = styled.a`
    font-size: 20px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin-left: 35px;

    @media screen and (max-width: 650px) {
        display: none;
    }
`;
export const NavbarLinkIcon = styled.div`
    display: none;
    cursor: pointer;
    margin-left: 35px;

    @media screen and (max-width: 650px) {
        display: block;
    }
    @media screen and (max-width: 420px) {
        display: none;
    }
`;

export const NavbarTitle = styled.div`
    display: flex;
    align-items: center;
    margin-left: 7.40740741%;
`;

export const NavbarLogo = styled.img`
    width: 60px;
    height: 60px;
`;
export const NavbarTitleText = styled.p`
    font-size: 24px;
    margin: 0px;
    margin-left: 27px;
    color: white;
`;