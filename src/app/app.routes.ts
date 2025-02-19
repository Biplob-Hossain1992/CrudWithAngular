import { Routes } from '@angular/router';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    
    { 
      path: '', 
      component: NavbarComponent 
    },
    { 
      path: '', 
      component: SidebarComponent 
    },
    { 
      path: '', 
      component: FooterComponent 
    },
    { 
      path: 'employee', 
      component: EmployeeDataComponent 
    },
  ];