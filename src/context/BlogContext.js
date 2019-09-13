import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter(blogpost => blogpost.id !== action.payload);
    case 'add_blogpost':
      return [...state, action.payload];

    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return blogPost => dispatch({ type: 'add_blogpost', payload: blogPost });
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
