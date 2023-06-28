<script setup lang="ts">
onLaunch(() => {
  console.log('App Launch')
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})
</script>

<style>
view,
text,
image,
input {
  box-sizing: border-box;
}

image {
  will-change: transform;
}

button {
  line-height: 1.5 !important;
}

button::after {
  display: none;
}

:root {
  --c-primary: #089bff;
  --c-primary-thin: #d7edfe;
  --c-success: #1fc819;
  --c-warning: #f0a020;
  --c-danger: #f85757;
  --c-info: #9e9fa2;
}
</style>
