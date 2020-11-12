<template>
	<div id="popup">
		<el-dialog title="提示" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
			<span>这是一段信息</span>
			<el-table :data="tableData" stripe style="width: 100%">
				<el-table-column prop="date" label="日期" width="180">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="address" label="地址">
				</el-table-column>
				<el-table-column prop="btn" label="控件">
					<el-button type="primary" @click="dialogVisible = true">点击弹窗</el-button>
				</el-table-column>
			</el-table>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'popup_box',
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
				}],
				dialogVisible: false
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(() => {
						done();
					})
					.catch(() => {});
			},
			open() {
				this.dialogVisible=true;
				console.log("asdd")
			}
		}
	}
</script>

<style lang="less">

</style>
