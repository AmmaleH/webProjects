<template>
  <div class="no-datta">
    <img src="/imgs/icon-no-data.png" alt="" />
    <p>当前暂无提交的订单记录！</p>
  </div>
</template>

<script>
export default {
  name: "no-data",
};
</script>

<style lang="scss">
.no-data {
  text-align: center;
  font-size: 20px;
  color: #999;
  margin: 50px 0;
  image: {
    width: 240px;
    height: 180px;
    margin-bottom: 30px;
  }
}
</style>