import PropTypes from 'prop-types';
import { NONE, LOADING, SUCCESS, ERROR } from 'constants/misc';

const availableStatuses = [NONE, LOADING, SUCCESS, ERROR];

export const auth = PropTypes.shape({
  status: PropTypes.oneOf(availableStatuses).isRequired,
  user: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    new_user: PropTypes.bool.isRequired,
  }).isRequired,
});

export const feed = PropTypes.shape({
  status: PropTypes.oneOf(availableStatuses).isRequired,
  articles: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
});
