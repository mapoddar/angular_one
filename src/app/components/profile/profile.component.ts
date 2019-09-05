import { Component, OnInit } from '@angular/core';
import {GitprofService} from '../../services/gitprof.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile:any;
  private repos:any[];
  username:string;
  constructor(private profileService: GitprofService) {
    
   }

   findprofile(){
     this.profileService.updateprofile(this.username);

    this.profileService.getProfleInfo().subscribe(profile => {console.log(profile);
    this.profile = profile;});

    this.profileService.getrepoinfo().subscribe(repos => {console.log(repos);
    this,repos = repos;});
   
   
    }
 
  ngOnInit() {
  }

}