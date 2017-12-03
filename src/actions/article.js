import {
  ARTICLE_FAIL,
  ARTICLE_LOADING,
  ARTICLE_SUCCESS,
  ARTICLE_LIKE,
  ARTICLE_UNLIKE,
  ARTICLE_COMMENTING,
  ARTICLE_COMMENT,
} from 'constants/actionTypes';
import {
  loadArticleById,
  likeUnlikeArticle,
  commentArticle,
} from 'lib/articleService';

const articleLoading = () => ({ type: ARTICLE_LOADING });
const articleSuccess = payload => ({ type: ARTICLE_SUCCESS, payload });
const articleFail = payload => ({ type: ARTICLE_FAIL, payload });
const articleLikeAction = () => ({ type: ARTICLE_LIKE });
const articleUnlikeAction = () => ({ type: ARTICLE_UNLIKE });
const articleCommenting = () => ({ type: ARTICLE_COMMENTING });
const articleCommented = payload => ({ type: ARTICLE_COMMENT, payload });

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

export const articleComment = ({ article_id, comment_text }) => async (
  dispatchEvent,
  getState,
) => {
  dispatchEvent(articleCommenting());
  try {
    await commentArticle({ article_id, comment_text });
    const payload = Object.assign({}, getState().auth.user, {
      article_id,
      comment_text,
      created_at: new Date(),
    });
    dispatchEvent(articleCommented(payload));
  } catch (e) {
    dispatchEvent(articleFail(e));
  }
};
