<template>
  <div id="modalBox">
    <div ref="modalBox" class="modalBox" :style="`width:${width}`">
      <div ref="modalBoxHeader" class="header">
        <slot name="header"></slot>
      </div>
      <div ref="modalBoxBody" class="body">
        <slot name="body"></slot>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "700px",
    },
  },
};
</script>

<style lang="scss" scoped>
#modalBox {
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 300;
  padding: 20px 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.582);
  @media only screen and (max-width: 800px) {
    top: 0px;
    padding: 0px;
  }
  .modalBox {
    position: relative;
    border-radius: 5px;
    background-color: #ffffff;
    width: 630px;
    max-height: 100%;
    overflow: auto;
    overflow-x: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.5s ease;
    padding: 20px;
    @media only screen and (max-width: 800px) {
      width: 95%;
      height: auto;
    }
    > .header {
      font-weight: bold;
    }
    > .body {
      height: 100%;
    }
  }
}
</style>
