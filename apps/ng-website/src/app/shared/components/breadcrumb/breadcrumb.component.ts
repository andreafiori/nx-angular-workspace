import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BreadcrumbService } from '../../services/breadcrumb.service';

/**
 * Show a breadcrumb trail as you navigate to different routes in your app.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
@Component({
  selector: 'app-breadcrumb',
  templateUrl: `./breadcrumb.component.html`,
})
export class BreadcrumbComponent implements OnInit, OnChanges, OnDestroy {

  @Input() useBootstrap = true;
  @Input() prefix = '';

  urls: string[];

  private _routerSubscription: any;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.urls = [];

    if (this.prefix.length > 0) {
      this.urls.unshift(this.prefix);
    }

    // TODO fix error
    // this._routerSubscription = this.router.events.subscribe((navigationEnd: NavigationEnd) => {
    //   if (navigationEnd instanceof NavigationEnd) {
    //     this.urls.length = 0; // Fastest way to clear out array
    //     this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
    //   }
    // });
  }

  ngOnChanges(changes: any): void {
    if (!this.urls) {
      return;
    }

    this.urls.length = 0; // Clear URLs array
    this.generateBreadcrumbTrail(this.router.url);
  }

  generateBreadcrumbTrail(url: string): void {
    if (!this.breadcrumbService.isRouteHidden(url)) {
      // Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
      this.urls.unshift(url);
    }

    if (url.lastIndexOf('/') > 0) {
      this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
    } else if (this.prefix.length > 0) {
      this.urls.unshift(this.prefix);
    }
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  friendlyName(url: string): string {
    return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }

  isHomePage() {
    return !(typeof this.urls[1] !== 'undefined' && this.urls[1] !== '/');
  }

}
