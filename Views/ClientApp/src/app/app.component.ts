import { Component, ViewChild} from '@angular/core';
import { User } from '../models/user.models';
import { UserListComponent } from '../userList/userList.component';
import { UserServise } from './servises/userservise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports : [UserListComponent]
})
export class AppComponent {
  @ViewChild(UserListComponent) userList!: UserListComponent;

  private users: User[] = [];

  public get Users() : User[] {return this.users;}

  constructor(private uservise: UserServise) {}

  loadUsers(){
    this.uservise.getUsers().subscribe({
      next: (responce) =>
        { this.users = [...responce]; this.userList.renderUsers();}
    })
  }
}
