import { Action } from '@ngrx/store';
import { Article } from '../models/article';

export const JAVA = 'Java';
export const ANGULAR = 'Angular';
export const MY_ARTICLES = 'Favorite_Articles';

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