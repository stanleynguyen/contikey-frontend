export const BASE_URL = process.env.BASE_URL;
export const NONE = 'NONE';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const NO_IMAGE_PLACEHOLDER =
  'http://festa.org.nz/wp-content/uploads/2016/08/no_image_placeholder.png';

const defaultUser = {
  user_id: 0,
  email: '',
  name: '',
  photo: '',
  new_user: false,
};
export const defaultState = {
  auth: {
    status: NONE,
    error: '',
    user: defaultUser,
  },
  feed: { status: NONE, articles: [], cursor: '', error: '' },
  profile: {
    user: {
      status: NONE,
      value: defaultUser,
      error: '',
    },
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
    log: {
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
    likes: 0,
    user: defaultUser,
    comment_status: NONE,
  },
};
