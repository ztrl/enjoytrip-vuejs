import { localAxios } from "@/util/http-commons";

const local = localAxios();

function listQna(param, success, fail) {
  local.get(`/qnaboard`, { params: param }).then(success).catch(fail);
}

function detailQna(questionArticleno, success, fail) {
  local.get(`/qnaboard/${questionArticleno}`).then(success).catch(fail);
}

function registQuestion(question, success, fail) {
  console.log("question: ", question);
  local
    .post(`/qnaboard/write/question`, JSON.stringify(question))
    .then(success)
    .catch(fail);
}

function registAnswer(answer, success, fail) {
  console.log("question: ", answer);
  local
    .post(`/qnaboard/write/answer`, JSON.stringify(answer))
    .then(success)
    .catch(fail);
}

function modifyQna(article, success, fail) {
  local
    .put(`/qnaboard/modify`, JSON.stringify(article))
    .then(success)
    .catch(fail);
}

function deleteQna(param, success, fail) {
  local.delete(`/qnaboard/delete`, { params: param }).then(success).catch(fail);
}

export {
  listQna,
  detailQna,
  registQuestion,
  registAnswer,
  modifyQna,
  deleteQna,
};
