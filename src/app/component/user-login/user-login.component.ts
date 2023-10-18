import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUser:any[]=[]
  signupObj:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    email:'',
    password:''
  };
  constructor() { }

  ngOnInit(): void {
    const localData=localStorage.getItem('signupUser')
    if(localData!=null){
      this.signupUser=JSON.parse(localData)
    }

  }
  onSignUp(){
    this.signupUser.push(this.signupObj)
    localStorage.setItem('signUpUser',JSON.stringify(this.signupUser))
    this.signupObj={
      userName:'',
      email:'',
      password:''
    };
  }
  onLogin(){
    debugger
const isUserExist = this.signupUser.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password)
if(isUserExist!=undefined){
  alert('user login successfully')
}else{
  alert('Wrong Credential')
}
  }

}
