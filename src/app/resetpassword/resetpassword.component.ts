import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public uiInvalidCredentials = false;
  public fbFormGroup=this.fb.group({
    username:['',Validators.required],
    password: ['',Validators.required],
  });
  constructor(private fb:FormBuilder, private router: Router,private http:HttpClient) { }

  ngOnInit(): void { }

  async resetpassword(){
    const data = this.fbFormGroup.value;

    //ajax call
    const url='http://localhost:3000/reset-user';
    const result:any = await this.http.post(url,data).toPromise();
    if (result.opr){
      this.router.navigate(['login']);
    }else{
      this.uiInvalidCredentials = true;
    }
    
  }
}
