import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoaiApiService {
  private baseUrl = 'http://localhost:3000/api'; // Adjust the backend URL

  constructor(private http: HttpClient) {
  }

  // Get venue configuration
  getVenueConfig(): Observable<any> {
    return this.http.get(`${this.baseUrl}/venue`);
  }

  // Start simulation
  startSimulation(): Observable<any> {
    return this.http.post(`${this.baseUrl}/simulation/start`, {});
  }

  // Pause simulation
  pauseSimulation(): Observable<any> {
    return this.http.post(`${this.baseUrl}/simulation/pause`, {});
  }

  // Resume simulation
  resumeSimulation(): Observable<any> {
    return this.http.post(`${this.baseUrl}/simulation/resume`, {});
  }

  // Add simulated event
  addEvent(eventData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/events`, eventData);
  }

  // Get task log (stream of consciousness)
  getTaskLog(): Observable<any> {
    return this.http.get(`${this.baseUrl}/logs`);
  }

  // Save scenario
  saveScenario(scenarioData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/scenario/save`, scenarioData);
  }

  // Load scenario
  loadScenario(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/scenario/${id}`);
  }
}
