import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromActions from '../actions/article.actions';

// 不同的模块还是使用不同的reducer，归总只是为了在跟模块进行注册
import * as articleReducer from '../reducers/article.reducer';
import { ArticleState } from '../reducers/article.reducer';
import { Article, FAVORITE_ARTICLES } from '../models/article';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(private store: Store<ArticleState>) { }
  ngOnInit() {
    this.articles = this.store.select(articleReducer.getArticles);
  }
  showJavaArticles() {
    this.store.dispatch(new fromActions.JavaArticleAction());
  }
  showAngularArticles() {
    this.store.dispatch(new fromActions.AngularArticleAction());
  }
  showFavoriteArticles() {
    this.store.dispatch(new fromActions.FavoriteArticlesAction(FAVORITE_ARTICLES));
  }
}	