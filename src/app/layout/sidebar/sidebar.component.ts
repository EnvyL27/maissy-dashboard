import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public router: Router,@Inject(DOCUMENT) private document: Document) {}
}
