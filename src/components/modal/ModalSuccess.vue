<template>
  <div id="modalSuccess">
    <ModalBox :showModal.sync="showModal" width="330px">
      <template slot="body">
        <img class="mb-3" src="../../assets/success.png" width="75" />
        <h4>Success</h4>
        <p>Create a Successful!</p>
        <div class="btnFooter">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="CloseModal()">
            CONTINUE
          </button>
        </div>
      </template>
    </ModalBox>
  </div>
</template>

<script>
import ModalBox from "./ModalBox.vue";

export default {
  components: { ModalBox },
  data() {
    return {
      showModal: true,
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
    CloseModal() {
      this.$emit("update:showModal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
#modalSuccess {
  color: #8d9196;
  text-align: center;
  .btnFooter {
    margin: 8px auto;
    width: fit-content;
  }
}
</style>
