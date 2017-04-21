<template>
  <div class="supports">
    <div class="item-support" v-for="item in supports" :class="supportSize">
      <span class="icon" :class="supportsMap[item.type]"></span><span class="text">{{item.description}}</span>
    </div>
  </div>
</template>
<script>
	export default {
    name: 'support',
    props: {
      supports: {
        type: Array
      },
      size: {
        type: Number
      }
    },
    data() {
      return {
        supportsMap: []
      };
    },
    created() {
      this.supportsMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    },
    computed: {
      supportSize () {
        return 'size-' + this.size;
      }
    }
  };
</script>
<style lang="less">
.item-support {
  position: relative;
  margin-bottom: 0.6rem;
  &.size-26 {
    padding-left: 0.85rem;
    line-height: 0.65rem;
    font-size: 0.5rem;
    .icon {
      width: 0.65rem;
      height: 0.65rem;
    }
  }
  &.size-32 {
    padding-left: 1.1rem;
    line-height: 0.8rem;
    font-size: 0.6rem;
    .icon {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  .icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
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
    
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
</style>
