import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { TeacherMainComponent } from './components/teacher-main/teacher-main.component';

const routes: Routes = [


  {path:'', component:TeacherDashboardComponent, children:[

    {path:'',component:TeacherMainComponent},
    {path:'dashboard', component:TeacherMainComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
