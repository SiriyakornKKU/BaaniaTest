<template>
  <div id="selectPostCode">
    <div class="content">
      <MultiselectDropdown v-model="postCodeSelected" :options="postCodeList">
        <template slot="option" slot-scope="props">
          <slot name="option" :props="props.option.post_code"> </slot>
        </template>
      </MultiselectDropdown>
      <div v-if="postCodeDetail" class="postCodeDetail">
        <p>AVERAGE: {{ postCodeDetail.average }}</p>
        <p>MEDIAN: {{ postCodeDetail.median }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "../service/ApiService";
import houseHelper from "../helper/houseHelper";

export default {
  created() {
    this.DoGetPostCodeList();
  },
  watch: {
    postCodeSelected: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.DoGetPostCodeDetail();
        }
      },
    },
  },
  data() {
    return {
      postCodeSelected: null,
      postCodeList: [],
      postCodeDetail: null,
    };
  },
  methods: {
    DoGetPostCodeList() {
      api.HouseService.DoGetPostCodeList().then((res) => {
        this.postCodeList = houseHelper.ConvertToPostCodeList(res.data.payload);
      });
    },
    DoGetPostCodeDetail() {
      api.HouseService.DoGetPostCodeDetail(this.postCodeSelected).then((res) => {
        this.postCodeDetail = res.data.payload;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#selectPostCode {
  margin-top: 30px;
  padding: 65px 200px;
  background-color: #f4f7fc;
  .content {
    background-color: #f4f7fc;
  }
  .postCodeDetail {
    margin-top: 16px;
    color: #6e8bc5;
    font-weight: bold;
    p {
      margin-bottom: 0px !important;
    }
  }
}
</style>
