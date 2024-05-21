import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentMainComponent } from './components/student-main/student-main.component';

const routes: Routes = [

  {path:'', component:StudentDashboardComponent, children:[
    {path:'',component:StudentMainComponent},
    {path:'dashboard', component:StudentMainComponent},
  ]},
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
