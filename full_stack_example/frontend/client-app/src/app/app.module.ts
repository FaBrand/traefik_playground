import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoobarComponent } from './foobar/foobar.component';
import { LoremipsumComponent } from './loremipsum/loremipsum.component';
import { RemotedataComponent } from './remotedata/remotedata.component';

@NgModule({
  declarations: [
    AppComponent,
    FoobarComponent,
    LoremipsumComponent,
    RemotedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
