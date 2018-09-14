import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Article, JAVA_ARTICLES, ANGULAR_ARTICLES } from '../../models/article';
import * as fromActions from '../actions/article.actions'

export interface ArticleState {
    articles: Article[];
}

const initialState: ArticleState = { articles: [] };

export function artReducer(state = initialState, action: fromActions.All): ArticleState {
    switch (action.type) {
        case fromActions.CounterActionTypes.JAVA: {
            return { articles: JAVA_ARTICLES };
        }
        case fromActions.CounterActionTypes.ANGULAR: {
            return { articles: ANGULAR_ARTICLES };
        }
        case fromActions.CounterActionTypes.MY_ARTICLES: {
            return { articles: action.payload };
        }
        default: return state;
    }
}

const getArticleState = createFeatureSelector<ArticleState>('articleState');
// createSelector 可以有很多个参数，但最后一个必须是返回state的函数
export const getArticles = createSelector(
    getArticleState,
    (state: ArticleState) => state.articles
)