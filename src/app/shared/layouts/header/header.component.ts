import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { apiEndpoint } from 'src/app/core/constants/constants';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isAuthenticated$: any;
  
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
    ){
    this.isAuthenticated$ = this.tokenService.isAuthentication;
  }

  onLogout(){
    this.authService.onLogout().subscribe({
      next:(value)=>{
        this.router.navigate([''])
      }
    })
  }
}
