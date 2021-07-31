<template>
  <div class="main-wrapper">
		
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import addPointer from './utils/pointer'

export default defineComponent({
  name: 'App',
  components: {
    
  },
	setup() {
		onMounted(() => {
			addPointer()
		})
	}
})
</script>

<style>
.main-wrapper {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background-image: url(./assets/images/bg6.gif);
}
</style>
