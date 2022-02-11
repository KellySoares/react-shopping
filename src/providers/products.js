
import React, { createContext, useState } from 'react';
import { useSelector } from "react-redux";


export const ProductsContext = createContext({
    products: [],
    category: []
});
const ProductsProvider = ({ children }) => {
    const [prodState, setprodState] = useState({
        products: [],
        category: []
    });

    const product = useSelector(state => state.products);

    const categorys = product.map(
        category => {
            const container = {};
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            container['details'] = 0;
            return container;
        }
    )
    const category = categorys.map(JSON.stringify)
        .filter(function (item, index, arr) {
            return arr.indexOf(item, index + 1) === -1;
        })
        .map(JSON.parse)


    for (let i = 0; i < category.length; i++) {
        categorys.filter(function (item, arr) {
            if (category[i].id === item.id) {
                category[i].details++;
            }
            return arr;
        });
    }

    if (prodState.products.length === 0) {
        setprodState({
            products: product,
            category: category,
        });

    }

    const contextValue = {
        prodState
    };


    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;





