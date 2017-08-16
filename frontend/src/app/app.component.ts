import { Component } from '@angular/core';

import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'{{title}}',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Usuarios';
  
  public model:User;
  
  public usuarios:User[];
  
  constructor(){
	  this.model=new User();
		this.usuarios=[];
	  
  }
  agregarUsuario(f){
	  
	  console.log("Enviando formulario");
	  console.log(this.model);
	  var u=new User();
	  u.username=this.model.username;
	  u.firstName=this.model.firstName;
	  
	  this.usuarios.push(u);
	  f.resetForm();
	  
	  
  }
  
}
