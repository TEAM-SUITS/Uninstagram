/* action types------------------------------------------------------------------ */
const READ_CURRENT_USER = '현재 사용자 정보 조회';
const ADD_CURRENT_USER = '현재 사용자 정보 추가';
const EDIT_CURRENT_USER = '현재 사용자 정보 수정';

/* action creators---------------------------------------------------------------- */
export const readCurrentUser = () => ({
  type: READ_CURRENT_USER,
});

export const addCurrentUser = userData => ({
  type: ADD_CURRENT_USER,
  userData,
});

export const editCurrentUser = newUserData => ({
  type: EDIT_CURRENT_USER,
  newUserData,
});

/* initial state + reducer----------------------------------------------------- */
const initialState = {
  userName: '',
  avatar: ''
};

export const currentUserReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case READ_CURRENT_USER:
      return state;

    case ADD_CURRENT_USER:
      return {
        ...state,
        data,
      };
      // data = { userName, avatar }

    case EDIT_CURRENT_USER:
      return {
        ...state,
        data,
      };

    default:
      return state;
  }
}
