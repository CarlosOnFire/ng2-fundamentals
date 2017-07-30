import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'navbar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [`
    li > a.active { color: #F97924; }
  `]
})

export class NavbarComponent {

  constructor(private auth:AuthService){
    
  }
}
