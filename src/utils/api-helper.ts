import {APIRequestContext } from '@playwright/test';

export class ApiHelper {
  private requestContext: APIRequestContext;

  constructor(requestContext: APIRequestContext) {
    this.requestContext = requestContext;
  }

  async post(endpoint: string, data?: any) {
    const response = await this.requestContext.post(endpoint, { data });
    return response;
  }

  async get(endpoint: string,data?:any) {
    const response = await this.requestContext.get(endpoint);
    return response;
  }

  async put(endpoint: string, data?: any) {
    const response = await this.requestContext.put(endpoint, { data });
    return response;
  }

  async patch(endpoint: string, data?: any){
    const response = await this.requestContext.patch(endpoint, { data });
    return response;
  }

  async delete(endpoint: string, data?: any) {
    const response = await this.requestContext.delete(endpoint, { data });
    return response;
  }
}