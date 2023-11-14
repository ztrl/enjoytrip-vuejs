<script setup>
defineProps({ qnaBoard: Object });
</script>

<template>
  <tr class="text-center">
    <th scope="row">{{ qnaBoard.articleNo }}</th>
    <td class="text-start">
      <router-link
        :to="{
          name: 'qna-board-view',
          params: { questionArticleNo: qnaBoard.articleNo },
        }"
        class="article-title link-dark"
      >
        {{ qnaBoard.title }}
      </router-link>
    </td>
    <td>{{ qnaBoard.userId }}</td>
    <td>{{ qnaBoard.hit }}</td>
    <td>{{ qnaBoard.registerTime }}</td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
