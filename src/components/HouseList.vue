<template>
  <div id="houseList">
    <div class="d-flex justify-content-between">
      <h5>HOUSE LIST</h5>
      <button type="button" class="btn btn-success" @click="isShowModalCreateHouse = true">CREATE</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Post Code</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in houseList" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.post_code }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div class="d-flex justify-content-center">
              <button type="button" class="btnAction btnViewDetail">VIEW DETAIL</button>
              <button type="button" class="btnAction btnDelete">DELETE</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalCreateHouse v-if="isShowModalCreateHouse" :showModal.sync="isShowModalCreateHouse" />
  </div>
</template>

<script>
import * as api from "../service/ApiService";
import ModalCreateHouse from "./modal/ModalCreateHouse.vue";

export default {
  components: {
    ModalCreateHouse,
  },
  created() {
    this.DoGetHouseList();
  },
  data() {
    return {
      houseList: null,
      count: 0,
      isShowModalCreateHouse: false,
    };
  },
  methods: {
    DoGetHouseList() {
      api.HouseService.DoGetHouseList().then((res) => {
        this.houseList = res.data.payload;
        this.count = res.data.count;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#houseList {
  padding: 0 200px;
  margin-top: 30px;
  table {
    text-align: center;
    margin-top: 44px;
  }
  .btnAction {
    border-radius: 100px;
    border: unset;
    padding: 4px 16px;
  }
  .btnViewDetail {
    background-color: #fff7e6;
    color: #ffc264;
  }
  .btnDelete {
    background-color: #fdf4f7;
    color: #d17c91;
    margin-left: 4px;
  }
}
</style>
