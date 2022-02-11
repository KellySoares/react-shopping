import React from "react";

import * as S from "./styled";
import NavBar from "../navbar";

const Layout = ({ children }) => {
    return (<>
        <NavBar />

        <S.WrapperContainer  className="container" >{children}</S.WrapperContainer>

        <S.Footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer" >
            <div>
                Shopping
            </div>
        </S.Footer>
    </>

    )
}

export default Layout;