import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { TicketsComponent } from './component/tickets/tickets.component';
import { FolderComponent } from './component/folder/folder.component';
import { ExtrapagesComponent } from './component/extrapages/extrapages.component';
import { KanbanComponent } from './component/kanban/kanban.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
 
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'tickets',component:TicketsComponent},
  {path:'folder',component:FolderComponent},
  {path:'extrapages',component:ExtrapagesComponent},
  {path:'kanban',component:KanbanComponent},
  {path:'user-login/signup',component:UserLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
