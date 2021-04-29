class Request {
  constructor() {
    this.url = "/api/app/photo/1";
    this.method = null;
    this.headers = null;
    this.body = null;
    this.options = {};
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  setHeaders() {
    this.headers = {
      "Content-Type": "application/json;charset=utf-8",
    };
    return this;
  }

  setBody(body) {
    this.body = JSON.stringify(body);
    return this;
  }

  setOptions() {
    this.options.method = this.method;

    if (this.headers) {
      this.options.headers = this.headers;
    }

    if (this.body) {
      this.options.body = this.body;
    }
    return this;
  }

  send() {
    return fetch(this.url, this.options).then((response) => response.json());
  }
}

export default Request;
