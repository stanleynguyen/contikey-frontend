import {
  ARTICLE_FAIL,
  ARTICLE_LOADING,
  ARTICLE_SUCCESS,
} from 'constants/actionTypes';
import { loadArticleById } from 'lib/articleService';

const articleLoading = () => ({ type: ARTICLE_LOADING });
const articleSuccess = payload => ({ type: ARTICLE_SUCCESS, payload });
const articleFail = payload => ({ type: ARTICLE_FAIL, payload });

export const articleFetch = ({ article_id }) => async dispatchEvent => {
  dispatchEvent(articleLoading());
  try {
    const res = await loadArticleById({ article_id });
    dispatchEvent(articleSuccess(res));
  } catch (e) {
    dispatchEvent(articleFail(e));
  }
};
