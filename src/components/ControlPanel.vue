<template>
  <div class="main">
    <div class="controls" v-if="is_visible">
      <div>
        <h1>Algorithm</h1>
        <div class="algorithms">
          <button @click="$emit('sort', merge)">Merge Sort</button>
          <button @click="$emit('sort', bubble)">Bubble Sort</button>
          <button @click="$emit('sort', insertion)">Insertion Sort</button>
          <button @click="$emit('sort', quick)">Quick Sort</button>
          <button @click="$emit('sort', bogo)">Bogo Sort</button>
        </div>
      </div>
      <div>
        <h1>Elements</h1>
        <div class="elements">
          <div>
            <label for="elements">Number: </label>
            <input
              type="number"
              v-model="num_elements"
              min="1"
              :max="max_width"
              name="elements"
              @change="$emit('elements', num_elements)"
            />
          </div>
          <div>
            <label for="delay">Delay: </label>
            <input
              type="number"
              v-model="delay"
              min="0.5"
              max="100"
              name="delay"
              @change="$emit('delay', delay)"
            />
          </div>
          <button @click="$emit('scramble')">Scramble</button>
        </div>
      </div>
    </div>
    <button class="visibility-btn" @click="is_visible = !is_visible">
      <font-awesome-icon
        :icon="'fa-solid fa-chevron-' + (is_visible ? 'up' : 'down')"
      />
    </button>
  </div>
</template>

<script>
import bubble from "@/static/algorithms/bubble.js";
import merge from "@/static/algorithms/merge.js";
import insertion from "@/static/algorithms/insertion.js";
import quick from "@/static/algorithms/quick.js";
import bogo from "@/static/algorithms/bogo.js";

export default {
  name: "ControlPanel",
  data: () => ({
    is_visible: true,
    num_elements: 100,
    bubble,
    merge,
    insertion,
    quick,
    bogo,
    delay: 2,
  }),
  computed: {
    max_width() {
      return window.innerWidth - 200;
    },
  },
  methods: {
    toggleSound() {
      this.sound = !this.sound;
      this.$emit("sound");
    },
  },
};
</script>

<style scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
}
.controls {
  background-color: var(--secondary-bg);
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  padding: 10px 0;
}

.controls > div {
  flex-grow: 3;
  text-align: center;
}

h1 {
  font-size: 16px;
  display: inline-block;
  padding-bottom: 12px;
}

.algorithms {
  display: flex;
  justify-content: space-around;
}
.elements {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

button {
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: var(--button-color);
  color: var(--primary-color);
}

button:hover {
  cursor: pointer;
  user-select: none;
}

.visibility-btn {
  background-color: var(--secondary-bg); /* Green */
  border: none;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  color: var(--primary-color);
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
}

.visibility-btn:hover {
  cursor: pointer;
}

.sound {
  padding-left: 12px;
}

.sound:hover {
  cursor: pointer;
  user-select: none;
}
</style>
