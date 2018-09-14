import { Action } from '@ngrx/store';
import { Article } from '../../models/article';

// 不使用强类型检查
// export const JAVA = 'Java';
// export const ANGULAR = 'Angular';
// export const MY_ARTICLES = 'Favorite_Articles';

// 使用强类型检查
export enum CounterActionTypes {
    JAVA = '[Counter] Java',
    ANGULAR = '[Counter] Angular',
    MY_ARTICLES = '[Counter] Favorite_Articles',
}


// Action:  Action是状态的改变。它描述了某个事件的发生，但是没有指定应用的状态如何改变。
export class JavaArticleAction implements Action {
    readonly type = CounterActionTypes.JAVA;
}

export class AngularArticleAction implements Action {
    readonly type = CounterActionTypes.ANGULAR;
}

export class FavoriteArticlesAction implements Action {
    readonly type = CounterActionTypes.MY_ARTICLES;
    constructor(public payload: Article[]) { }
}

export type All = JavaArticleAction | AngularArticleAction | FavoriteArticlesAction