<template>
    <div id="selectPostCode">
        <div class="content">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>SELECT POST CODE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#selectPostCode {
    height: 235px;
    margin-top: 30px;
    padding: 65px 200px;
    .content {
        background-color: #F4F7FC; 
    }
}
</style>