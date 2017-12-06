import {
  CHANNEL_LOADING,
  CHANNEL_SUCCESS,
  CHANNEL_FAIL,
  CHANNEL_SUB,
  CHANNEL_UNSUB,
} from 'constants/actionTypes';
import { loadChannelById, subUnsubChannel } from 'lib/channelService';
import { withAuth } from 'lib/authentication';

const channelLoading = () => ({ type: CHANNEL_LOADING });
const channelSuccess = payload => ({ type: CHANNEL_SUCCESS, payload });
const channelFail = payload => ({ type: CHANNEL_FAIL, payload });
const channelSubUnsub = payload => ({ type: CHANNEL_SUB, payload });

export const channelFetch = ({ channel_id }) => async dispatchEvent => {
  dispatchEvent(channelLoading());
  try {
    const res = await loadChannelById({ channel_id });
    dispatchEvent(channelSuccess(res));
  } catch (e) {
    dispatchEvent(channelFail(e));
  }
};

export const channelSubscribe = ({
  channel_id,
  sub,
}) => async dispatchEvent => {
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => channelSubscribe({ channel_id })));
    await withAuth(
      subUnsubChannel.bind(null, { channel_id }, sub),
      dispatchEvent,
    );
    dispatchEvent(channelSubUnsub({ subscribed: sub }));
  } catch (e) {
    console.log(e);
  }
};
