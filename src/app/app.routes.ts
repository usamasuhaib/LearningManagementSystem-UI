import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserLoginComponent } from './core/Authentication/user-login/user-login.component';
import { AdminRegisterComponent } from './core/Authentication/admin-register/admin-register.component';
import { adminGuard } from './core/guards/admin.guard';
import { teacherGuard } from './core/guards/teacher.guard';
import { studentGuard } from './core/guards/student.guard';
import { parentGuard } from './core/guards/parent.guard';
import { accountantGuard } from './core/guards/accountant.guard';

export const routes: Routes = [

    {path:'',component:LandingPageComponent},


    //admin module route
    {path:'admin',
    loadChildren:()=>import('./features/admin/admin.module').then(m=>m.AdminModule),
    canActivate: [adminGuard], // Apply AuthGuard for admin routes
},

    {path:'admin/register',component:AdminRegisterComponent},


    //teacher module route
    {path:'teacher',
    loadChildren:()=>import('./features/teacher/teacher.module').then(m=>m.TeacherModule),
    canActivate: [teacherGuard], // Apply AuthGuard for admin routes

},


    //studnet module route
    {path:'student',
    loadChildren:()=>import('./features/student/student.module').then(m=>m.StudentModule),
    canActivate: [studentGuard], // Apply AuthGuard for admin routes

},


    //parent module route
    {path:'parnet',
    loadChildren:()=>import('./features/parent/parent.module').then(m=>m.ParentModule),
    canActivate: [parentGuard], // Apply AuthGuard for admin routes

},



     //accountant module route
     {path:'accountant',
     loadChildren:()=>import('./features/accountant/accountant.module').then(m=>m.AccountantModule),
     canActivate: [accountantGuard], // Apply AuthGuard for admin routes
    },


    {path:'login',component:UserLoginComponent},

   
    {path:'**',component:NotFoundComponent},

];
