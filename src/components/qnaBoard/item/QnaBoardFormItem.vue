<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { registQuestion, detailQna, modifyQna } from "@/api/qnaBoard";

const router = useRouter();

const props = defineProps({
  questionArticleNo: String,
  answerArticleNo: String,
});

console.log("prop: " + props);

const isUseId = ref(false);

const board = ref({
  articleNo: "",
  title: "",
  content: "",
  userId: "",
});

if (props.questionArticleNo) {
  let questionArticleNo = props.questionArticleNo;
  console.log(questionArticleNo + "번글 얻어와서 수정할거야");
  detailQna(
    questionArticleNo,
    ({ data }) => {
      console.log(data);
      board.value = data.question;
    },
    (error) => {
      console.log(error);
    }
  );
  isUseId.value = true;
}

if (props.answerArticleNo) {
  let answerArticleNo = props.answerArticleNo;
  console.log(answerArticleNo + "번글 얻어와서 수정할거야");
  detailQna(
    answerArticleNo,
    ({ data }) => {
      console.log(data);
      board.value = data.answer;
    },
    (error) => {
      console.log(error);
    }
  );
  isUseId.value = true;
}

const titleErrMsg = ref("");
const contentErrMsg = ref("");
watch(
  () => board.value.title,
  (value) => {
    let len = value.length;
    if (len == 0 || len > 30) {
      titleErrMsg.value = "제목을 확인해 주세요!!!";
    } else titleErrMsg.value = "";
  },
  { immediate: true }
);
watch(
  () => board.value.content,
  (value) => {
    let len = value.length;
    if (len == 0 || len > 500) {
      contentErrMsg.value = "내용을 확인해 주세요!!!";
    } else contentErrMsg.value = "";
  },
  { immediate: true }
);

function onSubmit() {
  // event.preventDefault();

  if (titleErrMsg.value) {
    alert(titleErrMsg.value);
  } else if (contentErrMsg.value) {
    alert(contentErrMsg.value);
  } else {
    props.action === "regist" ? writeArticle() : updateArticle();
  }
}

function writeArticle() {
  console.log("글등록하자!!", board.value);
  registQuestion(
    board.value,
    ({ data }) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}

function updateArticle() {
  console.log(board.value.articleNo + "번글 수정하자!!", board.value);
  modifyQna(
    board.value,
    ({ data }) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}

function moveList() {
  router.push({ name: "qna-board-list" });
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="userid" class="form-label">작성자 ID : </label>
      <input
        type="text"
        class="form-control"
        v-model="board.userId"
        :disabled="isUseId"
        placeholder="작성자ID..."
      />
    </div>
    <div class="mb-3">
      <label for="subject" class="form-label">제목 : </label>
      <input
        type="text"
        class="form-control"
        v-model="board.title"
        placeholder="제목..."
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용 : </label>
      <textarea
        class="form-control"
        v-model="board.content"
        rows="10"
      ></textarea>
    </div>
    <div class="col-auto text-center">
      <button
        type="submit"
        class="btn btn-outline-primary mb-3"
        v-if="action === 'regist'"
      >
        글작성
      </button>
      <button type="submit" class="btn btn-outline-success mb-3" v-else>
        글수정
      </button>
      <button
        type="button"
        class="btn btn-outline-danger mb-3 ms-1"
        @click="moveList"
      >
        목록으로이동...
      </button>
    </div>
  </form>
</template>

<style scoped></style>
