import CartActionTypes from "./action-types"

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            // verificar se o produto já está no carrinho
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );

            // se ele estiver, aumentar a sua quantidade em 1
            if (productIsAlreadyInCart) {
                return {... state,
                    products: state.products.map((product) =>
                        product.id === action.payload.id 
                        ? {... product, quantity: product.quantity + 1 } 
                    : product
                ),
            };
        }

            // se ele não estiver, adicioná-lo
            return {
                ... state,
                products: [... state.products, {... action.payload, quantity: 1 }],
            };

        default:
            return state;
    }
}

export default cartReducer