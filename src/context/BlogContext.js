import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id !== action.payload.id ? blogPost : action.payload;
      });
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    // case 'add_blogpost':
    //   return [...state, action.payload];

    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    try {
      const res = await jsonServer.get('/blogposts');
      dispatch({ type: 'get_blogposts', payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
};

const addBlogPost = dispatch => {
  return async blogPost => {
    try {
      const { callback, ...data } = blogPost;
      await jsonServer.post('/blogposts', {
        ...data,
      });
      if (callback) {
        callback();
      }
    } catch (error) {
      console.error(error);
    }
    // dispatch({ type: 'add_blogpost', payload: { ...data, id: Date.now() } });
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    try {
      await jsonServer.delete(`/blogposts/${id}`);
      dispatch({ type: 'delete_blogpost', payload: id });
    } catch (error) {
      console.error(error);
    }
  };
};

const editBlogPost = dispatch => {
  return async editedBlogPost => {
    try {
      const { callback, id, ...data } = editedBlogPost;
      await jsonServer.put(`/blogposts/${id}`, { ...data });
      // dispatch({ type: 'edit_blogpost', payload: data });
      if (callback) {
        callback();
      }
    } catch (error) {}
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
