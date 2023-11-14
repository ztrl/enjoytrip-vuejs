<script setup>
import QnaBoardFormItem from "./item/QnaBoardFormItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { questionArticleNo } = route.params;
console.log("게시글 번호 있?", questionArticleNo);
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글쓰기</mark>
        </h2>
      </div>
      <div class="col-lg-10 text-start">
        <QnaBoardFormItem :questionArticleNo="questionArticleNo" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
