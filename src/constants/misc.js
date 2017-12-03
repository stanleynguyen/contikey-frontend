export const BASE_URL = process.env.BASE_URL;
export const NONE = 'NONE';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const defaultState = {
  auth: {
    status: NONE,
    error: '',
    user: {
      user_id: 0,
      email: '',
      name: '',
      photo: '',
      new_user: false,
    },
  },
  feed: { status: NONE, articles: [], cursor: '', error: '' },
  profile: {
    channels: {
      status: NONE,
      value: [],
      error: '',
    },
    articles: {
      status: NONE,
      value: [],
      error: '',
    },
    friends: {
      status: NONE,
      value: [],
      error: '',
    },
    following: {
      status: NONE,
      value: [],
      error: '',
    },
  },
  article: {
    status: NONE,
    url: '',
    caption: '',
    comments: [],
    created_at: '',
    error: '',
  },
};
