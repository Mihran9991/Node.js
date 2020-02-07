import fs from "fs";
import path from "path";

class ControllerUtil {
  public static collectControllers(): Array<any> {
    const directoryPath: string = path.join(__dirname, "../", "controllers");
    const controllers: Array<any> = fs
      .readdirSync(directoryPath)
      .map(controllerFileName => {
        const controllerPath = path.join(
          __dirname,
          "../",
          "controllers/" + controllerFileName
        );
        return require(controllerPath).default;
      });

    return controllers;
  }
}

export default ControllerUtil;
