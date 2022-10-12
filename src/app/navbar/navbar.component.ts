import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  infoPersonal(){
    this.router.navigate([''])
  }

  conocimientos(){
    this.router.navigate(['habilidades'])
  }

  Experiencia(){
    this.router.navigate(['experiencia']);
  }

  educacion(){
    this.router.navigate(['educacion']); 
  }

  portafolio(){
    this.router.navigate(['portafolio']);
  }
}
