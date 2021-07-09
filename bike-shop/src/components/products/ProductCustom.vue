<template>
  <div class="custom-container">
    <div id="wrap">
      <input class="initial" type="checkbox" />
      <input class="wheel1" name="wheel" type="radio" />
      <input class="wheel2" name="wheel" type="radio" />
      <input class="wheel3" name="wheel" type="radio" />
      <input class="wheel4" name="wheel" type="radio" />
      <input class="buy" type="checkbox" />
      <h1><span class="config-text">Configure</span> the Bike</h1>
      <h2>Added to Cart</h2>
      <h5>Wheel</h5>
      <div class="wheeltoggle"></div>
      <div class="wheeltoggle"></div>
      <div class="wheeltoggle"></div>
      <div class="wheeltoggle"></div>
      <div class="buy"></div>
      <div class="toggle expand">
        <i class="fas fa-bicycle"></i>
      </div>
      <div class="toggle">
        <i class="fas fa-bicycle"></i>
      </div>
      <div class="background"></div>
      <div class="frame">
        <div class="rear"></div>
        <div class="stem"></div>
        <div class="shaft"></div>
        <div class="seat"></div>
        <div class="wheel one front">
          <div class="inner"></div>
        </div>
        <div class="wheel one back">
          <div class="inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 480px) {
  .custom-container {
    #wrap {
      .frame {
        left: 60px;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .custom-container {
    #wrap {
      height: 750px;
      left: -20px;
      h1 {
        margin-top: 5rem;
        left: -35px;
        grid-area: 1/4/2/9;
        .config-text {
          color: #fff;
        }
      }
      h5 {
        grid-area: 10/2/11/3;
        color: #fff;
      }
      .frame {
        top: 40px;
      }
      input[type='radio'],
      .wheeltoggle {
        &.wheel1,
        &:not(input):nth-of-type(1) {
          grid-area: 11 / 5 / 12 / 6;
        }
        &.wheel2,
        &:not(input):nth-of-type(2) {
          grid-area: 11 / 4 / 12 / 5;
        }
        &.wheel3,
        &:not(input):nth-of-type(3) {
          grid-area: 11 / 3 / 12 / 4;
        }
        &.wheel4,
        &:not(input):nth-of-type(4) {
          grid-area: 11 / 2 / 12 / 3;
        }
      }
      .buy {
        grid-area: 14/2/15/4;
        margin-top: 30px;
        width: 175px;
        border: 2px solid #ffffff;
        color: #ffffff;
        margin: 1.5rem 1.5rem 0 0;
        letter-spacing: 0.25rem;
        transition: all 0.5s ease-in-out;
        border-radius: unset;
        background: #000 !important;
      }
    }
  }
}
</style>
