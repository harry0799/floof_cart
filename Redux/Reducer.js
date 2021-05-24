import { CART, LIST } from "./Action"

const initialState = {
    listItems: [{
        id: '1',
        name: 'Samsung A71',
        image:
            'https://images-na.ssl-images-amazon.com/images/I/61G9VC33fsL._AC_SL1500_.jpg',
        description: 'best phone',
        price: 28000,
        inCart: false
    },
    {
        id: '2',
        name: 'Samsung M11',
        image: 'https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/products/16952/galaxm11_0_600.jpg',
        description: 'best phone',
        price: 12000,
        inCart: false
    },
    {
        id: '3',
        name: 'Samsung A51',
        image: 'https://www.zdnet.com/a/hub/i/r/2020/09/29/d424c7b4-6344-4d20-b0e2-0ff7ddfbd14e/resize/1200x900/bf69247e069c8e856238e778733adf29/samsung-galaxy-a51-on-vodafone-header.jpg',
        description: 'best phone',
        price: 18000,
        inCart: false
    },
    {
        id: '4',
        name: 'Xiaomi Note 7',
        image: 'https://i.gadgets360cdn.com/products/large/1551344291_635_redmi_note_7.jpg',
        description: 'best phone',
        price: 15000,
        inCart: false
    },
    {
        id: '5',
        name: 'Vivo V20',
        image: 'https://www.gizmochina.com/wp-content/uploads/2020/09/vivo-1-600x600.jpg',
        description: 'best phone',
        price: 21000,
        inCart: false
    },
    {
        id: '6',
        name: 'Samsung M31',
        image: 'https://static.digit.in/default/db80c6f12355307b593c0af60ad5403adbd2ab06.jpeg?tr=1200',
        description: 'best phone',
        price: 18000,
        inCart: false
    },],

}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART.ADD_TO_CART: {
            const items = [...state.listItems];
            const finalItems = items.map(item => {
                if (item.id === action.id) {
                    return { ...item, inCart: true }
                } else {
                    return item
                }
            })

            return {
                ...state,
                listItems: [
                    ...finalItems
                ]

            }
        }
        case CART.REMOVE_FROM_CART: {
            const items = [...state.listItems];
            const finalItems = items.map(item => {
                if (item.id === action.id) {
                    return { ...item, inCart: false }
                }
                else {
                    return item
                }
            })

            return {
                ...state,
                listItems: [
                    ...finalItems
                ]

            }
        }
        default:
            return state
    }
}