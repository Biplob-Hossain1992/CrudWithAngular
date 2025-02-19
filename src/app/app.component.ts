import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeDataComponent } from "./employee-data/employee-data.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent, FooterComponent, EmployeeDataComponent, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee_CRUD_Angular';
  isSidebarCollapsed: any;
}
