<template>
  <div id="selectPostCode">
    <div class="content">
      <MultiselectDropdown v-model="postCodeSelected" :options="postCodeList">
        <template slot="option" slot-scope="props">
          <slot name="option" :props="props.option.post_code"> </slot>
        </template>
      </MultiselectDropdown>
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
  data() {
    return {
      postCodeSelected: null,
      postCodeList: [],
    };
  },
  methods: {
    DoGetPostCodeList() {
      api.HouseService.DoGetPostCodeList().then((res) => {
        this.postCodeList = houseHelper.ConvertToPostCodeList(res.data.payload);
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
}
</style>
