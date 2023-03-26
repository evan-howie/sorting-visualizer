<template>
  <div class="app">
    <control-panel
      @sort="sortNumbers"
      @elements="changeNumbers"
      @scramble="
        () => {
          scramble(numbers);
          drawArray(numbers);
        }
      "
      @delay="() => {}"
    ></control-panel>
    <canvas></canvas>
  </div>
</template>

<script>
import ControlPanel from "./components/ControlPanel.vue";

export default {
  name: "App",
  components: { "control-panel": ControlPanel },
  data() {
    return {
      numbers: [],
      canvas: null,
      gc: null,
      delay: 2,
    };
  },
  beforeMount() {
    this.numbers = this.fillArray(100);
    this.scramble(this.numbers);
  },
  mounted() {
    this.setupCanvas();
    this.drawArray(this.numbers);
  },
  methods: {
    scramble(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
    },
    fillArray(n) {
      return [...Array(n).keys()].map((i) => i + 1);
    },
    setupCanvas() {
      const canvas = document.querySelector("canvas");
      canvas.width = window.innerWidth - 200;
      canvas.height = window.innerHeight - 150;
      this.canvas = canvas;
      this.gc = canvas.getContext("2d");
    },
    drawArray(a, compare = []) {
      const [w, h] = [this.canvas.width, this.canvas.height];
      const col_width = w / a.length;
      const height_adj = h / a.length;

      this.gc.clearRect(0, 0, w, h);

      for (const [index, col] of a.entries()) {
        this.gc.fillStyle = compare.includes(index) ? "red" : "black";
        this.gc.fillRect(
          index * col_width,
          h - col * height_adj,
          col_width,
          col * height_adj
        );
      }
    },

    sortNumbers(sort) {
      const animations = sort(this.numbers);
      const id = setInterval(() => {
        const cur_animation = animations.next();
        this.drawArray(this.numbers, cur_animation.value);
        if (cur_animation.done) clearInterval(id);
      }, this.delay);
      this.drawArray(this.numbers);
    },
    changeNumbers(n) {
      n = parseInt(n);
      this.numbers = this.fillArray(n);
      this.scramble(this.numbers);
      this.drawArray(this.numbers);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

:root {
  --primary-bg: #daebe8;
  --secondary-bg: #b7d7e8;
  /* #cfe0e8 */
  --primary-color: #ffffff;
  --button-color: #87bdd8;
}

* {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
.app {
  background-color: var(--primary-bg);
  min-height: 100vh;
}

canvas {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
