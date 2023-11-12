import { localAxios } from "@/util/http-commons";

const local = localAxios();

function gugun(sidoCode, success, fail) {
  local.get(`/attraction/gugun/${sidoCode}`).then(success).catch(fail);
}

function sido(success, fail) {
  local.get(`/attraction/sido`).then(success).catch(fail);
}

function listAttraction(params, success, fail) {
  local.post(`/attraction/list`, params).then(success).catch(fail);
  // local.post(`/attraction/list`, JSON.stringify(article)).then(success).catch(fail);
}

function sortAttraction(params, success, fail) {
  local.get(`/attraction/sort`, params).then(success).catch(fail);
}

export { gugun, sido, listAttraction, sortAttraction };
