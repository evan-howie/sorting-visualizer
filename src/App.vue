<template>
  <div class="app">
    <control-panel
      @sort="sortNumbers"
      @elements="setNumbers"
      @scramble="
        () => {
          numbers = fillArray(numbers.length);
          scramble(numbers);
          drawArray(numbers);
        }
      "
      @delay="setDelay"
    ></control-panel>
    <sound-control :sound="sound" @toggle="toggleSound"></sound-control>
    <canvas></canvas>
  </div>
</template>

<script>
import ControlPanel from "./components/ControlPanel.vue";
import SoundControl from "./components/SoundControl.vue";

export default {
  name: "App",
  components: { "control-panel": ControlPanel, "sound-control": SoundControl },
  data() {
    return {
      numbers: [],
      canvas: null,
      gc: null,
      delay: 2,
      sorting: false,
      sound: false,
      audioCtx: null,
      oscillators: [],
    };
  },
  beforeMount() {
    this.numbers = this.fillArray(100);
    this.scramble(this.numbers);
  },
  mounted() {
    this.setupCanvas();
    this.drawArray(this.numbers);
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.oscillators = this.createOscillatorNodes(this.audioCtx);
  },
  methods: {
    scramble(a) {
      this.sorting = false;
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
        this.gc.fillStyle = compare.includes(index) ? "red" : "#1282a2";
        this.gc.fillRect(
          index * col_width,
          h - col * height_adj,
          col_width,
          col * height_adj
        );
      }
    },

    sortNumbers(sort) {
      if (this.sorting) return;

      this.sorting = true;
      let animations = sort(this.numbers);

      const animate = () => {
        const id = setTimeout(() => {
          const cur_animation = animations.next();

          if (!this.sorting || cur_animation.done) {
            this.oscillators.forEach((oscillator) => oscillator.disconnect());
            clearTimeout(id);
            this.sorting = false;
            this.drawArray(this.numbers);

            return;
          }

          if (this.sound) {
            for (let i = 0; i < cur_animation.value.length; i++) {
              this.oscillators[i].connect(this.audioCtx.destination);
              this.oscillators[i].frequency.value =
                261.6 + (cur_animation.value[i] * 1047) / this.numbers.length; // between two octaves
            } // value in hertz
            for (
              let i = cur_animation.value.length;
              i < this.oscillators.length;
              i++
            ) {
              this.oscillators[i].disconnect();
            }
          }
          this.drawArray(this.numbers, cur_animation.value ?? [], "red");
          requestAnimationFrame(animate);
        }, this.delay);
      };

      animate(this.delay);
    },

    setNumbers(n) {
      this.sorting = false;
      n = parseInt(n);
      this.numbers = this.fillArray(n);
      this.scramble(this.numbers);
      this.drawArray(this.numbers);
    },

    setDelay(delay) {
      if (this.sorting) {
        this.sorting = false;
        this.drawArray(this.numbers);
      }
      if (this.sorting) return;
      ``;
      this.delay = delay;
    },

    createOscillatorNodes(ctx) {
      const a = [
        ctx.createOscillator(),
        ctx.createOscillator(),
        ctx.createOscillator(),
      ];

      a.forEach((oscillator) => {
        oscillator.type = "square";
        oscillator.start();
      });
      return a;
    },

    toggleSound() {
      this.sound = !this.sound;
      this.oscillators.forEach((oscillator) => {
        if (!this.sound) oscillator.disconnect();
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

:root {
  --primary-bg: #0a1128;
  --secondary-bg: #001f54;
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
  color: var(--primary-color);
}

canvas {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
