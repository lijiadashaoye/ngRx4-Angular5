import { Action } from '@ngrx/store';
import { Article } from '../models/article';

export const JAVA = 'Java';
export const ANGULAR = 'Angular';
export const MY_ARTICLES = 'Favorite_Articles';

// Action:  Action是状态的改变。它描述了某个事件的发生，但是没有指定应用的状态如何改变。
export class JavaArticleAction implements Action {
    readonly type = JAVA;
}

export class AngularArticleAction implements Action {
    readonly type = ANGULAR;
}

export class FavoriteArticlesAction implements Action {
    readonly type = MY_ARTICLES;
    constructor(public payload: Article[]) { }
}

export type All = JavaArticleAction | AngularArticleAction | FavoriteArticlesAction