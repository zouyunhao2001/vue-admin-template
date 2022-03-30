<template>
<div style="display: flex;margin: 30px;" >
  <div style="font-size: 17px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);width: 15%;display: flex;align-items: center;
  justify-content: space-around;padding: 20px 0;">
    <i class="el-icon-user-solid" style="font-size:45px;"></i>
    <div style="display: flex;flex-direction: column;align-items: center;line-height: 25px;">
      <span style="font-weight: bold;">待审批晋级申请</span>
      <span>省级升二级商户</span>
      <span style="color: red;">12500笔</span>
      <el-button type="primary" round>去处理</el-button>
    </div>
  </div>
  <div style="font-size: 17px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);width: 15%;display: flex;align-items: center;margin-left: 20px;
  justify-content: space-around;padding: 20px 0;">
    <i class="el-icon-s-goods
    " style="font-size:40px;"></i>
    <div style="display: flex;flex-direction: column;align-items: center;line-height: 25px;">
      <span style="font-weight: bold;margin-bottom: 10px;">资产二售出</span>
      <div>
        <span>今日：</span>
        <span style="color: red;">12500个</span>
      </div>
      <div>
        <span>昨日：</span>
        <span >12500个</span>
      </div>
    </div>
  </div>
  <div style="font-size: 17px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);width: 20%;display: flex;align-items: center;margin-left: 20px;
  justify-content: space-around;padding: 20px 0;">
    <i class="el-icon-s-custom
    " style="font-size:40px;"></i>
    <div style="display: flex;flex-direction: column;align-items: center;line-height: 25px;width: 60%;">
      <span style="font-weight: bold;margin-bottom: 10px;">用户数</span>
      <div style="display: flex;width: 100%;justify-content: space-between;">
        <div style="display: flex;flex-direction: column;align-items: center;">
          <span>今日注册</span>
          <span style="color: red;">12500</span>
        </div>
        <div style="display: flex;flex-direction: column;align-items: center;">
          <span>今日登录</span>
          <span style="color: red;">12500</span>
        </div>
        <div style="display: flex;flex-direction: column;align-items: center;">
          <span>累计用户</span>
          <span style="color: red;">12500</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Dashboard",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
