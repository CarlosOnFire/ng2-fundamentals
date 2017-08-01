import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from './auth.service'

@Component({
  templateUrl: 'app/user/profile.component.html',
})

export class ProfileComponent implements OnInit{
  profileForm:FormGroup
  isDirty:boolean = true

  constructor(private route:Router, private authService:AuthService){

  }

  cancelEditProfile(){
    this.route.navigate(['/events'])
  }

  saveProfile(formValues){
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.route.navigate(['/events'])
  }
  
  ngOnInit(){
    let firstName = new FormControl(this.authService.currentUser.firstName)
    let lastName = new FormControl(this.authService.currentUser.lastName)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })

  }

}