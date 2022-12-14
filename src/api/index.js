import { API_URLS, LOCALSTORAGE_TOKEN_KEY, getFormBody } from '../utils';

const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  //setting headers
  const headers = {
    'content-type': 'application/x-www-form-urlencoded', //this is the format expected by the server
  };

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = getFormBody(body);
  }
  try {
    const response = await fetch(url, config);
    console.log(response);
    const data = await response.json(); //returns a promise, the .json() is used to parse the response, only then we can access it
    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }
    throw new Error(data.message);
  } catch (error) {
    console.log('error');
    return {
      message: error.message,
      success: false,
    };
  }
};

export const getPosts = (page = 1, limit = 5) => {
  return customFetch(API_URLS.posts(page, limit), {
    method: 'GET',
  });
};

export const login = (email, password) => {
  return customFetch(API_URLS.login(), {
    mode: 'no-cors',
    method: 'POST',
    body: { email, password },
  });
};

export const register = async (name, email, password, confirmPassword) => {
  return customFetch(API_URLS.signup(), {
    mode: 'no-cors',
    method: 'POST',
    body: { name, email, password, confirm_password: confirmPassword },
  });
};

export const editProfile = async (userId, name, password, confirmPassword) => {
  return customFetch(API_URLS.editUser(), {
    method: 'POST',
    body: { userId, name, password, confirmPassword },
  });
};
// const createPost = (page, limit) => {
//   return customFetch();
// };
