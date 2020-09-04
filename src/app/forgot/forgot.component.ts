import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  public uiInvalidCredentials = false;
  public fbFormGroup=this.fb.group({
    username:['',Validators.required],
  });
  constructor(private fb:FormBuilder, private router: Router,private http:HttpClient) { }

  ngOnInit(): void { }

  async forgot(){
    const data = this.fbFormGroup.value;

    //ajax call
    const url='http://localhost:3000/forgot-user';
    const result:any = await this.http.post(url,data).toPromise();
    if (result.opr){
      this.router.navigate(['reset']);
    }else{
      this.uiInvalidCredentials = true;
    }
    
  }

}
