<template>
  <div id="modalFail">
    <ModalBox :showModal.sync="showModal" width="330px">
      <template slot="body">
        <img class="mb-3" src="../../assets/fail.png" width="75" />
        <h4>Fail</h4>
        <p>Let’s try one more again</p>
        <div class="btnFooter">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="CloseModal()">
            TRY AGAIN
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
#modalFail {
  color: #8d9196;
  text-align: center;
  .btnFooter {
    margin: 8px auto;
    width: fit-content;
  }
}
</style>
