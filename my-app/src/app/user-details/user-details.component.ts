import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule, NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';;
import { User } from '../models/user';
import { Post } from '../models/post';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  templateUrl: './user-details.component.html',
  imports: [FormsModule, NgIf, UpperCasePipe, CommonModule, PostDetailsComponent,],
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input() user?: User;
  @Input() posts: Post[] = [];
  @Output() deselect = new EventEmitter<void>();
  @Output() showPostDetails = new EventEmitter<Post>();
  editUser: User=   {  'id': 0,
  'name': {
   'first_name': '',
   'middle_name':'',
   'last_name': '',
 },
 'email':'hello@gmail.com',
 'phone_number':0,
 'gender':''
};

constructor(public userService: UserService) {}
  update: boolean= false;

  ngOnInit() {
    this.editUser =   { 'id': 0,
    'name': {
     'first_name': this.user?.name.first_name!,
     'middle_name': this.user?.name.middle_name!,
     'last_name': this.user?.name.last_name!,
   },
   'email':this.user?.email!,
   'phone_number':this.user?.phone_number!,
   'gender': this.user?.gender!
 };

  }
  getUserPosts(userId: number): Post[] {
    return this.posts.filter(post => post.userId === userId);
  }

  showPost(post: Post): void {
    this.showPostDetails.emit(post);
  }

  updateEdit(state: boolean) {
    this.update = state;
    console.log("Cambio modo edición/lectura", this.update);
  }

  updateUser(): void {
    this.userService.updateUser(this.editUser).subscribe (editUser =>{
      console.log(editUser);
    });
  }
}
