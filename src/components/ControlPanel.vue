<template>
  <div class="main">
    <div class="controls" v-if="is_visible">
      <div>
        <h1>Algorithm</h1>
        <div class="algorithms">
          <button @click="$emit('sort')">Merge Sort</button>
          <button @click="$emit('sort', bubble)">Bubble Sort</button>
          <button>Insertion Sort</button>
          <button>Quick Sort</button>
        </div>
      </div>
      <div>
        <h1>Elements</h1>
        <div class="elements">
          <div>
            <label for="elements-slider">Number: </label>
            <input
              type="number"
              v-model="num_elements"
              min="1"
              :max="max_width"
              name="elements-slider"
              @change="$emit('elements', num_elements)"
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

export default {
  name: "ControlPanel",
  data: () => ({
    is_visible: true,
    num_elements: 100,
    bubble,
  }),
  computed: {
    max_width() {
      return window.innerWidth - 200;
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

.controls > div > h1 {
  font-size: 16px;
}

.algorithms {
  display: flex;
  justify-content: space-around;
}
.elements {
  display: flex;
  justify-content: space-around;
}

button {
  padding: 5px;
  border: 2px solid var(--primary-color);
  background-color: var(--button-light);
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
</style>
