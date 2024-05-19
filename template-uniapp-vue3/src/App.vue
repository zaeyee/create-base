<script setup>
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
:root {
  --c-primary: #089bff;
  --c-primary-thin: #d7edfe;
  --c-success: #1fc819;
  --c-warning: #f0a020;
  --c-danger: #f85757;
  --c-info: #9e9fa2;
}

page,
view,
text,
image,
label,
input,
button,
textarea,
swiper,
swiper-item {
  box-sizing: border-box;
}

image {
  vertical-align: middle;
  will-change: transform;
}

button {
  line-height: 1.5 !important;
}

button::after {
  display: none;
}
</style>
