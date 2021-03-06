import { Satellite } from "@material-ui/icons";

export const initialState = {
   basket: [],
   user: null,
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
         const index = state.basket.findIndex((basketIndex) => basketIndex.id == action.id);
         let newBasket = [...state.basket];
         if (index >= 0) {
            newBasket.splice(index, 1)
         }
         return {
            ...state,
            basket: newBasket,

         }
         break;
      case "SET_USER":
         return {
            ...state,
            user: action.user
         }
         break;
      default:
         break;
   }
}

export default reducer