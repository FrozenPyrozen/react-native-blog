import React, { createContext, useReducer } from 'react';

const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, action.payload];

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = blogPost => {
    dispatch({ type: 'add_blogpost', payload: blogPost });
  };

  return (
    <BlogContext.Provider value={{ state, actions: { addBlogPost } }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
