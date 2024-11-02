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
