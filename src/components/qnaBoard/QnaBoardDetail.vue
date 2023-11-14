<script setup>
import { detailQna } from "@/api/qnaBoard";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// const articleno = ref(route.params.articleno);
const { questionArticleNo } = route.params;

const question = ref({});
const answers = ref([]);

onMounted(() => {
  getArticle();
});

const getArticle = () => {
  // const { articleno } = route.params;
  console.log(questionArticleNo + "번글 얻으러 가자!!!");
  detailQna(
    questionArticleNo,
    ({ data }) => {
      console.log(data);
      question.value = data.question;
      answers.value = data.answer;
    },
    (error) => {
      console.log(error);
    }
  );
};

function moveList() {
  console.log("목록으로 가자!!!");
  router.push({ name: "qna-board-list" });
}

const moveWriteAnswer = () => {
  router.push({
    name: "qna-board-write-answer",
    params: { questionArticleNo },
  });
};

function moveModifyQuestion() {
  console.log(questionArticleNo + "번 질문글 수정하러 가자!!!");
  router.push({
    name: "qna-board-modify-question",
    params: { questionArticleNo },
  });
}

function moveModifyAnswer(answerArticleNo) {
  console.log(answerArticleNo + "번 답글 수정하러 가자!!!");
  router.push({
    name: "qna-board-modify-answer",
    params: { answerArticleNo },
  });
}

function onDeleteArticle() {
  // const { articleno } = route.params;
  console.log(questionArticleNo + "번글 삭제하러 가자!!!");
  router.push({ name: "qna-board-delete", params: { questionArticleNo } });
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">질문</h2>
      </div>

      <div class="col-lg-10 text-start">
        <div class="row my-2">
          <h3>
            {{ question.title }}
          </h3>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="clearfix align-content-center">
              <img
                class="avatar me-2 float-md-start bg-light p-2"
                src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
              />
              <p>
                <span class="fw-bold">{{ question.userId }}</span> <br />
                <span class="text-secondary fw-light">
                  {{ question.registerTime }} 조회 : {{ question.hit }}
                </span>
              </p>
            </div>
          </div>
          <!-- <div class="col-md-4 align-self-center text-end">댓글 : 17</div> -->
          <div class="divider mb-3"></div>
          <div class="m-4">
            {{ question.content }}
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-outline-success mb-3 ms-1"
          @click="moveModifyQuestion"
        >
          질문 수정
        </button>
        <button
          type="button"
          class="btn btn-outline-danger mb-3 ms-1"
          @click="onDeleteArticle"
        >
          질문 삭제
        </button>
      </div>

      <template v-if="answers != null">
        <div class="col-lg-10">
          <h2 class="my-3 py-3 shadow-sm bg-light text-center">답변</h2>
        </div>
        <template v-for="answer in answers" :key="answer.articleNo">
          <div class="col-lg-10 text-start">
            <div class="row my-2">
              <h3>
                {{ answer.title }}
              </h3>
            </div>
            <div class="col-md-8">
              <div class="clearfix align-content-center">
                <img
                  class="avatar me-2 float-md-start bg-light p-2"
                  src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
                />
                <p>
                  <span class="fw-bold">{{ answer.userId }}</span> <br />
                  <span class="text-secondary fw-light">
                    {{ answer.registerTime }}
                  </span>
                </p>
              </div>
            </div>
            <!-- <div class="col-md-4 align-self-center text-end">댓글 : 17</div> -->
            <div class="divider mb-3"></div>
            <div class="m-4">
              {{ answer.content }}
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-outline-success mb-3 ms-1"
              @click="moveModifyAnswer(answer.articleNo)"
              :action="modify"
            >
              답변 수정
            </button>
            <button
              type="button"
              class="btn btn-outline-danger mb-3 ms-1"
              @click="onDeleteArticle"
            >
              답변 삭제
            </button>
          </div>
        </template>
      </template>

      <div class="divider mt-3 mb-3"></div>
      <div class="d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-outline-primary mb-3"
          @click="moveWriteAnswer"
        >
          답변 작성
        </button>
        <button
          type="button"
          class="btn btn-outline-primary mb-3"
          @click="moveList"
        >
          글목록
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
