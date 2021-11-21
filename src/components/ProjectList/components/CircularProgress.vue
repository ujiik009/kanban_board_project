<template>
  <div
    id="progress"
    role="progressbar"
    :aria-valuenow="percent"
    aria-valuemin="0"
    aria-valuemax="100"
    :style="{ ['--value']: percent, ['--size']: `${size}px` }"
  ></div>
</template>

<script>
export default {
  props: {
    size: Number,
    percent: Number,
  },
};
</script>

<style>
@keyframes growProgressBar {
  0%,
  33% {
    --pgPercentage: 0;
  }
  100% {
    --pgPercentage: var(--value);
  }
}

@property --pgPercentage {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}

#progress {
  --size: var(--size);
  --fg: #23c3e7;
  --bg: #23c3e755;
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(
      closest-side,
      #dbf6fd 80%,
      transparent 0 99.9%,
      #dbf6fd 0
    ),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

#progress::before {
  counter-reset: percentage var(--value);
  content: counter(percentage) "%";
  border-radius: 20px;
}

</style>