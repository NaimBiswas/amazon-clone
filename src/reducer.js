export const initialState = {
   basket: [],
}
const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_TO_BASKET":
         return {
            ...state,
            basket: [...state.basket, action.item]
         };
         break;
      case "REMOVE_FROM_BASKET":
         console.log(action.id)
         return {
            ...state,
            basket: state.basket.filter(item => item.id !== action.id)
         };
         break;
      default:
         break;
   }
}

export default reducer