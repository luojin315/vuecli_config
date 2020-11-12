<template>
	<div id="app">
		<Head></Head>
		<Aside></Aside>
		<transition name="el-fade-in-linear" @after-enter="transitionComplete">
			<router-view class="pageBox"></router-view>
		</transition>
	</div>
</template>

<script>
	import Aside from "./components/asidePart.vue"
	import Head from "./components/head/index.vue"
	export default {
		name: 'App',
		components: {
			Aside,
			Head
		},
		data() {
			return {
				show: true
			}
		},
		methods:{
			transitionComplete(el) {
				console.log(el);
			}
		}
	}
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

		.pageBox {
			width: 80%;
			float: left;
			height: 100vh;
			overflow-y: auto;
			overflow-x: auto;
			padding: 30px;
		}
	}

	.transition-box {
		margin-bottom: 10px;
		width: 200px;
		height: 100px;
		border-radius: 4px;
		background-color: #409EFF;
		text-align: center;
		color: #fff;
		padding: 40px 20px;
		box-sizing: border-box;
		margin-right: 20px;
	}

	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}
</style>
