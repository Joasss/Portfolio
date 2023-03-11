import { NavbarLink, NavbarLinkIcon, NavbarLinks, NavbarLogo, NavbarTitle, NavbarTitleText, NavbarWrapper } from "../styles/Navbar"
import { FaGithub } from 'react-icons/fa';

export const Navbar = () => {

    return (
        <>
            <NavbarWrapper>
                <NavbarTitle>
                    <NavbarLogo src='https://i.imgur.com/X8eCBoa.png' />
                    <NavbarTitleText>Joa_sss</NavbarTitleText>
                </NavbarTitle>

                <NavbarLinks>
                    <NavbarLink href="https://github.com/Joasss">GitHub</NavbarLink>
                    <NavbarLink href="https://quabot.net">QuaBot</NavbarLink>
                    <NavbarLink href="https://pasterboard.online">Pasterboard</NavbarLink>

                    <NavbarLinkIcon>
                        <FaGithub onClick={() => window.location.href = 'https://github.com/Joasss'} size={25} />
                    </NavbarLinkIcon>

                    <NavbarLinkIcon onClick={() => window.location.href = 'https://quabot.net'}>
                        <svg width="25" height="25" viewBox="0 0 1019 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M637.383 998.13C600 998.13 538.244 998.13 499.065 998.13C223.439 998.13 0 774.691 0 499.065C0 223.439 223.439 0 499.065 0C774.691 0 998.13 223.439 998.13 499.065C998.13 603.35 966.144 700.165 911.447 780.233L739.15 607.935C754.222 574.75 762.616 537.888 762.616 499.065C762.616 353.51 644.62 235.514 499.065 235.514C353.51 235.514 235.514 353.51 235.514 499.065C235.514 577.859 270.092 648.578 324.902 696.873L637.383 998.13Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M753.92 1000L495.977 742.056H763.838L1018.25 996.464L1014.71 1000H753.92Z" fill="white" />
                        </svg>
                    </NavbarLinkIcon>
                    <NavbarLinkIcon onClick={() => window.location.href = 'https://quabot.net'}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 288.000000 272.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,272.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                <path d="M1290 2674 c-181 -26 -309 -64 -442 -129 -313 -155 -553 -428 -662 -755 -48 -143 -66 -257 -66 -415 0 -157 18 -272 65 -412 133 -397 431 -695 828 -828 139 -46 256 -65 407 -65 152 0 268 19 410 66 108 36 310 130 310 145 0 4 -41 76 -91 158 l-90 151 -77 -39 c-167 -84 -311 -121 -465 -121 -422 1 -795 293 -904 709 -36 134 -37 326 -4 456 89 348 351 611 696 697 133 33 332 30 470 -6 196 -51 386 -172 503 -320 79 -99 115 -163 153 -276 28 -82 33 -112 37 -223 7 -194 -17 -313 -80 -403 -59 -84 -171 -100 -210 -31 -10 17 -14 138 -18 497 l-5 475 -192 3 c-188 2 -193 2 -193 -18 0 -11 -2 -20 -5 -20 -3 0 -44 11 -92 26 -107 31 -250 35 -357 10 -181 -43 -347 -177 -429 -347 -98 -203 -101 -401 -7 -594 69 -142 173 -246 316 -316 97 -47 190 -69 300 -69 120 0 263 48 343 116 l31 26 44 -40 c83 -77 161 -103 299 -103 159 1 277 51 392 166 238 239 297 637 150 1016 -164 424 -559 734 -1027 803 -94 14 -271 19 -338 10z m223 -1060 c56 -29 98 -66 128 -112 27 -43 29 -52 29 -152 0 -103 -1 -109 -30 -148 -63 -88 -153 -129 -263 -120 -145 12 -246 120 -247 264 0 140 70 236 205 281 48 15 134 9 178 -13z" />
                            </g>
                        </svg>
                    </NavbarLinkIcon>
                </NavbarLinks>
            </NavbarWrapper>
        </>
    )
}