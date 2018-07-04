import { Article } from '../../models/article';

export interface ArticleState {
	articles: Article[];
}
export interface AppState {
	articleState: ArticleState;
}