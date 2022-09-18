<template>
  <div id="houseList">
    <div class="d-flex justify-content-between">
      <h5>HOUSE LIST</h5>
      <button type="button" class="btn btn-success" @click="CreateHouse()">CREATE</button>
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
              <button type="button" class="btnAction btnViewDetail" @click="ViewDetail(item)">VIEW DETAIL</button>
              <button type="button" class="btnAction btnDelete" @click="DoDeleteHouse(item.id)">DELETE</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <div>
        <MultiselectDropdown v-model="pageSize" :options="pageSizeList">
          <template slot="option" slot-scope="props">
            <slot name="option" :props="props.option"> </slot>
          </template>
        </MultiselectDropdown>
      </div>
      <div>
        <MultiselectDropdown v-model="pageNo" :options="pageNoList">
          <template slot="option" slot-scope="props">
            <slot name="option" :props="props.option"> </slot>
          </template>
        </MultiselectDropdown>
      </div>
    </div>
    <ModalCreateHouse
      v-if="isShowModalCreateHouse"
      :showModal.sync="isShowModalCreateHouse"
      :houseTemplate="createHouseTemplate"
      :createLoadingStatus.sync="createLoadingStatus"
      :updateLoadingStatus.sync="updateLoadingStatus"
      :isEdit="isEdit"
    />
    <ModalSuccess v-if="isShowModalSuccess" :showModal.sync="isShowModalSuccess" />
    <ModalFail v-if="isShowModalFail" :showModal.sync="isShowModalFail" />
  </div>
</template>

<script>
import * as api from "../service/ApiService";
import houseHelper from "../helper/houseHelper";
import ModalCreateHouse from "./modal/ModalCreateHouse.vue";
import ModalSuccess from "./modal/ModalSuccess.vue";
import ModalFail from "./modal/ModalFail.vue";
import Enums from "../enums/enums";

export default {
  components: {
    ModalCreateHouse,
    ModalSuccess,
    ModalFail,
  },
  created() {
    this.DoGetHouseList();
  },
  data() {
    return {
      houseList: null,
      houseListAll: null,
      count: 0,
      isShowModalCreateHouse: false,
      createLoadingStatus: Enums.LoadingStatusType.None,
      updateLoadingStatus: Enums.LoadingStatusType.None,
      isShowModalSuccess: false,
      isShowModalFail: false,
      createHouseTemplate: houseHelper.GetCreateHouseTemplate(),
      isEdit: false,
      pageSizeList: [5, 10, 20, 50, 100],
      pageSize: 5,
      pageNoList: [],
      pageNo: 1,
      pageNoMax: 0,
    };
  },
  watch: {
    createLoadingStatus: {
      immediate: true,
      handler(newValue) {
        if (newValue === Enums.LoadingStatusType.Success) {
          this.DoGetHouseList();
          this.isShowModalSuccess = true;
        } else if (newValue === Enums.LoadingStatusType.Failed) {
          this.isShowModalFail = true;
        }
      },
    },
    updateLoadingStatus: {
      immediate: true,
      handler(newValue) {
        if (newValue === Enums.LoadingStatusType.Success) {
          this.DoGetHouseList();
        }
      },
    },
    pageSize: {
      immediate: true,
      handler() {
        this.SetPageNoList();
        this.houseList = houseHelper.SetTablePage(this.pageNo, this.pageSize, this.houseListAll);
      },
    },
    pageNo: {
      immediate: true,
      handler() {
        this.SetPageNoList();
        this.houseList = houseHelper.SetTablePage(this.pageNo, this.pageSize, this.houseListAll);
      },
    },
  },
  methods: {
    DoGetHouseList() {
      api.HouseService.DoGetHouseList().then((res) => {
        if (res.status === 200) {
          this.houseListAll = res.data.payload;
          this.houseList = houseHelper.SetTablePage(1, 5, this.houseListAll);
          this.count = res.data.count;
          this.SetPageNoList();
        }
      });
    },
    DoDeleteHouse(id) {
      api.HouseService.DoDeleteHouse(id).then((res) => {
        if (res.status === 200) {
          this.DoGetHouseList();
          console.log("Success");
        } else {
          console.log("Fail");
        }
      });
    },
    CreateHouse() {
      this.createHouseTemplate = houseHelper.GetCreateHouseTemplate();
      this.isShowModalCreateHouse = true;
      this.isEdit = false;
    },
    ViewDetail(item) {
      this.createHouseTemplate.id = item.id;
      this.createHouseTemplate.name.value = item.name;
      this.createHouseTemplate.postCode.value = item.post_code;
      this.createHouseTemplate.price.value = item.price;
      this.createHouseTemplate.description.value = item.desc;
      this.isShowModalCreateHouse = true;
      this.isEdit = true;
    },
    SetPageNoList() {
      this.pageNoMax = Math.ceil(this.count / this.pageSize);
      this.pageNoList = [];
      if (this.pageNoMax < this.pageNo) {
        this.pageNo = 1;
      }
      if (this.pageNoMax > 0) {
        for (let i = 0; i < this.pageNoMax; i++) {
          let value = i + 1;
          this.pageNoList.push(value);
        }
      } else {
        this.pageNoList.push(1);
      }
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
  .pagination {
    display: flex;
    > div {
      margin-left: 8px;
    }
  }
}
</style>
