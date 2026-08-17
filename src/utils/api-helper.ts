import { APIRequestContext } from "@playwright/test";
import logger from "./logger";

export class ApiHelper {
  private requestContext: APIRequestContext;

  constructor(requestContext: APIRequestContext) {
    this.requestContext = requestContext;
  }

  async post(endpoint:string,headers?:Record<string,string>,data?:any,form?:Record<string,string>){
    const url=`${process.env.BASE_URL}${endpoint}`
    logger.info(`Request url is ::: ${url}`)
    const response = await this.requestContext.post(url,{
      ... (headers !== undefined && {headers}),
      ... (data !== undefined && {data}),
      ... (form !== undefined && {form}),
    })
    return response 
  }

  /*

  async post(endpoint: string,header?:Record<string,string>, data?: Record<string,string>) {
    logger.info(`${process.env.BASE_URL + endpoint} is Endpoint ++++++++++`);
    const api_token = process.env.API_TOKEN;
    if (!api_token) {
      throw new Error("API_TOKEN is not defined");
    }
    const response = await this.requestContext.post(
      process.env.BASE_URL + endpoint,
      {
        headers: {
          accept: "application/json",
          "x-auth-token": api_token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        form: data,
      },
    );
    return response;
  }
    */

  async get(endpoint: string, data?: any) {
    const response = await this.requestContext.get(
      process.env.BASE_URL + endpoint,
    );
    return response;
  }

  async put(endpoint: string, data?: any) {
    const response = await this.requestContext.put(
      process.env.BASE_URL + endpoint,
      { data },
    );
    return response;
  }

  async patch(endpoint: string, data?: any) {
    const response = await this.requestContext.patch(
      process.env.BASE_URL + endpoint,
      { data },
    );
    return response;
  }

  async delete(endpoint: string, data?: any) {
    const response = await this.requestContext.delete(
      process.env.BASE_URL + endpoint,
      { data },
    );
    return response;
  }
}
