import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoobarComponent } from './foobar/foobar.component';
import { LoremipsumComponent } from './loremipsum/loremipsum.component';

const routes: Routes = [
    { path: 'foobar', component: FoobarComponent },
    { path: 'loremipsum', component: LoremipsumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
