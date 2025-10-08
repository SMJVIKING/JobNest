import http from "./htppService";

export function getCategoryApi() {
  return http.get("/category/list")
  .then(({ data }) => data.data);
}