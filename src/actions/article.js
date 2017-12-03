import {
  ARTICLE_FAIL,
  ARTICLE_LOADING,
  ARTICLE_SUCCESS,
  ARTICLE_LIKE,
  ARTICLE_UNLIKE,
} from 'constants/actionTypes';
import { loadArticleById, likeUnlikeArticle } from 'lib/articleService';

const articleLoading = () => ({ type: ARTICLE_LOADING });
const articleSuccess = payload => ({ type: ARTICLE_SUCCESS, payload });
const articleFail = payload => ({ type: ARTICLE_FAIL, payload });
const articleLikeAction = () => ({ type: ARTICLE_LIKE });
const articleUnlikeAction = () => ({ type: ARTICLE_UNLIKE });

export const articleFetch = ({ article_id }) => async dispatchEvent => {
  dispatchEvent(articleLoading());
  try {
    const res = await loadArticleById({ article_id });
    dispatchEvent(articleSuccess(res));
  } catch (e) {
    dispatchEvent(articleFail(e));
  }
};

export const articleLike = () => async (dispatchEvent, getState) => {
  const { article_id } = getState().article;
  try {
    const res = await likeUnlikeArticle({ article_id }, true);
    dispatchEvent(articleLikeAction());
  } catch (e) {
    dispatchEvent(articleFail(e));
  }
};

export const articleUnlike = () => async (dispatchEvent, getState) => {
  const { article_id } = getState().article;
  try {
    const res = await likeUnlikeArticle({ article_id }, false);
    dispatchEvent(articleUnlikeAction());
  } catch (e) {
    dispatchEvent(articleFail(e));
  }
};
