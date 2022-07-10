import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = "https://spotify-express-app.herokuapp.com/login";
  }
}
