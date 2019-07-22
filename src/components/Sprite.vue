<template>
  <scene v-if="visible" id="container" :resolution="[1200, 1200]" :viewport="[600, 600]">
    <layer id="fglayer">
      <group>
        <sprite :pos="[100, 100]" :attrs="button" :size="[100, 100]" v-on:click="onClick"
        v-on:mouseenter="onMouseEnter"
        v-on:mouseleave="onMouseLeave" ref="abc"></sprite>
        <s-label v-show="toggle" :pos="[300, 100]" :width="300"
        font="24px '宋体'" lineBreak="normal" :text="text">
        </s-label>
      </group>
      <group display="flex" :pos="[100, 500]" :width="600" justifyContent="space-between">
        <sprite v-for="(item, key, index) in items" v-show="item.visible"
        :size="[50, 50]" :key="index" class="test"></sprite>
      </group>
    </layer>
  </scene>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    window.test = {
      visible: true,
      button: {
        bgcolor: 'green',
      },
      toggle: true,
      text: `Hello Sprite,Hello Sprite,Hello Sprite,Hello Sprite,Hello Sprite,Hello Sprite
          Hello Sprite,Hello Sprite,Hello Sprite,Hello Sprite,Hello Sprite,Hello Sprite`,
      items: [
        { visible: true },
        { visible: true },
        { visible: true },
      ],
    };
    return window.test;
  },
  computed: {
    count() {
      return this.$store;
    },
  },
  methods: {
    onClick(evt) {
      console.log(this.$refs.abc);
      console.log(this.count);
      // console.log(store.state.count) // -> 1
      console.log(this.button);
      this.button.bgcolor = '#f00';
      this.toggle = !this.toggle;
    },
    onMouseEnter() {
      console.log('mouseenter');
    },
    onMouseLeave() {
      console.log('mouseleave');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  border: solid 1px black;
  width: 600px;
  height: 600px;
  position: relative;
}

canvas {
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select:none;
  -khtml-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none;
}

#container .test:nth-child(1) {
  background-color: red;
}

#container .test:nth-child(2) {
  background-color: blue;
}

#container .test:nth-child(3) {
  background-color: green;
}
</style>
