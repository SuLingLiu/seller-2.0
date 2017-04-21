<template>
	<div class="header">
    <!-- 内容区 -->
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <h1 class="title">
          <span class="icon"></span>
          <span class="name">{{seller.name}}</span>
        </h1>
        <div class="delivery">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <supports size="26" v-if="seller.supports && seller.supports.length" :supports="_support"></supports>
      </div>
      <div class="supports-count" v-if="seller.supports" @click="_detailShow">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>

    <!-- 公告 -->
    <div class="bulletin-wrapper" @click="_detailShow">
      <span class="icon"></span><span class="text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>

    <!-- 背景 -->
    <div class="background">
      <img :src="seller.avatar">
    </div>

    <!-- 详情弹窗 -->
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="main-title">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star size="36" :score="seller.score"></star>
            </div>
            <div class="division mb" flex="cross:center box:mean">
              <span class="line" flex-box="1"></span>
              <span class="title" flex-box="0">优惠信息</span>
              <span class="line" flex-box="1"></span>
            </div>
            <supports size="32" v-if="seller.supports && seller.supports.length" :supports="seller.supports"></supports>
            <div class="division mt" flex="cross:center box:mean">
              <span class="line" flex-box="1"></span>
              <span class="title" flex-box="0">商家公告</span>
              <span class="line" flex-box="1"></span>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="_detailHide">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import star from '@/components/star/star';
import supports from '@/components/supports/supports';

export default {
  name: 'header',
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      supportsMap: [],
      detailShow: false
    };
  },
  created() {
    this.supportsMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
  },
  computed: {
    _support () {
      return [this.seller.supports[0]];
    }
  },
  methods: {
    _detailShow() {
      this.detailShow = true;
    },
    _detailHide() {
      this.detailShow = false;
    }
  },
  components: {
    star,
    supports
  }
};
</script>

<style lang="less">
  @import '../../common/less/config.less';

  .header {
    position: relative;
    .content-wrapper {
      display: flex;
      position: relative;
      padding: 1.2rem 2.75rem 0.9rem 1.2rem;
      background: rgba(7,17,27,0.5);

      .avatar {
        width: 3.2rem;
        height: 3.2rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
      }
      .content {
        flex: 1;
        padding: 0 0.25rem;
        color: #fff;
        .title {
          padding-top: 0.1rem;
          margin-bottom: 0.3rem;
          font-size: 0;
          .icon {
            display: inline-block;
            width: 1.5rem;
            height: 0.9rem;
            margin-right: 0.3rem;
            vertical-align: top;
            background: url('brand@2x.png') no-repeat;
            background-size: cover;
          }
          .name {
            display: inline-block;
            line-height: 0.9rem;
            font-size: 0.8rem;
            font-weight: bold;
          }
        }
        .delivery {
          margin-bottom: 0.5rem;
          line-height: 0.6rem;
          font-size: 0.6rem;
        }
      }
      .supports-count {
        position: absolute;
        bottom: 0.75rem;
        right: 0.6rem;
        width: 2.2rem;
        height: 1.2rem;
        padding-right: 0.625rem;
        line-height: 1.2rem;
        border-radius: 0.625rem;
        box-sizing: border-box;
        background: rgba(0,0,0,0.2);
        font-size: 0.5rem;
        text-align: center;
        color: #fff;
        cursor: pointer;

        .icon-keyboard_arrow_right {
          position: absolute;
          top: 50%;
          transform: translate(0,-50%);
          right: 0.2rem;
        }
      }
    }

    .bulletin-wrapper {
      position: relative;
      height: 1.4rem;
      padding: 0 1.375rem 0 0.6rem;
      line-height: 1.4rem;
      background: rgba(7,17,27,0.6);
      color: #fff;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.5rem;
      .icon {
        display: inline-block;
        vertical-align: top;
        width: 1.1rem;
        height: 0.6rem;
        margin-top: 0.45rem;
        margin-right: 0.2rem;
        background-image: url(bulletin@2x.png);
        background-size: cover;
      }
      .text {
        vertical-align: top;
      }
      .icon-keyboard_arrow_right {
        position: absolute;
        right: 0.6rem;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
    
    .background {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      filter: blur(15px);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .fade-enter-active, .fade-leave-active {
      opacity: 1;
      transition: .5s;
      background: rgba(7, 17, 27, 0.8);
    }
    .fade-enter, .fade-leave-active {
      opacity: 0;
      background: rgba(7,17,27,0);
    }
    .detail {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 10000;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(7, 17, 27, 0.8);
      backdrop-filter: blur(10px);
      color: #fff;
      .detail-wrapper {
        width: 100%;
        height: auto;
        min-height: 100%;
        .detail-main {
          padding: 3.2rem 1.8rem;
        }
        .main-title {
          font-size: 0.8rem;
          line-height: 32px;
          text-align: center;
          font-weight: bold;
          margin-bottom: 0.8rem;
        }
        .star-wrapper {
          margin-bottom: 1.4rem;
        }
        .division {
          height: 0.75rem;
          .line {
            height: 1px;
            background: rgba(255,255,255,0.2);
          }
          .title {
            min-width: 3.9rem;
            text-align: center;
            line-height: 0.75rem;
            font-size: 0.6rem;
            font-weight: bold;            
            color: #fff;
          }
          &.mt {
            margin-top: 1.35rem;
          }
          &.mb {
            margin-bottom: 1.25rem;
          }
        }
        .bulletin {
          padding: 1.2rem 0.6rem;
          .content {
            line-height: 1.2rem;
            font-size: 0.6rem;
          }
        }
      }
      .detail-close {
        position: relative;
        width: 1.6rem;
        height: 1.6rem;
        margin: -3.2rem auto 0;
        text-align: center;
        font-size: 1.6rem;
        color: rgba(255,255,255,0.5);
        clear:both;
      }
    }
  }
</style>
