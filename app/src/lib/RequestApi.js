import Request from "./Request";

class RequestApi {
  static get() {
    return new Request().setMethod("GET").setOptions().send();
  }

  static patch(body) {
    return new Request()
      .setMethod("PATCH")
      .setHeaders()
      .setBody(body)
      .setOptions()
      .send();
  }
}

export default RequestApi;
