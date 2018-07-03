import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './app.states';
import * as articleReducer from './article.reducer';
import { environment } from '../../environments/environment';

export const reducers: ActionReducerMap<AppState> = {
  articleState: articleReducer.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];


  // Action:  Action是状态的改变。它描述了某个事件的发生，但是没有指定应用的状态如何改变。
  // ActionReducerMap： ActionReducerMap注册了一系列的reducer，在应用中使用StoreModule对它进行配置。
  // ActionReducer: 它被用于创建reducer，例如logger。
  // MetaReducer: 在应用中使用StoreModule配置的MetaReducer构成了根的meta-reducer。
  // StoreModule: StoreModule是@ngrx/storeAPI中的一个模块，它被用来在应用模块中配置reducer。
  // Store: 它提供了Store.select()和Store.dispatch()来与reducer协同工作。
  // Store.select()用于选择一个selector，Store.dispatch()用于向reducer分发action的类型。
