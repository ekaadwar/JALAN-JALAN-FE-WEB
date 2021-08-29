import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import product from "./product";
import profile from "./profile";

import chats from "./chats";
import transaction from "./transaction";

const persistAuth = {
  storage,
  key: "auth",
};
const persistProduct = {
  storage,
  key: "product",
};
const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  product: persistReducer(persistProduct, product),
  chats,
  transaction,
  profile,
});

export default rootReducer;
