import PropTypes from 'prop-types';

export const feed = PropTypes.shape({
  status: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
});

export const auth = PropTypes.shape({ status: PropTypes.string.isRequired });
