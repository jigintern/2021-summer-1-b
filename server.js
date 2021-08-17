import {Server} from "./deps.js";
import {test} from "./controllers/api.js";

class MyServer extends Server {
  api(path) {
    switch(path) {
      case "/api/test":
        return test(path);
      default:
        return;
    }
  }
}

new MyServer(8000);