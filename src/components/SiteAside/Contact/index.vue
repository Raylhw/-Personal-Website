// 头像组件
<template>
  <ul class="contact-container">
    <!-- github -->
    <li>
      <a :href="data.github" target="_blank">
        <div class="icon">
          <IconCreate type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>

    <!-- email -->
    <li>
      <a href="">
        <div class="icon">
          <IconCreate type="email" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>

    <!-- qq -->
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1249730812&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <IconCreate type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>

    <!-- wechat -->
    <li>
      <a>
        <div class="icon">
          <IconCreate type="wechat" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import IconCreate from "@/components/IconCreate";
export default {
  components: {
    IconCreate,
  },
  computed: {
    ...mapState("setting", ["loading", "data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container {
  width: 100%;
  padding: 20px 20px 10px;
  box-sizing: border-box;
  color: @gray;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    @popBgColor: #fff;
    @popImgSize: 150px;

    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }

    a {
      display: flex;
      align-items: center;
      cursor: pointer;

      .icon {
        width: 36px;
        font-size: 26px;
      }
    }

    .pop {
      position: absolute;
      left: 0;
      bottom: @itemHeight + 5px;
      padding: 10px 15px;
      background: @popBgColor;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      @triangleSize: 8px;

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: @triangleSize / -2;
        transform: translateX(-50%) rotate(45deg);
        width: @triangleSize;
        height: @triangleSize;
        background: @popBgColor;
      }

      img {
        width: @popImgSize;
        height: @popImgSize;
      }
    }
  }
}
</style>
