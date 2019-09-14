import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id !== action.payload.id ? blogPost : action.payload;
      });
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [...state, action.payload];

    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return blogPost => {
    const { callback, ...data } = blogPost;

    dispatch({ type: 'add_blogpost', payload: { ...data, id: Date.now() } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch => {
  return newBlogPost => {
    const { callback, ...data } = newBlogPost;
    dispatch({ type: 'edit_blogpost', payload: data });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
