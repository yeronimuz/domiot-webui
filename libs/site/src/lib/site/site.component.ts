import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppSiteService } from '../../../../data-access/domiot-api/src/lib/services/site/app-site.service';
import { ISite } from '../../../../data-access/domiot-api/src/lib/model/site.model';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'domiot-site',
  standalone: true,
  imports: [CommonModule, MatIcon, MatProgressBar, MatTable, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatIconButton, MatCell, MatCellDef, MatRow, MatButton, MatRowDef],
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss'
})
export class SiteComponent implements OnInit {
  site: ISite = {};
  isLoading = false;
  dataSource = Object.entries(this.site).map(o => <any>{ name: o[0], value: o[1] });
  errorMessage = '';
  displayedColumns: string[] = ["name", "value"];

  constructor(
    private location: Location,
    private router: Router,
    private appSiteService: AppSiteService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.site = this.appSiteService.getSites()
      .pipe()
      .subscribe(
        {
          next: sites => {
            this.site = sites[0];
            this.dataSource = Object.entries(this.site).map(o => <any>{ name: o[0], value: o[1] });
            this.isLoading = false;
          },

          error: err => {
            this.errorMessage = err;
            console.error(err);
            this.isLoading = false;
          }
        });
  }

  back() {
    this.location.back();
  }
}
