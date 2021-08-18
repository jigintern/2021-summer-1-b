import {Server} from "./deps.js";
import {
  test,
  getPlaces,
  getPlace
} from "./controllers/api.js";

class MyServer extends Server {
  api(path, req) {
    console.log(`1. path: ${path}`);
    console.log(`2. req: ${req}`);
    switch(path) {
      case "/api/test":
        return test(path);
      // no queries
      case "/api/places":
        return getPlaces();
      // with queries
      case "/api/places/": 
        return getPlace(path, req);
      default: return;
    }
  }
}

new MyServer(8000);