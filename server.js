import {Server} from "./deps.js";

class MyServer extends Server {
  api(path) {
    return path;
  }
}

new MyServer(8000);