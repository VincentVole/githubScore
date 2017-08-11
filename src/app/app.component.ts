import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app';
  userName = {
  	userName:''
  }
  score:number;
  msg:string;
  color:string;

  constructor(private _http:HttpServiceService){

  }

  onClick(){
  	this._http.getUser(this.userName.userName)
  	.then((user)=>{
  		this.score = user.public_repos + user.followers;
  		if(this.score < 20){
  			this.msg = 'Needs Work!';
  			this.color = 'red';
  		}
  		else if(this.score < 50){
  			this.msg = 'A decent start!';
  			this.color = 'orange';
  		}
  		else if(this.score < 100){
  			this.msg = 'Doing good!';
  			this.color = 'black';
  		}
  		else if(this.score < 200){
  			this.msg = 'Great job!';
  			this.color = 'green';
  		}
  		else if(this.score >= 200){
  			this.msg = 'Github Elite!';
  			this.color = 'blue';
  		}
  	})
  	.catch((err)=>{
  		console.log(err);
  	})
  }
}
