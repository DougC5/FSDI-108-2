import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public users: User[] = [];

  constructor() {}

    public addUser(theUser: User) {
     this.users.push(theUser);
    }

    public getAllUsers() {
      return this.users;
    }
  }

