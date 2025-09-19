import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EspecialidadeModel } from '../../models/especialidade';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  private apiUrl = 'http://localhost:8000/api/especialidade';

  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * Retrieves all tasks from the API
   * @returns An Observable that emits an array of TaskModel objects
   */
  public getEspecialidades(): Observable<EspecialidadeModel[]> {
    return this.http.get<Array<EspecialidadeModel>>(`${this.apiUrl}/`);
  }

  /**
   * Retrieves a task by its ID from the API
   * @param id - The unique identifier of the task to retrieve
   * @returns An Observable that emits the TaskModel object if found
   */
  public getTaskById(id: number): Observable<EspecialidadeModel> {
    return this.http.get<EspecialidadeModel>(`${this.apiUrl}/${id}`);
  }

  /**
   * Updates an existing task partially in the API
   * @param task - The task object containing the updates
   * @returns An Observable that emits the updated TaskModel
   */
  public patchTask(task: EspecialidadeModel): Observable<EspecialidadeModel> {
    return this.http.patch<EspecialidadeModel>(`${this.apiUrl}/${task.id}/`, task);
  }

  /**
   * Deletes a task from the API
   * @param id - The unique identifier of the task to delete
   * @returns An Observable that completes when the task is deleted
   */
  public deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}/`);
  }

  /**
   * Creates a new task in the API
   * @param especialidade - The task object to create
   * @returns An Observable that emits the created TaskModel
   */
  public createEspecialidade(especialidade: EspecialidadeModel): Observable<EspecialidadeModel> {
    return this.http.post<EspecialidadeModel>(`${this.apiUrl}/`, especialidade);
  }
}
