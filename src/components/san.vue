<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<p><router-link to="/user/13/p1">13</router-link></p>
	<p><router-link to="/user/14/p2">14</router-link></p>
	<p> {{ id }} </p>
	<router-view>
		
	</router-view>
  </div>
</template>

<script>
export default {
  name: 'san',
  props: ['id'],
  data() {
	return {
	msg: '我是三级页面'
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
