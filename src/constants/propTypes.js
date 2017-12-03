import PropTypes from 'prop-types';
import { NONE, LOADING, SUCCESS, ERROR } from 'constants/misc';

const availableStatuses = [NONE, LOADING, SUCCESS, ERROR];

export const user = PropTypes.shape({
  user_id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
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
  value: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
});
export const profile = PropTypes.shape({
  channels: profileFieldShape.isRequired,
  articles: profileFieldShape.isRequired,
  friends: profileFieldShape.isRequired,
  following: profileFieldShape.isRequired,
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
