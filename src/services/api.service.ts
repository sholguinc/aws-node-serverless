import axios, { type AxiosResponse } from 'axios';
import { type Response } from 'express';

export class ApiService {
  private readonly apiUrl: string;

  private readonly headers: object = {
    'Content-Type': 'application/json',
  };

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async get<Type>(endpoint: string, params?: object): Promise<Response<Type>> {
    const route: string = this.apiUrl + endpoint;

    console.log(`Getting from ${endpoint}`);

    const response: AxiosResponse = await axios.get(route, {
      params,
      headers: this.headers,
    });

    return response.data as Response<Type>;
  }

  async post<Type>(endpoint: string, body: object): Promise<Response<Type>> {
    const route: string = this.apiUrl + endpoint;

    console.log(`Posting in ${endpoint}`);

    const response: AxiosResponse = await axios.post(route, body, {
      headers: this.headers,
    });

    return response.data as Response<Type>;
  }
}
