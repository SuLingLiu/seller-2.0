<template>
  <div class="star" :class="itemSize">
    <span class="item-star" :class="item" v-for="item in itemClass"></span>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default {
  name: 'star',
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    itemSize () {
      return 'star-' + this.size;
    },
    itemClass() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;// 得分
      let hasDecimals = (score % 1) !== 0;// 小数是否>=0.5
      let integer = Math.floor(score);// 得分整数

      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimals) {
        result.push(CLS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      return result;
    }
  }
};
</script>

<style lang="less">
  .star {
    font-size: 0;
    text-align: center;
    .item-star {
      display: inline-block;
      background-size: cover;
    }
    &.star-48 {
      height: 1.2rem;
      line-height: 1.2rem;
      .item-star {
        width: 1.0rem;
        height: 1.0rem;
        margin-right: 1.0rem;
        vertical-align: middle;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          background-image: url(star48_on@2x.png);
        }
        &.half {
          background-image: url(star48_half@2x.png);
        }
        &.off {
          background-image: url(star48_off@2x.png);
        }
      }
    }
    &.star-36 {
      height: 0.9rem;
      line-height: 0.9rem;
      .item-star {
        width: 0.75rem;
        height: 0.75rem;
        margin-right: 0.6rem;
        vertical-align: middle;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          background-image: url(star36_on@2x.png);
        }
        &.half {
          background-image: url(star36_half@2x.png);
        }
        &.off {
          background-image: url(star36_off@2x.png);
        }
      }
    }
    &.star-24 {
      height: 0.6rem;
      line-height: 0.6rem;
      .item-star {
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.4rem;
        vertical-align: middle;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          background-image: url(star24_on@2x.png);
        }
        &.half {
          background-image: url(star24_half@2x.png);
        }
        &.off {
          background-image: url(star24_off@2x.png);
        }
      }
    }
  }
</style>