import { Injectable } from '@angular/core';

export interface BreadcrumbSet {
  path: string;
  label: string;
}

@Injectable()
export class BreadcrumbService {

  private routesFriendlyNames: Map<string, string> = new Map<string, string>();
  private routesFriendlyNamesRegex: Map<string, string> = new Map<string, string>();
  private routesWithCallback: Map<string, (string: string) => string> = new Map<string, (string: string) => string>();
  private routesWithCallbackRegex: Map<string, (string: string) => string> = new Map<string, (string: string) => string>();
  private hideRoutes: any = new Array<string>();
  private hideRoutesRegex: any = new Array<string>();

  /**
   * Show the friendly name for a given route (url). If no match is found the url (without the leading '/') is shown.
   *
   * @param route
   * @returns {*}
   */
  getFriendlyNameForRoute(route: string): string {
    let name = '';
    const routeEnd = route.substr(route.lastIndexOf('/') + 1, route.length);

    this.routesFriendlyNames.forEach((value, key, map) => {
      if (key === route) {
        name = value;
      }
    });

    this.routesFriendlyNamesRegex.forEach((value, key, map) => {
      if (new RegExp(key).exec(route)) {
        name = value;
      }
    });

    this.routesWithCallback.forEach((value, key, map) => {
      if (key === route) {
        name = value(routeEnd);
      }
    });

    this.routesWithCallbackRegex.forEach((value, key, map) => {
      if (new RegExp(key).exec(route)) {
        name = value(routeEnd);
      }
    });

    return (name) ? name : routeEnd;
  }

  /**
   * Specify a friendly name for the corresponding route.
   */
  addFriendlyNameForRoute(route: string, name: string): void {
    this.routesFriendlyNames.set(route, name);
  }

  /**
   * Specify a friendly name for the corresponding route matching a regular expression.
   */
  addFriendlyNameForRouteRegex(routeRegex: string, name: string): void {
    this.routesFriendlyNamesRegex.set(routeRegex, name);
  }

  /**
   * Specify a callback for the corresponding route.
   * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
   */
  addCallbackForRoute(route: string, callback: (id: string) => string): void {
    this.routesWithCallback.set(route, callback);
  }

  /**
   * Specify a callback for the corresponding route matching a regular expression.
   * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
   */
  addCallbackForRouteRegex(routeRegex: string, callback: (id: string) => string): void {
    this.routesWithCallbackRegex.set(routeRegex, callback);
  }


  /**
   * Specify a route (url) that should not be shown in the breadcrumb.
   */
  hideRoute(route: string): void {
    if (this.hideRoutes.indexOf(route) === -1) {
      this.hideRoutes.push(route);
    }
  }

  /**
   * Specify a route (url) regular expression that should not be shown in the breadcrumb.
   */
  hideRouteRegex(routeRegex: string): void {
    if (this.hideRoutesRegex.indexOf(routeRegex) === -1) {
      this.hideRoutesRegex.push(routeRegex);
    }
  }

  /**
   * Returns true if a route should be hidden.
   */
  isRouteHidden(route: string): boolean {
    let hide = this.hideRoutes.indexOf(route) > -1;

    this.hideRoutesRegex.forEach((value: any) => {
      if (new RegExp(value).exec(route)) {
        hide = true;
      }
    });

    return hide;
  }

  /**
   * Initialize breadcrumb with a set of values and labels
   */
  initialize(breadcrumbMap: Array<BreadcrumbSet>) {
    for (let i = 0; i < breadcrumbMap.length; i++) {
      this.addFriendlyNameForRoute(
        '/' + breadcrumbMap[i].path,
        breadcrumbMap[i].label
      );
    }
    return this;
  }
}
