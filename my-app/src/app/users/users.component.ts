import { Component } from '@angular/core';
import { User } from '../models/user';
import { POSTS } from '../mock-posts';
import { Post } from '../models/post';
import {FormsModule} from '@angular/forms';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { UserService } from '../services/user.service';

import { NgIf, NgFor, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe,UserDetailsComponent, PostDetailsComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] | undefined;
  newUser: User ={
    'id': 0,
     'name': {
      'first_name': '',
      'middle_name':'',
      'last_name': '',
    },
    'email':'hello@gmail.com',
    'phone_number':0,
    'gender':''
  };
  posts = POSTS;
 
  selectedUser?: User;
  selectedPost?: Post;
  showAddUserForm = false;

  constructor(public userService: UserService) {}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe (users =>{
      this.users = users;
      console.log(users);
    })
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.selectedPost = undefined;
  }

  showPostDetails(post: Post): void {
    this.selectedPost = post;
  }

  deselectUser(): void {
    this.selectedUser = undefined;
  }

  postUser(): void{
    this.userService.postUsers(this.newUser).subscribe(()=>{
      console.log("usuario añadido!!!");
      this.users?.push(this.newUser);

    })
  } 
  

}
