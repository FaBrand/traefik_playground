import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoobarComponent } from './foobar/foobar.component';
import { LoremipsumComponent } from './loremipsum/loremipsum.component';
import { RemotedataComponent } from './remotedata/remotedata.component';

const routes: Routes = [
    { path: 'apidata', component: RemotedataComponent },
    { path: 'foobar', component: FoobarComponent },
    { path: 'loremipsum', component: LoremipsumComponent },
    { path: 'redirect', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
