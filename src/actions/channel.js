import {
  CHANNEL_FAIL,
  CHANNEL_LOADING,
  CHANNEL_SUCCESS,
} from 'constants/actionTypes';
import { postChannel } from 'lib/channelService';

const channelLoading = () => ({ type: CHANNEL_LOADING });
const channelSuccess = payload => ({ type: CHANNEL_SUCCESS, payload });
const channelFail = payload => ({ type: CHANNEL_FAIL, payload });

export const channelNew = params => async dispatchEvent => {
  dispatchEvent(channelLoading());
  try {
    const res = await postChannel(params);
    dispatchEvent(channelSuccess(res));
  } catch (e) {
    dispatchEvent(channelFail(e));
  }
};
