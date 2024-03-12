import { Component, Output, EventEmitter } from '@angular/core';
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
  showAddUserForm: boolean = false;
  isUserSelected: boolean = false;

  constructor(public userService: UserService) {}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe (users =>{
      this.users = users;
      console.log(users);
    })
  }

  @Output() userSelected = new EventEmitter<boolean>();

  onSelect(user: User): void {
    this.selectedUser = user;
    this.selectedPost = undefined;
    this.userSelected.emit(true);
  }

  showPostDetails(post: Post): void {
    this.selectedPost = post;
  }

  deselectUser(): void {
    this.selectedUser = undefined;
    this.userSelected.emit(false); // Emitir false cuando se deselecciona un usuario
  }

  postUser(): void{
    this.userService.postUsers(this.newUser).subscribe(()=>{
      console.log("usuario añadido!!!");
      this.users?.push(this.newUser);
      this.newUser = { // Vaciar los campos del nuevo usuario después de agregarlo
        'id': 0,
        'name': {
          'first_name': '',
          'middle_name': '',
          'last_name': '',
        },
        'email': 'hello@gmail.com',
        'phone_number': 0,
        'gender': ''
      };
    })
  } 
  showAddUser(state: boolean) {
    this.showAddUserForm = state;
    console.log("Cambio modo edición/lectura", this.showAddUserForm);
  }

  onUserSelected(selected: boolean): void {
    this.isUserSelected = selected;
  }
}
