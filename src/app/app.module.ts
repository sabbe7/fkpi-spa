import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './app.routes';
import { LoginComponent } from './login.component';
import { KPIEditComponent } from './kpi-edit.component';
import { DxTreeViewModule } from 'devextreme-angular';
import { Shared } from './shared';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KPIListComponent } from './kpi-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmationDialog } from './delete-confirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KPIChartComponent } from './kpi-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ContextMenuModule } from 'ngx-contextmenu';
import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    KPIEditComponent,
    KPIListComponent,
    KPIChartComponent,
    DeleteConfirmationDialog
  ],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
      }
    }),
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    DxTreeViewModule,
    DragDropModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    ContextMenuModule.forRoot()
  ],
  entryComponents: [
    DeleteConfirmationDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    Shared.injector = injector;
  }
}
