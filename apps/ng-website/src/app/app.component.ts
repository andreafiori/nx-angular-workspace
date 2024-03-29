import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbService, BreadcrumbSet } from './shared/services/breadcrumb.service';
import { breadcrumbMap } from './shared/components/breadcrumb/breadcrumb.model';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'nxprojects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  currentYear: number;

  breadcrumbMap: Array<BreadcrumbSet> = breadcrumbMap;

  constructor(private breadcrumbService: BreadcrumbService) {
    setTheme('bs4'); // Set bootstrap version
  }

  ngOnInit() {
    this.currentYear = (new Date()).getFullYear();

    this.breadcrumbService.initialize(this.breadcrumbMap);

    this.breadcrumbService.hideRoute('/');
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['state'];
  }

}
