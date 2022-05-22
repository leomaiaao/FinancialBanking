import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekReportComponent } from './component/week-report/week-report.component';
import { MonthReportComponent } from './component/month-report/month-report.component';
import { DayReportComponent } from './component/day-report/day-report.component';
import { PriotitiesComponent } from './component/priotities/priotities.component';
import { SavingsComponent } from './component/savings/savings.component';
import { LateralBarComponent } from './component/lateral-bar/lateral-bar.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    WeekReportComponent,
    MonthReportComponent,
    DayReportComponent,
    PriotitiesComponent,
    SavingsComponent,
    LateralBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrivateModule { }
