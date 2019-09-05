import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repot',
  templateUrl: './repot.component.html',
  styleUrls: ['./repot.component.css']
})
export class RepotComponent implements OnInit {

  constructor(private http: HttpClient) { }
 
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

 

  ngOnInit() {
  
    this.test=false;
    
    this.http.get(this.my_url).subscribe(result => {
      this.result = result;
      console.log(result);
    });

    this.http.get("http://localhost:3000/repo?first_name=").subscribe(x => {
     this.favourite = x;
   console.log(x);});
  }

  myObj: any;
 fire(val) {
   this.myObj = {
     "name": val,
     "auto_init": true,
     "private": false,
     "gitignore_template": "nanoc"
   };
   this.http.post(this._url, this.myObj, this.options).subscribe(s => {
     this.result.push(s);
   });
  }
  options = {
    headers: new HttpHeaders({ 'Authorization': 'token madhur' })
  }
 
  change(reps)
 {
   this.clicked=reps;
   this.isclicked=true;
 }

 del(val)
 {
   // console.log(this.chosen);
   let delete_url="https://api.github.com/repos/mapoddar/"+val.name;
   this.http.delete(delete_url,this.options).subscribe(x => {
     this.result = this.result.filter(item => item.name !== val.name);
     this.favourite = this.favourite.filter(item => item.id !== val.id);
   });
 }

 add(val,comm)
 {
   let add_url = "http://localhost:3000/repo";
   let options = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json'})
   }

  

}
}
