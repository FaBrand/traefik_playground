import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <hr/>
    <ul>
      <li>
        <h2><a class="nav-link" [routerLink]="['/']" >Home</a></h2>
      </li>
      <li>
        <h2><a class="nav-link" [routerLink]="['/foobar']" >Foobar Link</a></h2>
      </li>
      <li>
        <h2><a class="nav-link" [routerLink]="['/loremipsum']" >LoremIpsum Link</a></h2>
      </li>
      <li>
        <h2><a class="nav-link" [routerLink]="['/redirect']" >Redirect to home</a></h2>
      </li>
      <li>
        <h2><a class="nav-link" [routerLink]="['/apidata']" >Asyncdata</a></h2>
      </li>
      <li>
        <h2><a class="nav-link" [routerLink]="['/adddata']" >Add new data</a></h2>
      </li>
      <li>
          <h2><a class="nav-link" href="http://whoami.localhost" >Whoami</a></h2>
      </li>
      <li>
          <h2><a class="nav-link" href="http://api.localhost" >Api</a></h2>
      </li>
    </ul>
    <hr/>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'client-app';
}
