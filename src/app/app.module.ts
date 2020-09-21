import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { ListKegsComponent } from './list-kegs/list-kegs.component';

@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    ListKegsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
