import faker from "faker";

import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  HttpClient,
} from "../../../services/protocols/http-client";

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(["GET", "POST", "PUT", "DELETE"]),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement(),
});

export class HttpClientSpy implements HttpClient {
  url?: string;
  method?: string;
  body?: any;
  headers?: any;
  response: HttpResponse = {
    statusCode: HttpStatusCode.OK,
  };

  async request(request: HttpRequest): Promise<HttpResponse> {
    this.url = request.url;
    this.method = request.method;
    this.body = request.body;
    this.headers = request.headers;
    return this.response;
  }
}
