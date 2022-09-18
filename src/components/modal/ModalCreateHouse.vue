<template>
  <div id="modalCreareHouse">
    <ModalBox :showModal.sync="showModal">
      <template slot="header">
        <h2>Create</h2>
      </template>
      <template slot="body">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                v-model="createHouseTemplate.name.value"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="form-group">
              <label>Post Code</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Post Code"
                v-model="createHouseTemplate.postCode.value"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="form-group">
              <label>Price</label>
              <input type="number" class="form-control" placeholder="0.00" v-model="createHouseTemplate.price.value" />
            </div>
          </div>
          <div class="col-12 mt-2">
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" rows="3" v-model="createHouseTemplate.description.value"></textarea>
            </div>
          </div>
        </div>
        <div class="btnFooter">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="CloseModal()">
            CANCEL
          </button>
          <button type="button" class="btn btn-success" @click="DoCreateHouse()">CREATE</button>
        </div>
      </template>
    </ModalBox>
  </div>
</template>

<script>
import * as api from "../../service/ApiService";
import ModalBox from "./ModalBox.vue";

export default {
  components: { ModalBox },
  data() {
    return {
      showModal: true,
      createHouseTemplate: {
        name: {
          value: "",
          isError: false,
        },
        postCode: {
          value: "",
          isError: false,
        },
        price: {
          value: 0,
          isError: false,
        },
        description: {
          value: "",
          isError: false,
        },
      },
    };
  },
  watch: {
    showModal(newValue) {
      if (!newValue) {
        this.CloseModal();
      }
    },
  },
  methods: {
    DoCreateHouse() {
      const payload = this.CreatePayload();
      api.HouseService.DoCreateHouse(payload).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("Success");
        } else {
          console.log("Fail");
        }
      });
    },
    CreatePayload() {
      const payload = {
        name: this.createHouseTemplate.name.value,
        desc: this.createHouseTemplate.description.value,
        price: Number(this.createHouseTemplate.price.value),
        post_code: this.createHouseTemplate.postCode.value,
      };
      return payload;
    },
    CloseModal() {
      this.$emit("update:showModal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
#modalCreareHouse {
  .btnFooter {
    margin: 8px auto;
    width: fit-content;
    > button {
      margin-right: 8px;
    }
  }
}
</style>
