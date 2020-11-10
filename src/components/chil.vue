<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<span>{{ router }}</span>
  </div>
</template>

<script>
export default {
  name: 'child',
  data() {
	return {
	msg: '我是子页面'
	}
  },
  mounted() {
	console.log(this.$route);
  },
  computed: {
	router() {
		const { name, path } = this.$route;
		return { name, path };
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
