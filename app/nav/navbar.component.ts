import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [`
    li > a.active { color: #F97924; }
  `]
})

export class NavbarComponent {

}
