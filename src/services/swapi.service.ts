import { ApiService } from './api.service';
import { type IPerson, type IPeopleSchema, type IPeople } from '../types';

export class SwapiService {
  private readonly apiUrl = 'https://swapi.py4e.com/api';
  private readonly apiService: ApiService;

  constructor() {
    this.apiService = new ApiService(this.apiUrl);
  }

  // people
  async getPeople() {
    return await this.apiService.get<IPeople>('/people');
  }

  async getPerson(id: number) {
    return await this.apiService.get<IPerson>(`/people/${id}`);
  }

  async getPeopleSchema() {
    return await this.apiService.get<IPeopleSchema>('/people/schema');
  }
}
