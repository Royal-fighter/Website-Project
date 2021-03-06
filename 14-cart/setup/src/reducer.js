//first pass function from contex which wrapped app 
//passed function is used where it is to be used in component
//to make it working we handle it in reducer
const reducer = (state, action) => {
if(action.type === 'CLEAR_CART'){
    return(
        {...state,cart:[]}
    )
}
if (action.type === 'REMOVE'){
    return{
        ...state,
            cart: state.cart.filter((cartItem)=>cartItem.id!==action.playload),
        }
    }
    if(action.type === 'INCREASE'){
        let tempCart=state.cart.map((cartItem)=>{
            if(cartItem.id===action.playload){
                return{...cartItem,amount:cartItem.amount+1}
            }
            return cartItem
        })
        return {...state,cart:tempCart}
    }

    if(action.type === 'DECREASE'){
        let tempCart=state.cart.map((cartItem)=>{
            if(cartItem.id===action.playload){
                return{...cartItem,amount:cartItem.amount-1}
            }
            return cartItem
        }).filter((cartItem)=>cartItem.amount!==0)
        return {...state,cart:tempCart }
    }

if(action.type === 'GET_TOTALS'){
    let {total,amount} = state.cart.reduce(
        (cartTotal,cartItem)=>{
       const{price,amount}=cartItem
       const itemTotal=price*amount
       cartTotal.amount += amount;
         cartTotal.total += itemTotal;
       return cartTotal
    },
    {
    total:0,
    amount:0,
    })
    total=parseFloat(total.toFixed(2))
    return{...state,total,amount}
}
//fetching then loading
if(action.type=== 'LOADING'){
    return{...state,loading:true}
}
//displaying items after fetching
if (action.type === 'DISPLAY_ITEMS'){
    return{...state,loading:false,cart:action.playload}
}
   

    return state
}
export default reducer
