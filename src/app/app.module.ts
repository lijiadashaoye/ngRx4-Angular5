import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article.component';
import { reducers, metaReducers } from './reducers/reducers';

@NgModule({
      imports: [
            BrowserModule,
            StoreModule.forRoot(reducers, { metaReducers })

            // 如果有懒加载的模块，则子模块中使用forFeature作为导入方法
            // .forFeature的第一个参数包含一个表示特征状态名称的字符串，第二个参数提供了我们管理该特征状态的reducer
            
            // StoreModule.forFeature('auth', reducers),
      ],
      declarations: [
            AppComponent,
            ArticleComponent
      ],
      providers: [

      ],
      bootstrap: [
            AppComponent
      ]
})
export class AppModule { }
