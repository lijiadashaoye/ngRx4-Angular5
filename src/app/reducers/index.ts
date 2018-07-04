import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { ArticleState } from './article.reducer'
import * as articleReducer from './article.reducer';

// 以下是将所有的reducer进行归总,用于写到AppModule里进行注册
// 但不同的模块还是使用不同的reducer

export interface AppState {   // 归总state
    articleState: ArticleState;
}

// ActionReducerMap注册了一系列的reducer，在应用中使用StoreModule对它进行配置。
export const reducerAll: ActionReducerMap<AppState> = {   // 归总reducer
    articleState: articleReducer.reducer
}

  // ActionReducer: 它被用于创建reducer，例如 ReducerAll
export function ReducerAll(reducer: ActionReducer<AppState>): ActionReducer<AppState> {  // 编写reduc方法
    return function (state: AppState, action: any) {
        return reducer(state, action)
    }
}

// MetaReducer: 在应用中使用StoreModule配置的MetaReducer构成了 根的meta-reducer。
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [ReducerAll] : [];
