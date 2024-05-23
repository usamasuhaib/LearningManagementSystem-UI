import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { TeacherMainComponent } from './components/teacher-main/teacher-main.component';
import { AssignedSubjectsListComponent } from './management/assigned-subjects-list/assigned-subjects-list.component';
import { AssignedClassDetailsComponent } from './management/assigned-class-details/assigned-class-details.component';

const routes: Routes = [


  {path:'', component:TeacherDashboardComponent, children:[
    {path:'',component:TeacherMainComponent},
    {path:'dashboard', component:TeacherMainComponent},
    {path:'subjects-list', component:AssignedSubjectsListComponent},

    {path:'subject-details', component:AssignedClassDetailsComponent},






    // {path:'delete-std/:id',component:StdFormComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
