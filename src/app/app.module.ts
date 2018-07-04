import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ReducerModule } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    ReducerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
