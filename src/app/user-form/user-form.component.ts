import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { Sede } from '../model/sede.model';
import { UserService } from '../user-service.service';





@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  

  user: User;
  sede: Sede;
  //obj : {[k: string]: any} = {};

  sedeList?: Sede[];

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {

          
    this.user = new User();
    this.sede = new Sede();

    
   // this.sede = new Sede();
    
  }
  getSede(): void {
    console.log('Se llama Sede' + this.sedeList)
    if((!!this.sedeList && this.sedeList?.length <= 0) || this.sedeList === undefined){
      this.userService
      .findAllSede()
      .subscribe(response => {
        this.sedeList = response;
        });

        console.log('Se llama Sede')
    }
   
  }
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
    
   //this.userService.save(this.obj).subscribe(result => this.gotoUserList());
   

  }
  onChangeS(ob: any) {
    this.sede.sedeNombre = ob.value;
   //console.log(this.sede.sedeNombre);
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
     
    
  }
  players = [
     
  ]


   
  
}
 