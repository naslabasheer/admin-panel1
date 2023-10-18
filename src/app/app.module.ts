import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidenavComponent } from './component/sidenav/sidenav.component'
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuContent, MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { CalendarComponent } from './component/calendar/calendar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TicketsComponent } from './component/tickets/tickets.component';
import { MatNativeDateModule } from '@angular/material/core';
// import { FullCalendarModule } from '@fullcalendar/angular';
import {MatSelectModule} from '@angular/material/select';
import { EventEmitter } from 'stream';
import { FolderComponent } from './component/folder/folder.component';
import { ExtrapagesComponent } from './component/extrapages/extrapages.component';
import { KanbanComponent } from './component/kanban/kanban.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ThemeService } from './theme.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    CalendarComponent,
    TicketsComponent,
    FolderComponent,
    ExtrapagesComponent,
    KanbanComponent,
    UserLoginComponent,
    SignupComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    DragDropModule,
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
