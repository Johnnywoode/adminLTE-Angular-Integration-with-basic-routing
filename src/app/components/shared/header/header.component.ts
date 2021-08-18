import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  userName: string = "SIRJAW"
  page: string = "dashboard"
  active: string 
  courses: any[] = []
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.active = (this.router.url.split('/')[1] == this.page)? "active" : ""
    this.courses = [
      { title: 'ICT 361' },
      { title: 'ICT 362' },
      { title: 'ICT 363' },
      { title: 'Pre-Internship' },
      { title: 'EDC 242lt' },
      { title: 'EDC 361lt' },
      { title: 'EDC 351lt' },
    ]
  }

  redirectToHome(){
    this.router.navigateByUrl('dashboard/home');
  }

  redirectToAbout(){
    this.router.navigateByUrl('dashboard/about');
  }

  redirectToAccount(){
    this.router.navigateByUrl('dashboard/account');
  }
  

  redirectToCourses(){
    this.router.navigateByUrl('dashboard/courses');
  }
  
  logout(){
    this.router.navigateByUrl('login');
  }

}
