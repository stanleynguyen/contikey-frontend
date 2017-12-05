import {
  ARTICLE_FAIL,
  ARTICLE_LOADING,
  ARTICLE_SUCCESS,
  ARTICLE_LIKE,
  ARTICLE_UNLIKE,
  ARTICLE_COMMENTING,
  ARTICLE_COMMENT,
  ARTICLE_POSTED,
} from 'constants/actionTypes';
import {
  loadArticleById,
  likeUnlikeArticle,
  commentArticle,
  postArticle,
} from 'lib/articleService';
import { authRefresh } from 'actions';
import { withAuth } from 'lib/authentication';

const articleLoading = () => ({ type: ARTICLE_LOADING });
const articleSuccess = payload => ({ type: ARTICLE_SUCCESS, payload });
const articleFail = payload => ({ type: ARTICLE_FAIL, payload });
const articleLikeAction = () => ({ type: ARTICLE_LIKE });
const articleUnlikeAction = () => ({ type: ARTICLE_UNLIKE });
const articleCommenting = () => ({ type: ARTICLE_COMMENTING });
const articleCommented = payload => ({ type: ARTICLE_COMMENT, payload });
const articlePosted = () => ({ type: ARTICLE_POSTED });

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
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => articleLike()));
    const res = await withAuth(
      likeUnlikeArticle.bind(null, { article_id }, true),
      dispatchRefresh,
    );
    dispatchEvent(articleLikeAction());
  } catch (e) {
    dispatchEvent(articleFail(e));
  }
};

export const articleUnlike = () => async (dispatchEvent, getState) => {
  const { article_id } = getState().article;
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => articleLike()));
    const res = await withAuth(
      likeUnlikeArticle.bind(null, { article_id }, false),
      dispatchRefresh,
    );
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
    const dispatchRefresh = () =>
      dispatchEvent(
        authRefresh(() => articleComment({ article_id, comment_text })),
      );
    const res = await withAuth(
      commentArticle.bind(null, { article_id, comment_text }),
      dispatchRefresh,
    );
    const payload = Object.assign({}, getState().auth.user, res[0]);
    dispatchEvent(articleCommented(payload));
  } catch (e) {
    dispatchEvent(articleFail(e));
  }
};
export const articleNew = params => async dispatchEvent => {
  dispatchEvent(articleLoading());
  try {
    const res = await postArticle(params);
    dispatchEvent(articlePosted(res));
  } catch (e) {
    dispatchEvent(articleFail(e));
  }
};
