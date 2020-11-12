<template>
	<div id="head">
		<div class="head">
			<el-row>
				<el-col :span="8">
					<div class="grid-content bg-purple head-one-box">
						<i class="el-icon-s-fold"></i>
						ElementUI展示
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<el-col :span="12" class=" head-last-box">
							<div class="demo-basic--circle">
								<div class="block">
									<el-avatar shape="square" :src="squareUrl"></el-avatar>
								</div>
							</div>
							<div class="sub-title">温柔先生</div>
						</el-col>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'headBox',
		data() {
			return {
				squareUrl: require('../../../static/image/c.png')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	#head {
		.head {
			width: 100%;
			height: 60px;
			background-color: #fff;
		}

		.head-one-box {
			display: flex;
			justify-content: left;
			align-items: center;
			font-size: 18px;
			font-weight: bold;
			padding-left: 20px;

			i {
				font-size: 30px;
				margin-right: 15px;
			}
		}
		.head-last-box{
			display: flex;
			align-items: center;
			float: right;
			justify-content: flex-end;
			padding-right: 50px;
			height: 60px;
			div:nth-of-type(1){
				margin-right: 5px;
			}
		}
		.el-col {}

		.bg-purple-dark {
			background: #d3dce6;
		}

		.bg-purple {
			background: #d3dce6;
		}

		.bg-purple-light {
			background: #d3dce6;
		}

		.grid-content {
			height: 60px;
		}
	}
</style>
