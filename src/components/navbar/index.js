import React from "react";
import { Typography } from "@material-ui/core";
import Cart from '../cart';
import logo from "../../assets/images/logo.png";
import { Nav } from 'react-bootstrap';

import * as S from "./styled";

const NavBar = () => {
    return (
        <S.NavbarStyle collapseOnSelect expand="lg" >
            <S.ContainerStyle>
                <S.NavbarStyle.Brand href="#home">
                    <Typography>
                        <img width="140px" src={logo} alt="Shopping" />
                    </Typography>
                </S.NavbarStyle.Brand>
                <S.NavbarStyle.Toggle aria-controls="responsive-navbar-nav" />
                <S.NavbarStyle.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <S.LinkStyle to="/">
                            <S.ButtonStyle color="primary" className="MuiButton-textPrimary">Home</S.ButtonStyle>
                        </S.LinkStyle>
                        <S.LinkStyle to="/contato">
                            <S.ButtonStyle color="primary">Contato</S.ButtonStyle>
                        </S.LinkStyle>
                    </Nav>
                    <Nav>
                        <Cart />
                    </Nav>
                </S.NavbarStyle.Collapse>
            </S.ContainerStyle>
        </S.NavbarStyle>)
}

export default NavBar;