<script setup>
import QnaBoardFormItem from "./item/QnaBoardFormItem.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { detailQna } from "@/api/qnaBoard";

const route = useRoute();
const { answerArticleNo } = route.params;

const answer = ref({});
const question = ref({});

onMounted(() => {
  getArticle();
});

const getArticle = () => {
  // const { articleno } = route.params;
  // answerArticleNo를 통해 questionArticleNo 얻기 or
  // questionArticleNo를 넘기기
  console.log(answerArticleNo + "번글 얻으러 가자!!!");
  detailQna(
    answerArticleNo,
    ({ data }) => {
      console.log(data);
      question.value = data.question;
    },
    (error) => {
      console.log(error);
    }
  );
};
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

      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글쓰기</mark>
        </h2>
      </div>
      <div class="col-lg-10 text-start">
        <QnaBoardFormItem
          :questionArticleNo="questionArticleNo"
          :answerArticleNo="answerArticleNo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
