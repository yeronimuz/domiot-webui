import { TestBed } from '@angular/core/testing';

import { AppSiteService } from './app-site.service';

describe('SiteService', () => {
  let service: AppSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
