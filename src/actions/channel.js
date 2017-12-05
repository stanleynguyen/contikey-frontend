import {
  CHANNEL_LOADING,
  CHANNEL_SUCCESS,
  CHANNEL_FAIL,
  CHANNEL_FOLLOW,
  CHANNEL_UNFOLLOW,
} from 'constants/actionTypes';
import { loadChannelById } from 'lib/channelService';

const channelLoading = () => ({ type: CHANNEL_LOADING });
const channelSuccess = payload => ({ type: CHANNEL_SUCCESS, payload });
const channelFail = payload => ({ type: CHANNEL_FAIL, payload });

export const channelFetch = ({ channel_id }) => async dispatchEvent => {
  dispatchEvent(channelLoading());
  try {
    const res = await loadChannelById({ channel_id });
    dispatchEvent(channelSuccess(res));
  } catch (e) {
    dispatchEvent(channelFail(e));
  }
};
