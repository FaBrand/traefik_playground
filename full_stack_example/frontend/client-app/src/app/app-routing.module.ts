import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoobarComponent } from './foobar/foobar.component';

const routes: Routes = [
    { path: 'foobar', component: FoobarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
