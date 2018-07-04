import { Component, OnInit } from '@angular/core';

// Store: 它提供了Store.select()和Store.dispatch()来与reducer协同工作。
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromActions from '../reducers/actions/article.actions';

// 不同的模块还是使用不同的reducer，归总只是为了在跟模块进行注册

import { ArticleState, getArticles } from '../reducers/reducer/article.reducer';
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
    // Store.select()用于选择一个selector
    this.articles = this.store.select(getArticles);
  }
  showJavaArticles() {  // Store.dispatch()用于向reducer分发action的类型
    this.store.dispatch(new fromActions.JavaArticleAction());
  }
  showAngularArticles() {
    this.store.dispatch(new fromActions.AngularArticleAction());
  }
  showFavoriteArticles() {
    this.store.dispatch(new fromActions.FavoriteArticlesAction(FAVORITE_ARTICLES));
  }
}	