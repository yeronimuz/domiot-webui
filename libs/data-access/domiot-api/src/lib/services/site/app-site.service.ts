import { Inject, Injectable } from '@angular/core';
import { SiteService } from '../../generated';
import { APP_CONFIG } from '@domiot/app-config';
import {Configuration} from '../../generated';

@Injectable({
  providedIn: 'root'
})
export class AppSiteService {

  constructor(@Inject(APP_CONFIG) private appConfig: any, private siteService: SiteService) {
    this.siteService.defaultHeaders = this.siteService.defaultHeaders.set('Content-Type', 'application/json');
    siteService.configuration.selectHeaderAccept(['application/json']);
    siteService.configuration.basePath = this.appConfig.domiotApiUrl;
  }

  public getSites() {
    return this.siteService.getSites();
  }
}
