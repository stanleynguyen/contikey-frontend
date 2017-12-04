import PropTypes from 'prop-types';
import { NONE, LOADING, SUCCESS, ERROR } from 'constants/misc';

const availableStatuses = [NONE, LOADING, SUCCESS, ERROR];

export const user = PropTypes.shape({
  user_id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  channels: PropTypes.array,
});

export const auth = PropTypes.shape({
  status: PropTypes.oneOf(availableStatuses).isRequired,
  user: user.isRequired,
});

export const feed = PropTypes.shape({
  status: PropTypes.oneOf(availableStatuses).isRequired,
  articles: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
});

const profileFieldShape = PropTypes.shape({
  status: PropTypes.oneOf(availableStatuses).isRequired,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  error: PropTypes.string.isRequired,
});
export const profile = PropTypes.shape({
  channels: profileFieldShape.isRequired,
  articles: profileFieldShape.isRequired,
  friends: profileFieldShape.isRequired,
  following: profileFieldShape.isRequired,
  log: profileFieldShape.isRequired,
  user: profileFieldShape.isRequired,
});

export const comment = PropTypes.shape({
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  comment_id: PropTypes.number.isRequired,
  comment_text: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
});
export const article = PropTypes.shape({
  status: PropTypes.oneOf(availableStatuses).isRequired,
  url: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(comment),
  created_at: PropTypes.string.isRequired,
  user: user.isRequired,
  likes: PropTypes.number.isRequired,
  comment_status: PropTypes.oneOf(availableStatuses).isRequired,
});

export const articlePreview = PropTypes.shape({
  article_id: PropTypes.number.isRequired,
  preview_image: PropTypes.string.isRequired,
  preview_title: PropTypes.string.isRequired,
  preview_text: PropTypes.string.isRequired,
  channel_id: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  user: user.isRequired,
  showUser: PropTypes.bool,
  created_at: PropTypes.string.isRequired,
});
export const channel = PropTypes.shape({
  channel_id: PropTypes.number.isRequired,
  user: user,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(articlePreview),
});
