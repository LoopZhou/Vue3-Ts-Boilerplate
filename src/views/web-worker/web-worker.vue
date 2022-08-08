<template>
  <input v-model="left" type="number" />

  <select id="operator" v-model="operator" name="operator">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
    <option value="%">%</option>
  </select>

  <input v-model="right" type="number" />
  <br />

  <button type="button" @click="executeOp">Evaluate</button>

  <p>Result: {{ result }}</p>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onUnmounted } from 'vue';
import BinOpWorker from './compute.worker?worker';

const left = ref(0);
const right = ref(0);
const operator = ref('+');
const result = ref(0);

let worker: Worker;

const executeOp = () => {
  if (worker) {
    worker.postMessage({
      left: left.value,
      right: right.value,
      operator: operator.value,
    });
  }
};

onBeforeMount(() => {
  // setup web worker
  worker = new BinOpWorker();
  worker.onmessage = (ev: any) => {
    result.value = ev.data;
  };
});

onUnmounted(() => {
  // cleanup web worker
  if (worker) {
    worker.terminate();
  }
});
</script>
