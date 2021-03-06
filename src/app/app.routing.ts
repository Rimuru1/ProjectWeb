import { RouterModule, Routes } from '@angular/router';
import { AppUrl} from './app.url';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthUrl } from './authentication/authentication.url';
import { DashboardComponent } from './dashboard/dashboard.component';

const RouteList: Routes = [
    {
        path: '', redirectTo: AppUrl.Authen , pathMatch: 'full'
    },
    {
        path: AppUrl.Login, component: LoginComponent
    },
    {
        path: AppUrl.Register, component: RegisterComponent
    },
    {
        path: AppUrl.Dashboards, component: DashboardComponent
    },
    {
        path: AppUrl.Authen, loadChildren:'./authentication/authentication.module#AuthenticationModule'
    }
]

export const AppRouting = RouterModule.forRoot(RouteList);