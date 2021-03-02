export const initialState = {
   basket: [],
}
const reducer = (state, action) => {
   console.log(action.item)
   switch (action.type) {
      case "ADD_TO_BASKET":
         return {
            ...state,
            basket: [...state.basket, action.item]
         };
         break;

      default:
         break;
   }
}

export default reducer