import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { channel as channelType } from 'constants/propTypes';
import { SUCCESS, LOADING } from 'constants/misc';
import Spinner from 'components/Spinner';
import ChannelInfo from './components/ChannelInfo';
import ArticleCard from 'components/ArticleCard';
import { channelFetch, channelSubscribe } from 'actions';
import { history } from 'store';

const StyleWrapper = styled.div`
  padding: 30px 0;
`;

class ChannelPage extends React.Component {
  componentDidMount() {
    const { channel_id } = this.props.match.params;
    this.props.channelFetch({ channel_id });
  }

  handleSubBtnClick = ({ channel_id }) => {
    if (this.props.auth.status !== SUCCESS) {
      history.push('/login', { modal: true });
    } else {
      this.props.channelSubscribe({
        channel_id,
        sub: !this.props.channel.subscribed,
      });
    }
  };

  render() {
    return (
      <StyleWrapper>
        <Container>
          {this.props.channel.status === LOADING && <Spinner />}
          {this.props.channel.status === SUCCESS && (
            <Row>
              <Col xs="8">
                {this.props.channel.articles.map(a => (
                  <ArticleCard key={a['article_id']} {...a} />
                ))}
              </Col>
              <Col xs="4">
                <ChannelInfo
                  {...this.props.channel}
                  btnClickFn={this.handleSubBtnClick}
                />
              </Col>
            </Row>
          )}
        </Container>
      </StyleWrapper>
    );
  }
}

export default connect(({ auth, channel }) => ({ auth, channel }), {
  channelFetch,
  channelSubscribe,
})(ChannelPage);
