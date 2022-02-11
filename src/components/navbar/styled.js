import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { Navbar, Container } from 'react-bootstrap';


export const NavbarStyle = styled(Navbar)`
    background: #112b52 !important;
    .navbar-toggler {
        background-color: #0dcaf0;
    }
`;
export const ContainerStyle = styled(Container)`
    margin: auto;
`;

export const LinkStyle = styled(Link)`
    margin-left: 5em;
    margin-right: 5em;
    text-decoration: none;
`;
export const ButtonStyle = styled(Button)`
    font-size: 1em !important;
    color: white !important;
    &:hover {
        color: #0dcaf0 !important;
    }

`;
