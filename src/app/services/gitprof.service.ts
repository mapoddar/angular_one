import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {filter} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitprofService {

  private username:string;
  private clientid = '907ef84740041fb86164';
  private clientsecret = 'f816e274bbb3e4b84d5ba5b00cdd0faad46559ae';
  private access_token = '4272a10a2fb29f60fe6ff13ecd6bd620829e2e66';
  constructor(private http: HttpClient) {

    console.log("service is now ready");
    this.username = 'mapoddar';
  }

  getProfleInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.access_token);
    // .pipe(map(res => (res)));
  }

  getrepoinfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.access_token);
    // .pipe(map(res => (res)));
  }

  updateprofile(username:string){
    this.username = username;
  }
  public addtof(fav:any):Observable<any>{
    let _favlink="http://localhost:3000/repo";
     return this.http.post(_favlink,fav);
  }
  getfav():Observable<any>{
   let _favlink="http://localhost:3000/repo";
   return this.http.get(_favlink);
  }
  removef(remf:any):Observable<any>{
   let _favlink="http://localhost:3000/repo";
   return this.http.delete(`${_favlink}/${remf}`);
  }
}
