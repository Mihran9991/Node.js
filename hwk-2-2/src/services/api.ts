import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/"
});

const apiMethods: Array<string> = ["get", "delete", "post", "put", "patch"];

const handler = {
  get(target: Object, targetKey: string) {
    //console.log(targetKey);
    return Object.assign(
      {},
      apiMethods.reduce((obj, method) => {
        console.log(method);
        return Object.assign({}, obj, {
          [method](url = "", body = {}, params = {}) {
            if (method === "get" || method === "delete") {
              return instance.request({
                url,
                method,
                params,
                headers: {}
              });
            }

            return instance.create({
              url,
              method,
              data: JSON.stringify(body),
              headers: {}
            });
          }
        });
      }, {})
    );
  }
};

const api = new Proxy({}, handler);

export default api;
