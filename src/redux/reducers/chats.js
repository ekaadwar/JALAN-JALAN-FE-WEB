import { chats as chatUsers } from "../../dummy/chatUsers";

const initialState = {
  data: chatUsers,
};

const chats = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default chats;
