import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  username: string;
  
  constructor(private authService: AuthenticationService,
    private router:Router) {
  }

  ngOnInit() {
    this.username=this.authService.getLoggedInUser();
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
