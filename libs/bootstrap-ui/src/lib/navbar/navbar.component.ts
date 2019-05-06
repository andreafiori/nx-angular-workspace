import { Component, OnInit, Input } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import { NavbarProps } from '../models/navbar.model';

@Component({
  selector: 'app-bootstrap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUrl: string;

  /**
   * Async multiple objects
   */
  routeData: any;

  isCollapsed = true;

  @Input() props: NavbarProps;

  constructor(private router: Router) { }

  ngOnInit() {
    // Current URL \ route data
    this.routeData = this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.currentUrl = data.state.url;
      }
    });
  }

}
