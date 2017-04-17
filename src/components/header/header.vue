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
        <div class="support" v-if="seller.supports && seller.supports.length">
          <span class="icon" :class="supportsMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
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
    <div class="detail-wrapper" v-show="detailShow">11111</div>
  </div>
</template>

<script>
import { Blur } from 'vux';

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
  methods: {
    _detailShow() {
      this.detailShow = true;
    }
  },
  components: {
    Blur
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
        .support {
          position: relative;
          padding-left: 0.8rem;
          .icon {
            position: absolute;
            left: 0;
            top: 0.05rem;
            width: 0.6rem;
            height: 0.6rem;

            background-size: cover;

            &.decrease {
              background-image: url(decrease_1@2x.png);
            }
            &.discount {
              background-image: url(discount_1@2x.png);
            }
            &.guarantee {
              background-image: url(guarantee_1@2x.png);
            }
            &.invoice {
              background-image: url(invoice_1@2x.png);
            }
            &.special {
              background-image: url(special_1@2x.png);
            }
          }
          .text {
            display: block;
            width: 100%;
            font-size: 0.5rem;
            line-height: 0.65rem;
            
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
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

    .detail-wrapper {

    }
  }
</style>
