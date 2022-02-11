import { useContext } from "react";
import { ProductsContext } from "../providers/products";

const useProducts = () => {

    const { prodState } = useContext(
        ProductsContext
    );

    return { prodState };
};

export default useProducts;