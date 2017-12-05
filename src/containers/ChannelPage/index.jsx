import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { channel as channelType } from 'constants/propTypes';
import { SUCCESS, LOADING } from 'constants/misc';
import Spinner from 'components/Spinner';
import ChannelInfo from './components/ChannelInfo';
import ArticleCard from 'components/ArticleCard';
import { channelFetch } from 'actions';

const StyleWrapper = styled.div`
  padding: 30px 0;
`;

class ChannelPage extends React.Component {
  // static propTypes = {
  //   channel: channelType.isRequired,
  // };

  componentDidMount() {
    const { channel_id } = this.props.match.params;
    this.props.channelFetch({ channel_id });
  }

  render() {
    console.log(this.props.channel);
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
                <ChannelInfo {...this.props.channel} />
              </Col>
            </Row>
          )}
        </Container>
      </StyleWrapper>
    );
  }
}

export default connect(({ channel }) => ({ channel }), { channelFetch })(
  ChannelPage,
);
