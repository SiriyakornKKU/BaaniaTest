<template>
    <div id="connectApi">
        <div class="row content">
            <div class="col-4">
                <label class="form-label">URL</label>
                <input type="text" class="form-control" placeholder="http://localhost">
            </div>
            <div class="col-4">
                <label class="form-label">POST</label>
                <input type="text" class="form-control" placeholder="8080">
            </div>
            <div class="col-1 d-flex align-items-end">
                <button type="button" class="btn btn-primary">CONNECT</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#connectApi {
    background-color: #F4F7FC;
    padding: 50px 200px;
    .content {
        margin: auto;
    }
}
</style>