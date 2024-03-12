import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule, NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';;
import { User } from '../models/user';
import { Post } from '../models/post';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  templateUrl: './user-details.component.html',
  imports: [FormsModule, NgIf, UpperCasePipe, CommonModule, PostDetailsComponent],
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input() user?: User;
  @Input() editUser?: User;
  @Input() posts: Post[] = [];
  @Output() deselect = new EventEmitter<void>();
  @Output() showPostDetails = new EventEmitter<Post>();

  getUserPosts(userId: number): Post[] {
    return this.posts.filter(post => post.userId === userId);
  }

  showPost(post: Post): void {
    this.showPostDetails.emit(post);
  }
}
