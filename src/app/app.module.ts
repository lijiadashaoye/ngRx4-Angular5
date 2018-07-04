import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

  // StoreModule: StoreModule是@ngrx/storeAPI中的一个模块，它被用来在应用模块中配置reducer。
import { StoreModule } from '@ngrx/store';
import { reducerAll, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducerAll, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
