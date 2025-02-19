import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-data',
  standalone: true,
  imports: [FormsModule, NgSelectModule, NgbDatepickerModule, ReactiveFormsModule],
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.css'
})
export class EmployeeDataComponent implements OnInit{
  @ViewChild('empModal') empModal: ElementRef | undefined;
  employeeList: any[] = [];
  departmentList: any[] = [];
  // displayMonths = 2;
	// navigation = 'select';
	// showWeekNumbers = false;
	// outsideDays = 'visible';

  constructor(private apiService: ApiService){}
  
  employeeObj: any = {
    "id": 0,
    "name": "",
    "email": "",
    "phone": "",
    "position": "",
    "formatedDate": "",
    "departmentId": 1,
    "status" : true
  }

  httpClient = inject(HttpClient);
  headers = new HttpHeaders({
    'Content-Type': 'application/json'  // Ensure the content type is JSON
  });

ngOnInit(): void {
  this.getAllEmployees();
}

  openModal(){
      if(this.empModal){
        this.getAllDepartment();
        this.empModal.nativeElement.style.display = 'block';
      }
  }
  closeModal(){
    if(this.empModal){
      this.empModal.nativeElement.style.display = 'none';
    }
  }

  getAllEmployees(){
    // this.httpClient.get('https://localhost:44326/api/Employee/GetEmployeesForAngular').subscribe((res:any) =>{
    //   this.employeeList = res;
    // })
    this.apiService.GetAllEmployees().subscribe((data) => {
      this.employeeList = data;
    });
  }

  onSave(){
    let date = this.employeeObj.formatedDate;
    this.employeeObj.formatedDate = (date.year + '-' + date.month + '-' + date.day).toString();
    // this.httpClient.post('https://localhost:44326/api/Employee/CreateEmployee', JSON.stringify(this.employeeObj),{ headers: this.headers }).subscribe((res:any) =>{
    //   this.closeModal();
    //   this.getAllEmployees();
    // });

    this.apiService.CreateEmployee(JSON.stringify(this.employeeObj)).subscribe((data) =>{
      this.closeModal();
      this.getAllEmployees();
    });
  }

  editEmployee(data:any){
    this.openModal();
    let calendar = data.formatedDate.split('-');
    data.formatedDate = {
      "year": +calendar[0],
      "month": +calendar[1],
      "day": +calendar[2]
    } 
    this.employeeObj = data;
  }
  onUpdate(){
    let date = this.employeeObj.formatedDate;
    this.employeeObj.formatedDate = (date.year + '-' + date.month + '-' + date.day).toString();
    //  this.httpClient.post('https://localhost:44326/api/Employee/UpdateEmployee', JSON.stringify(this.employeeObj),{headers: this.headers }).subscribe((res:any) =>{
    //   this.closeModal(); 
    //   this.getAllEmployees();
    //  })
     this.apiService.UpdateEmployee(JSON.stringify(this.employeeObj)).subscribe((data) =>{
      this.closeModal();
      this.getAllEmployees();
    });
  }

  deleteEmployee(data:any){
    const isDelete = confirm("Are you sure want to delete this record.?");
    if(isDelete){
      // this.httpClient.delete('https://localhost:44326/api/Employee/RemoveEmployee/'+ data.id).subscribe((res:any) =>{
      //   this.getAllEmployees();
      // })
      this.apiService.DeleteEmployee(data.id).subscribe((data) =>{
        this.getAllEmployees();
      });      
    }
  }

  getAllDepartment(){
    // this.httpClient.get('https://localhost:44326/api/Department/GetAllDepartment').subscribe((res:any) =>{
    //   this.departmentList = res;
    // })
    this.apiService.GetAllDepartment().subscribe((data) =>{
      this.departmentList = data;
    });
  }
}
