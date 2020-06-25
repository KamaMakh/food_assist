<template>
  <div class="advantage-card elevation-1">
    <div class="advantage-card__img">
      <slot name="image"></slot>
    </div>
    <div class="advantage-card__title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvantageCard"
};
</script>

<style scoped lang="scss">
$poppins: "Poppins", sans-serif;
.advantage-card {
  max-width: 100%;
  min-width: 235px;
  background: linear-gradient(217deg, #ffc600 0%, #ff742f 100%);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  height: 100%;
  @media all and(max-width: 1500px) {
    min-width: 300px;
    padding: 10px;
  }
  &__img {
    margin-bottom: 10px;
    height: 132px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 146px;
    font-weight: 500;
    color: #fff;
    font-family: $poppins;
    @media all and(max-width: 1500px) {
      font-size: 130px;
    }
  }
  &__title {
    font-size: 23px;
    text-align: center;
    color: #fff;
    font-family: $poppins;
    @media all and(max-width: 500px) {
      font-size: 19px;
    }
    span {
      line-height: 49px;
      @media all and(max-width: 1500px) {
        line-height: 30px;
      }
      &.small {
        font-size: 20px;
        line-height: 34px;
        @media all and(max-width: 1500px) {
          font-size: 17px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
