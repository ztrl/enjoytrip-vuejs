<script setup>
import { detailQna } from "@/api/qnaBoard";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// const articleno = ref(route.params.articleno);
const { questionArticleNo } = route.params;

const question = ref({
  board: {
    title: '',
    content: '',
    userId: '',
    registerTime: '',
    hit: ''
  }
});
const answer = ref({
  board: {
    title: '',
    content: '',
    userId: '',
    registerTime: '',
    hit: ''
  }
});


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
      answer.value = data.answer;
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

function moveModify() {
  console.log(questionArticleNo + "번글 수정하러 가자!!!");
  router.push({ name: "qna-board-modify", params: { questionArticleNo } });
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
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          질문
        </h2>
      </div>

      <div class="col-lg-10 text-start">
        <div class="row my-2">
        <h3>
          {{ question.board.title }}
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
                <span class="fw-bold">{{ question.board.userId }}</span> <br />
                <span class="text-secondary fw-light">
                  {{ question.board.registerTime }} 조회 : {{ question.board.hit }}
                </span>
              </p>
            </div>
          </div>
          <!-- <div class="col-md-4 align-self-center text-end">댓글 : 17</div> -->
          <div class="divider mb-3"></div>
          <div class="m-4">
            {{ question.board.content }}
          </div>
        </div>
      </div>

      <template v-if="answer != null">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          답변
        </h2>
      </div>
      <div class="col-lg-10 text-start">
        <div class="row my-2">
        <h3>
          {{ answer.board.title }}
        </h3>
        </div>
        <div class="col-md-8">
          <div class="clearfix align-content-center">
            <img
              class="avatar me-2 float-md-start bg-light p-2"
              src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
            />
            <p>
              <span class="fw-bold">{{ answer.board.userId }}</span> <br />
              <span class="text-secondary fw-light">
                {{ answer.board.registerTime }}
              </span>
            </p>
          </div>
        </div>
        <!-- <div class="col-md-4 align-self-center text-end">댓글 : 17</div> -->
        <div class="divider mb-3"></div>
        <div class="m-4">
          {{ answer.board.content }}
        </div>
      </div>
      </template>

      <div class="divider mt-3 mb-3"></div>
      <div class="d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-outline-primary mb-3"
          @click="moveList"
        >
          글목록
        </button>
        <button
          type="button"
          class="btn btn-outline-success mb-3 ms-1"
          @click="moveModify"
        >
          글수정
        </button>
        <button
          type="button"
          class="btn btn-outline-danger mb-3 ms-1"
          @click="onDeleteArticle"
        >
          글삭제
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
