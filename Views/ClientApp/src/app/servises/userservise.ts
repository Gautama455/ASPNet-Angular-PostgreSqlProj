import { Injectable } from '@angular/core';
import { User } from '../../models/user.models';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, finalize, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServise {
  private apiUrl = "http://localhost:5249/api/users";
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private http : HttpClient) {}

    getUsers() : Observable<User[]> {
      this.loadingSubject.next(true);
      
      return this.http.get<User[]>(this.apiUrl).pipe(
        map(users => users || []),
        finalize( () => this.loadingSubject.next(false))
      );
  }
}
