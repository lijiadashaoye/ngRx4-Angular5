import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { ArticleState, artReducer } from './reducer/article.reducer';

// 以下是将所有的reducer进行归总,用于写到AppModule里进行注册
// 但不同的模块还是使用不同的reducer

interface AppState {   // 归总state
    articleState: ArticleState;
}

// ActionReducerMap注册了一系列的reducer，在应用中使用StoreModule对它进行配置。
const reducerAll: ActionReducerMap<AppState> = {   // 归总reducer
    articleState: artReducer
}

// ActionReducer: 它被用于创建reducer，例如 ReducerAll
function ReducerAll(reducer: ActionReducer<AppState>): ActionReducer<AppState> {  // 编写reducer方法
    return function (state: AppState, action: any) {
        return reducer(state, action)
    }
}

// MetaReducer: 在应用中使用StoreModule配置的MetaReducer构成了 根的meta-reducer。
const metaReducers: MetaReducer<AppState>[] = !environment.production ? [ReducerAll] : [];

///////////////////////////////////////////////////////////////////////////////////////
// 包装成模块
import { NgModule } from '@angular/core';
// StoreModule: StoreModule是@ngrx/storeAPI中的一个模块，它被用来在应用模块中配置reducer。
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [
        StoreModule.forRoot(reducerAll, { metaReducers }),
        // 当懒加载的模块中含有reducer时，用 forFeature 作为引入module模块的方法
        // StoreModule.forFeature('feature', FEATURE_REDUCER_TOKEN),
    ],
})
export class ReducerModule { }