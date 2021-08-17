import {Server} from "./deps.js";
import {
  test,
  getPlaces
} from "./controllers/api.js";

class MyServer extends Server {
  api(path) {
    switch(path) {
      case "/api/test":
        return test(path);
      case "/api/places":
        return getPlaces();
      default:
        return;
    }
  }
}

new MyServer(8000);