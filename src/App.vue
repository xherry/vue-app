<template>
  <div id="app">
    <!-- <router-view /> -->
    <transition :name="transitionName">
      <navigation>
        <router-view class="page" />
      </navigation>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "fade",
    };
  },
  created() {
    this.$navigation.on("forward", (to, from) => {
      this.transitionName = "fade-right";
    });
    this.$navigation.on("back", (to, from) => {
      this.transitionName = "fade-left";
    });
    this.$navigation.on("replace", (to, from) => {
      this.transitionName = "fade";
    });
  },
  watch: {
    // $route(to, from) {
    //   let toDepth = to.meta;
    //   let fromDepth = from.meta;
    //   if (fromDepth > toDepth) {
    //     this.transitionName = "fade-left";
    //   } else if (fromDepth < toDepth) {
    //     this.transitionName = "fade-right";
    //   } else {
    //     this.transitionName = "fade";
    //   }
    // },
  },
};
</script>
<style>
@import "../common/amimate.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.page {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
}
button {
  outline: transparent;
  border: 0;
}
button:active {
  opacity: 0.7;
}
</style>
