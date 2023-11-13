import { createRouter, createWebHistory } from "vue-router";
import TheMainView from "../views/TheMainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      redirect: { name: "qnaBoard" },
      component: TheMainView,
    },
    {
      path: "/attaction",
      name: "attraction",
      component: () => import("@/views/TheAttractionView.vue"),
      redirect: { name: "attraction-list" },
      children: [
        {
          path: "list",
          name: "attraction-list",
          component: () => import("@/components/attraction"),
        },
      ],
    },
    {
      path: "/board",
      name: "board",
      component: () => import("../views/TheBoardView.vue"),
      redirect: { name: "article-list" },
      children: [
        {
          path: "list",
          name: "article-list",
          component: () => import("@/components/board/BoardList.vue"),
        },
        {
          path: "view/:articleno",
          name: "article-view",
          component: () => import("@/components/board/BoardDetail.vue"),
        },
        {
          path: "write",
          name: "article-write",
          component: () => import("@/components/board/BoardWrite.vue"),
        },
        {
          path: "modify/:articleno",
          name: "article-modify",
          component: () => import("@/components/board/BoardModify.vue"),
        },
      ],
    },
    {
      path: "/qnaBoard",
      name: "qnaBoard",
      component: () => import("../views/TheQnaBoardView.vue"),
      redirect: { name: "qna-board-list" },
      children: [
        {
          path: "list",
          name: "qna-board-list",
          component: () => import("@/components/qnaBoard/QnaBoardList.vue"),
        },
        {
          path: "view/:questionArticleNo",
          name: "qna-board-view",
          component: () => import("@/components/qnaBoard/QnaBoardDetail.vue"),
        },
        {
          path: "write/question",
          name: "qna-board-write-question",
          component: () => import("@/components/qnaBoard/QnaBoardQuestionWrite.vue"),
        },
        {
          path: "write/answer",
          name: "qna-board-write-answer",
          component: () => import("@/components/qnaBoard/QnaBoardAnswerWrite.vue"),
        },
        {
          path: "modify",
          name: "qna-board-modify",
          component: () => import("@/components/board/BoardModify.vue"),
        },
      ],
    },
  ],
});

export default router;
