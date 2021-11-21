<template>
  <div class="content-page">
    <div class="container-box">
      <div class="content-left"></div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.content-page {
  height: 100%;
  overflow-y: auto;
  background-color: #e7e7e7;
  padding-left: 20px;
  padding-right: 20px;
}

.container-box {
  display: flex;
  height: inherit;
}

.content-left {
  padding: 10px;
  flex: 3;
  height: inherit;
}

.content-right {
  flex: 1;
  padding: 10px;
  height: inherit;
}

</style>