import { Component } from '@angular/core'

@Component({
  template: `
  <h1 class="errorMessage">404 Not Found</h1>
  `,
  styles: [`
    .errorMessage{
      margin-top: 150px;
      text-align: center;
      font-size: 170px;
    }
  `]
})

export class Error404Component{
  constructor(){

  }

}
