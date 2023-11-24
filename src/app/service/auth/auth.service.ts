import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

var authUrl = 'http://192.168.9.47:3887/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const JUST_LOGGED_IN_KEY = 'just-logged-in'; // Add this key

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private justLoggedIn: boolean = false; 
  constructor(private http: HttpClient, private router: Router) {}
  login(nik: string, password: string): Observable<any> {
    return this.http.post(
      authUrl + 'signin',
      {
        nik,
        password,
      },
      httpOptions
    );
  }

  signOut(): void {
    localStorage.clear();
    // location.reload();
    this.justLoggedIn = false;
    this.router.navigate(['/login']);
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.justLoggedIn = true;
  }

  public hasJustLoggedIn(): boolean {
    if (this.justLoggedIn) {
      this.justLoggedIn = false; // Reset the flag after checking
      return true;
    }
    return false;
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
