import { createSelector } from 'reselect';

/* reselect---------------------------------------------------------------- */
const selectPostState = state => state.post;
export const selectPost = createSelector(
  [selectPostState],
  post => post
);

/* action types------------------------------------------------------------------ */
const READ_ALL_POSTS = '모든 포스트 조회';
const ADD_POST = '포스트 추가';
const DELETE_POST = '포스트 삭제';

/* action creators---------------------------------------------------------------- */
export const readAllPosts = () => ({
  type: READ_ALL_POSTS,
});

export const addPost = postData => ({
  type: ADD_POST,
  postData,
});

export const deletePost = postData => ({
  type: DELETE_POST,
  postData,
});

/* initial state + reducer----------------------------------------------------- */
const initialState = [];
/**
 * state = [{ id: post0, userName: '', avatar: '', content: '', date: '' }]
 */

export const postReducer = (state = initialState, { type, info }) => {
  switch (type) {
    case READ_ALL_POSTS:
      return state;

    case ADD_POST:
      return [...state, info]
      // info = { id, userName, avatar, content, date }

    case DELETE_POST:
      return state.filter(post => post.id !== info.id);

    default:
      return state;
  }
}
