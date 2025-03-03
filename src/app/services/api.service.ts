import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://localhost:44386';

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'Content-Type': 'application/json'  // Ensure the content type is JSON
  });

  // Example: Get all Employees
  GetAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/Employee/GetEmployeesForAngular`);
  }

  // Example: Get a post by ID
  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  // Example: Create a new employee
  CreateEmployee(postData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Employee/CreateEmployee`, postData,{ headers: this.headers });
  }

  // Example: Update a employee
  UpdateEmployee(postData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Employee/UpdateEmployee`, postData,{ headers: this.headers });
  }

  // Example: Delete a employee
  DeleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/Employee/RemoveEmployee/${id}`);
  }
  // Example: Get all Department
  GetAllDepartment(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/Department/GetAllDepartment`);
  }
}
