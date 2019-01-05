import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoobarComponent } from './foobar/foobar.component';
import { LoremipsumComponent } from './loremipsum/loremipsum.component';
import { RemotedataComponent } from './remotedata/remotedata.component';
import { NewnumbersComponent } from './newnumbers/newnumbers.component';

@NgModule({
  declarations: [
    AppComponent,
    FoobarComponent,
    LoremipsumComponent,
    RemotedataComponent,
    NewnumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
