<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const { VITE_ELECTRIC_CHARGING_STATION_URL, VITE_OPEN_API_SERVICE_KEY } = import.meta.env;

const estations = ref([]);

onMounted(() => {
  getEstations();
});

const getEstations = () => {
  axios.get(VITE_ELECTRIC_CHARGING_STATION_URL, {
    params: {
      serviceKey: VITE_OPEN_API_SERVICE_KEY,
      pageNo: 1,
      numOfRows: 20,
      zcode: 11
    },
  })
    .then(response => {
      console.log(response.data.items[0].item);
      estations.value = response.data.items[0].item;
    })
    .catch(error => {
      console.log(error);
    });
}

</script>

<template>
  <div class="container text-center mt-3">
    <div class="alert alert-success" role="alert">전기차 충전소</div>
    <table class="table table-hover">
      <thead>
        <tr class="text-center">
          <th scope="col">충전소명</th>
          <th scope="col">충전소ID</th>
          <th scope="col">충전기상태</th>
          <th scope="col">위치</th>
          <th scope="col">위도</th>
          <th scope="col">경도</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="estation in estations" :key="estation.statId">
          <td>{{ estation.statNm }}</td>
          <td>{{ estation.statId }}</td>
          <td>{{ estation.stat }}</td>
          <td>{{ estation.addr }}</td>
          <td>{{ estation.lat }}</td>
          <td>{{ estation.lng }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
mark.purple {
  background: linear-gradient(to top, #c354ff 20%, transparent 30%);
}
</style>
