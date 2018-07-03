import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/article.actions';
import { JAVA_ARTICLES, ANGULAR_ARTICLES } from '../models/article';
import { ArticleState } from './app.states';

export const initialState: ArticleState = { articles: [] };

export function reducer(state = initialState, action: fromActions.All): ArticleState {
  switch (action.type) {
    case fromActions.JAVA: {
      return { articles: JAVA_ARTICLES };
    }
    case fromActions.ANGULAR: {
      return { articles: ANGULAR_ARTICLES };
    }
    case fromActions.MY_ARTICLES: {
      return { articles: action.payload };
    }
    default: {
      return state;
    }
  }
}
// createFeatureSelector: 它为状态（state）创建一个feature selector。
// 用在懒加载的模块内，状态也会形成一个状态树，
// createFeatureSelector返回一个选择器函数，该函数查找并返回指定的特征状态，

// createSelector: 它创建一个selector用于生成一个指定的状态。
// 用来从状态树中找到指定的状态，然后在组件内，通过：	
// this.articles = store.select(articleReducer.getArticles);得到状态对应的数据

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
  getArticleState,
  (state: ArticleState) => state.articles
);