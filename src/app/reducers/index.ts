import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { ArticleState } from './article.reducer'
import * as articleReducer from './article.reducer';

// 以下是将所有的reducer进行归总,用于写到AppModule里进行注册
// 但不同的模块还是使用不同的reducer

export interface AppState {   // 归总state
    articleState: ArticleState;
}

export const reducerAll: ActionReducerMap<AppState> = {   // 归总reducer
    articleState: articleReducer.reducer
}
export function ReducerAll(reducer: ActionReducer<AppState>): ActionReducer<AppState> {  // 编写reduc方法
    return function (state: AppState, action: any) {
        return reducer(state, action)
    }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [ReducerAll] : [];

  // Action:  Action是状态的改变。它描述了某个事件的发生，但是没有指定应用的状态如何改变。
  // ActionReducerMap注册了一系列的reducer，在应用中使用StoreModule对它进行配置。
  // ActionReducer: 它被用于创建reducer，例如logger。
  // MetaReducer: 在应用中使用StoreModule配置的MetaReducer构成了根的meta-reducer。
  // StoreModule: StoreModule是@ngrx/storeAPI中的一个模块，它被用来在应用模块中配置reducer。
  // Store: 它提供了Store.select()和Store.dispatch()来与reducer协同工作。
  // Store.select()用于选择一个selector，Store.dispatch()用于向reducer分发action的类型。
