import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, filter, switchMap} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GitprofService {

  private username:string;
  private clientid = '907ef84740041fb86164';
  private clientsecret = 'f816e274bbb3e4b84d5ba5b00cdd0faad46559ae';
  constructor(private http: HttpClient) {

    console.log("service is now ready");
    this.username = 'mapoddar';
  }

  getProfleInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).pipe(map(res => (res)));
  }

  getrepoinfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).pipe(map(res => (res)));
  }

  updateprofile(username:string){
    this.username = username;
  }
}
