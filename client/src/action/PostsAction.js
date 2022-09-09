// state should be present even not gonna use it.
// for the action knows where it going to pass it on to
function getPostsAction(state, action){
  return { ...state, postsData: action.payload }
}

function createPostsAction(state, action){
  const duplicate = [...state.postsData, action.payload];
  state.postsData = duplicate;
}

function updatePostsAction(state, action){
  const updatedPostsData = [...state.postsData];
  updatedPostsData[state.pins.key] = action.payload;
  const updatedPins = {
    id: 0,
    key: 0
  }
  state.postsData = updatedPostsData;
  state.pins = updatedPins;
}

function deletePostsAction(state, action){
  return { ...state, postsData: action.payload };
}

function getPinsAction(state, action){
    state.pins = action.payload;
}
const actions = {
  getPostsAction,
  createPostsAction,
  updatePostsAction,
  deletePostsAction,
  getPinsAction
};

export default actions;