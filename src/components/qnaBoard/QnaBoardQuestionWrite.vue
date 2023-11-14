<script setup>
import QnaBoardFormItem from "./item/QnaBoardFormItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { action } = route.params;
console.log("머냐", action);
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
        <QnaBoardFormItem :action="action" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>