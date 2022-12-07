const { type } = require("@testing-library/user-event/dist/type");

const initialState = {
  allUsers: [],
  userInfo: {
    name: "",
    email: "",
    Username: "",
    password: "",
    phoneNumber: null,
    userContacts: [],
    albums: [
      {
        albumName: "",
        albumImg: "",
        myPhotos: [
          {
            files: {
              photo: "",
              description: "",
              comments: [],
            },
          },
        ],
      },
    ],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
