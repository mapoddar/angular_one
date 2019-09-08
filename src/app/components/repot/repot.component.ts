import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GitprofService} from '../../services/gitprof.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-repot',
  templateUrl: './repot.component.html',
  styleUrls: ['./repot.component.css']
})
export class RepotComponent implements OnInit {


  public test:boolean;
 public result: any;
 private my_url = "https://api.github.com/users/mapoddar/repos";
 private _url = " https://api.github.com/user/repos";
 private search_url = "";
 public search_results: any;
 public clicked : any;
 public isclicked = false;
 public chosen : string;
 public chosen_obj : any;
 public favourite : any;
 username:string

  constructor(private profileService: GitprofService){}



  ngOnInit() {

  }

  public readfav(){
    this.profileService.getfav().subscribe();
    console.log();
  }

  public removeitem(kk:any){
    this.profileService.removef(kk).subscribe();
    console.log(kk);
  }

}