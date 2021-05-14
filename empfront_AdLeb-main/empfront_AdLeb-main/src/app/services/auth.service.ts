import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5/dist/md5';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public login(info: { email: string, password: string }):Observable<number> { 
    
    //info.password = Md5.hashStr(info.password) as string
    
    // public login(info: { email: string, password: string }){
    //   return this._http.post<any>(`${environment.srvUrl}/auth`, info, {observe: 'response'})
    //       .pipe(map(res => 
    //         {
    //           if (res.status == 200)
    //             localStorage.setItem("token", res.body.token);                
    //           return res.status;
    //           // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
    //           // user.authdata = window.btoa(email + ':' + password);
    //           // localStorage.setItem('currentUser', JSON.stringify(user));
    //           // this.currentUserSubject.next(user);
    //           // return user;
    //       }));
 //}
    return this._http.post<any>("/api/auth/token/", info, {observe: 'response'})
            .pipe(
              map(res=> 
              {
                if (res.status == 200)
                  localStorage.setItem("token", res.body.token);                
                return res.status;
              }),
              catchError(error => {
                return of((error as HttpResponse<any>).status);
              }
              )
            )
  }
  
  public sendGetRequest(){
    this._http.get("/Empoyer").subscribe(res=> alert(res));//
  }
}
