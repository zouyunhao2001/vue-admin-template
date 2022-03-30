<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <breadcrumb class="breadcrumb-container" />
    <p class="insd">E购&后台管理系统</p>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">退出系统</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
@-webkit-keyframes masked-animation {
  0% {
    background-position: 0 0;
  }

  to {
    background-position: -100% 0;
  }
}

p {
  letter-spacing: 30px;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 45%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 25px;
  overflow: hidden; //超出部分隐藏
  font-style: oblique; //倾斜
  background-image: linear-gradient(
    to right,
    #e4afcb 0%,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #e2c58b 30%,
    #c2ce9c 64%,
    #7edbdc 100%
  );
  -webkit-text-fill-color: transparent; //颜色填充 透明
  -webkit-background-clip: text; //背景颜色绘制区域
  animation: stream 10s infinite linear; //流动 15秒 循环 直线
  background-size: 200% 100%;
}
@keyframes stream {
  //匀速流动
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
@-webkit-keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  to {
    background-position: -100% 0;
  }
}
</style>
