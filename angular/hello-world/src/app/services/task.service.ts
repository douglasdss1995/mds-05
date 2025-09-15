import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TaskModel} from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8000/api/tarefas';

  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * Retrieves all tasks from the API
   * @returns An Observable that emits an array of TaskModel objects
   */
  getTasks(): Observable<TaskModel[]> {
    return this.http.get<Array<TaskModel>>(`${this.apiUrl}/`);
  }

  /**
   * Retrieves a task by its ID from the API
   * @param id - The unique identifier of the task to retrieve
   * @returns An Observable that emits the TaskModel object if found
   */
  public getTaskById(id: number): Observable<TaskModel> {
    return this.http.get<TaskModel>(`${this.apiUrl}/${id}`);
  }

  /**
   * Updates an existing task partially in the API
   * @param task - The task object containing the updates
   * @returns An Observable that emits the updated TaskModel
   */
  public patchTask(task: TaskModel): Observable<TaskModel> {
    return this.http.patch<TaskModel>(`${this.apiUrl}/${task.id}/`, task);
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
   * @param task - The task object to create
   * @returns An Observable that emits the created TaskModel
   */
  public createTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(`${this.apiUrl}/`, task);
  }
}
