import React, { createContext, useReducer } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, action.payload];

    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return blogPost => dispatch({ type: 'add_blogpost', payload: blogPost });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
