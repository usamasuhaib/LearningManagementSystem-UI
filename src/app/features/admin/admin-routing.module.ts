import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { TeacherFormComponent } from './management/teacher-management/teacher-form/teacher-form.component';
import { TeacherListComponent } from './management/teacher-management/teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './management/teacher-management/teacher-details/teacher-details.component';
import { StdFormComponent } from './management/student-management/std-form/std-form.component';
import { StudentsListComponent } from './management/student-management/students-list/students-list.component';
import { StudentDetailsComponent } from './management/student-management/student-details/student-details.component';

const routes: Routes = [


  {path:'', component:AdminDashboardComponent, children:[
    {path:'',component:AdminMainComponent},
    {path:'dashboard', component:AdminMainComponent},

    {path:'add-teacher',component:TeacherFormComponent},
    {path:'teachers-list',component:TeacherListComponent},
    {path:'teacher-details/:id',component:TeacherDetailsComponent},

    {path:'add-std',component:StdFormComponent},
    {path:'std-list',component:StudentsListComponent},
    {path:'std-details/:id',component:StudentDetailsComponent},

    // {path:'delete-std/:id',component:StdFormComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
