import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any ={}
  currentUsers$: Observable<User>

  constructor(public  accountService: AccountService) { }
  ngOnInit(): void {
   this.currentUsers$= this.accountService.currentUser$;
  }

 

  login()
  {
    this.accountService.login(this.model).subscribe(responce => {
      console.log(responce);
    }, error =>{
      console.log(error);
    })
   
  }
  logout(){
    this.accountService.logout()

    }
  

}
