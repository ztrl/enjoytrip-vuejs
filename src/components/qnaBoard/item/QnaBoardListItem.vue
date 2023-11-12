<script setup>
defineProps({ qnaBoard: Object });
</script>

<template>
  <tr class="text-center">
    <th scope="row">{{ qnaBoard.board.articleNo }}</th>
    <td class="text-start">
      <router-link
        :to="{
          name: 'qna-board-view',
          params: { questionArticleNo: qnaBoard.board.articleNo },
        }"
        class="article-title link-dark"
      >
        {{ qnaBoard.board.title }}
      </router-link>
    </td>
    <td>{{ qnaBoard.board.userName }}</td>
    <td>{{ qnaBoard.board.hit }}</td>
    <td>{{ qnaBoard.board.registerTime }}</td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
