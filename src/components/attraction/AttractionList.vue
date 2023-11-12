<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { gugun, sido, listAttraction, sortAttraction  } from "@/api/attraction.js";

const sidoList = ref([]);
const gugunList = ref([]);
const attractionList = ref([]);
const sortedAttractionList = ref([]);

onMounted(() => {
  getSido();
});

const getSido = () => {
  sido(
    ({ data }) => {
      sidoList.value = data;
    },
    error => {
      console.log(error);
    }
  );
}

const getGugun = (sidoCode) => {
  gugun(sidoCode,
    ({ data }) => {
      gugunList.value = data;
    }
    ,
    error => {
      console.log(error);
    });
}

const getAttraction = (sidoCode, gugunCode, contentTypeId, pageNo) => {
  listAttraction(
    {
      sidoCode,
      gugunCode,
      contentTypeId,
      pageNo
    },
    ({ data }) => {
      attractionList.value = data;
    },
    error => {
      console.log(error);
    });
}

const getSortAttraction = (sidoCode, gugunCode, contentTypeId, pageNo, latitude, longitude, distance) => {
  sortAttraction(
    {
      sidoCode,
      gugunCode,
      contentTypeId,
      pageNo,
      latitude,
      longitude,
      distance
    },
    ({ data }) => {
      sortedAttractionList.value = data;
    },
    error => {
      console.log(error);
    }
  )
}

</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>