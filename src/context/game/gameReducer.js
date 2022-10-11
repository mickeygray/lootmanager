import { GENERATE_LOOT } from "../types";

export default (state, action) => {
 switch (action.type) {
  case GENERATE_LOOT:
   return {
    ...state,
    loot: action.payload,
   };
 }
};
