<template>
	<div id="filter">
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="btn" label="控件">
				<el-button type="primary" @click="dialogVisible">点击弹窗</el-button>
			</el-table-column>
		</el-table>
		<PopupTc ref="tc"></PopupTc>
	</div>
</template>

<script>
	import PopupTc from "./popupTc.vue";
	export default {
		name: 'aside_box',
		components: {
			PopupTc
		},
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods: {
			dialogVisible(){
				this.$refs.tc.open();
			}
		}
	}
</script>

<style lang="less">
</style>
