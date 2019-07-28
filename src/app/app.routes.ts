import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './_guards/auth.guard';
import { AppComponent } from './app.component';
import { KPIListComponent } from './kpi-list.component';
import { KPIEditComponent } from './kpi-edit.component';
import { KPIChartComponent } from './kpi-chart.component';

const appRoutes: Routes = [
    {
        path: '',
        component: KPIListComponent
    },
    {
        path: 'kpi-edit',
        component: KPIEditComponent
    },
    {
        path: 'kpi-edit/:id',
        component: KPIEditComponent,
    },
    {
        path: 'kpi-chart/:id',
        component: KPIChartComponent,
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
