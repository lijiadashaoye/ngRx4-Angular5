import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { ArticleState } from './article.reducer'
import * as articleReducer from './article.reducer';

// 以下是将所有的reducer进行归总,用于写到AppModule里进行注册
// 但不同的模块还是使用不同的reducer

export interface AppState {   // 归总state
    articleState: ArticleState;
}

export const reducerAll: ActionReducerMap<AppState> = {   // 归总reduc
    articleState: articleReducer.reducer
}
export function ReducerAll(reducer: ActionReducer<AppState>): ActionReducer<AppState> {  // 编写reduc方法
    return function (state: AppState, action: any) {
        return reducer(state, action)
    }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [ReducerAll] : [];