import { IApp } from "./src/types/app";
import App from "./src/app";

import controllerUtils from "./src/utils/controller.util";

const controllers = controllerUtils.collectControllers();
const app: IApp = new App(controllers, 8080);

app.listen();
