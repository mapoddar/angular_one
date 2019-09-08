import { Component, OnInit } from '@angular/core';
import {GitprofService} from '../../services/gitprof.service';
import { HttpHeaders,  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile:any;
  repos;
  username:string;
  my_repo_prop; 
  access_token = "4272a10a2fb29f60fe6ff13ecd6bd620829e2e66";
  // { "name": string; "auto_init": boolean; "private": boolean; "gitignore_template": string; };
   constructor(private profileService: GitprofService, private http:HttpClient) { }

   findprofile(){
     this.profileService.updateprofile(this.username);

    this.profileService.getProfleInfo().subscribe(profile => {console.log(profile);
    this.profile = profile;});

    this.profileService.getrepoinfo().subscribe(repos => {
      console.log("all values from repo",repos);
      this.repos = repos;
    });
   
    console.log("hi",this.repos);
   
    }
 
    url = "https://api.github.com/user/repos";
    createrepo(reponame:string) {
      this.my_repo_prop = {
      "name": reponame,
      "auto_init": true,
      "private": false,
      "gitignore_template": "nanoc"
    };
    let options = {
      headers: new HttpHeaders({ 'Authorization': 'token 4272a10a2fb29f60fe6ff13ecd6bd620829e2e66' })
    }
    this.http.post(this.url, this.my_repo_prop, options).subscribe ( s => {
      this.repos.push(s);
      console.log("creaed repo",s);   
    })
  }

  deleterepo(reponame) {
    this.http.delete("https://api.github.com/repos/" + reponame.full_name + "?access_token=" + this.access_token).subscribe(s => {
      console.log(s);
    this.repos = this.repos.filter(item => item.name !== reponame.name);
    });
    console.log("deleted this",this.repos);
    console.log(reponame);
  }

  public additem(repo){
    this.profileService.addtof(repo).subscribe(added => console.log("added success",added));
    console.log(repo);
  }
  
  ngOnInit() {}

}