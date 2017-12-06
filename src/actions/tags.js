import { TAGS_FAIL, TAGS_LOADING, TAGS_SUCCESS } from 'constants/actionTypes';

import { loadTags } from 'lib/tagService';

const tagsLoading = () => ({ type: TAGS_LOADING });
const tagsSuccess = payload => ({ type: TAGS_SUCCESS, payload });
const tagsFail = payload => ({ types: TAGS_FAIL, payload });

export const tagsLoad = () => async dispatchEvent => {
  dispatchEvent(tagsLoading());
  try {
    const res = await loadTags();
    dispatchEvent(tagsSuccess(res));
  } catch (e) {
    dispatchEvent(tagsFail(e));
  }
};
