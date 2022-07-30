import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Repository } from '../../models/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  gitUrl = 'https://api.github.com';

  getRepository(userName: string): Observable<Repository> {
    const url = `${this.gitUrl}/users/${userName}/repos?per_page=65`
    return this.http.get<Repository>(url).pipe(
      map((response: any) => response)
    );
  }
}