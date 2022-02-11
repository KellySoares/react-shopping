import styled from "styled-components";
import {  Container } from 'react-bootstrap';

export const Footer = styled.footer`
    position: fixed;
    background: #112b52;
    width: 100%;
    bottom: 0;
    word-break: keep-all;
    clear: both;
    margin-bottom: 0 !important;

    div {
        width: 100%;
        text-align: -webkit-center;
        color: white;
        font-size: 18px;
        font-weight: bold;
    }
`;


export const WrapperContainer = styled(Container)`
  text-align: -webkit-center;
  margin-bottom: 80px;
`;