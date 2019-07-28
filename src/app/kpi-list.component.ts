import { Component, OnInit } from '@angular/core';
import { KPIService } from './services/kpi.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialog } from './delete-confirmation.component';
import { Router } from '@angular/router';
import { AlertifyService } from './services/alertify.service';

@Component({
    selector: 'kpi-list',
    template: `
    
<div class="container-fluid">
  <div class="new-action">
    <button type="button" class="btn btn-primary btn-lg" (click)="navigateNew()">Create New KPI</button>
  </div>
  <table class="table table-striped table-bordered grid">
    <thead class="thead-light">
        <th>KPI Name</th>
        <th width="200"></th>
    </thead>
    <tbody>
        <tr *ngFor="let kpi of kpis">
            <td>{{kpi.name}}</td>
            <td class="text-right">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-location-arrow action-menu"></i>Action
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg-right">
                        <a class="dropdown-item normal-menu" [routerLink]="['/kpi-chart', kpi.kpiId]">
                            <i class="fa fa-chart-line"></i> View Chart
                        </a>
                        <a class="dropdown-item normal-menu" [routerLink]="['/kpi-edit', kpi.kpiId]">
                            <i class="fa fa-edit"></i> Edit
                        </a>
                        <a class="dropdown-item danger-menu" (click)="delete(kpi.kpiId)">
                            <i class="far fa-trash-alt"></i> Delete
                        </a>
                    </div>
                </div>            
            </td>            
        </tr>
    </tbody>
  </table>
</div>

  `
})

export class KPIListComponent implements OnInit {

    kpis = [];

    constructor(
        private kpiService: KPIService,
        private dialog: MatDialog,
        private router: Router,
        private alertify: AlertifyService) { }

    ngOnInit(): void {
        this.kpiService.get().subscribe((x: any) => {
            this.kpis = x;
        })
    }

    delete(kpiId) {
        this.dialog.open(DeleteConfirmationDialog, {
            width: '500px',
        }).afterClosed().subscribe(result => {
            if (result === true) {
                this.kpiService.delete(kpiId).subscribe(x => {
                    this.alertify.success('KPI deleted successfully');
                    this.removeItem(kpiId);
                }, error => {
                    this.alertify.error('Error deleting KPI, please contact support');
                })
            }
        })
    }

    removeItem(id) {
        this.kpis = this.kpis.filter(x => x.kpiId !== id);
    }

    navigateNew() {
        this.router.navigate(['/kpi-edit']);
    }
}
