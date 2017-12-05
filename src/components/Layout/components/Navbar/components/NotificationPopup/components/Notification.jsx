import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { notification as notificationType } from 'constants/propTypes';
import { Link } from 'react-router-dom';
import { history } from 'store';

const StyleWrapper = styled.div`
  background: ${props => (props.is_read === 0 ? '#edf2fa' : '#fff')};
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  cursor: pointer;
  .img-fluid.avatar {
    flex: 0 0 70px;
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  .content {
    margin-left: 20px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0;
    }
  }
`;

class Notification extends React.Component {
  static propTypes = Object.assign(notificationType, {
    closeFn: PropTypes.func,
    markNoti: PropTypes.func,
  }).isRequired;
  static defaultProps = {
    closeFn: () => {},
    markNoti: () => {},
  };
  linkTo = '/';

  handleNotiClick = () => {
    const { notification_id } = this.props;
    this.props.markNoti({ notification_id });
    this.props.closeFn();
    history.push(this.linkTo);
  };

  render() {
    this.linkTo =
      (this.props.type === 'channel' &&
        `/profile/${this.props.type_user.user_id}`) ||
      (this.props.type === 'article' && `/article/${this.props.article_id}`) ||
      (this.props.type === 'like' && `/article/${this.props.article_id}`) ||
      (this.props.type === 'comment' && `/article/${this.props.article_id}`);
    const notiText =
      (this.props.type === 'channel' && 'subscribed to your channel') ||
      (this.props.type === 'article' && 'posted an article') ||
      (this.props.type === 'like' && 'liked your article') ||
      (this.props.type === 'comment' && 'commented on your article');
    return (
      <StyleWrapper
        className="plain"
        is_read={this.props.is_read}
        onClick={this.handleNotiClick}
      >
        <img className="img-fluid avatar" src={this.props.type_user.photo} />
        <div className="content">
          <p>
            <Link
              className="plain"
              to={`/profile/${this.props.type_user.user_id}`}
            >
              <strong>{this.props.type_user.name}</strong>
            </Link>{' '}
            {notiText}
          </p>
        </div>
      </StyleWrapper>
    );
  }
}

export default Notification;
