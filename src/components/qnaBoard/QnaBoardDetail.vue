<script setup>
import { detailQna } from "@/api/qnaBoard";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// const articleno = ref(route.params.articleno);
const { questionArticleNo } = route.params;

const question = ref({});
const answer = ref({});

onMounted(() => {
  getArticle();
});

const getArticle = () => {
  // const { articleno } = route.params;
  console.log(questionArticleNo + "번글 얻으러 가자!!!");
  detailQna(
    questionArticleNo,
    ({ data }) => {
      question.value = data.question;
      answer.value = data.value;
    },
    (error) => {
      console.log(error);
    }
  );
};

function moveList() {
  router.push({ name: "qna-board-list" });
}

function moveModify() {
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
          <mark class="sky">글보기</mark>
        </h2>
      </div>
      <div class="col-lg-10 text-start">
        <div class="row my-2">
          <h2 class="text-secondary px-5">
            {{ question.articleNo }}. {{ question.title }}
          </h2>
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
          <div class="text-secondary">
            {{ question.content }}
          </div>
          <template v-if="answer.value != null">
            <h1>답변</h1>
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
            <div class="text-secondary">
              {{ answer.content }}
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
    </div>
  </div>
</template>

<style scoped></style>
