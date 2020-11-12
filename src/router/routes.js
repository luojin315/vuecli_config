import hello from '@/components/HelloWorld.vue'
import er from '@/components/er.vue'
import san from '@/components/san.vue'
import ch from '@/components/chil.vue'
const routes = [
	{
			path: '/',
			redirect: '/home'
	},
	{
		path: '/home',
		name: 'index',
		component: hello
	},
	{
		path: '/er',
		name: 'er',
		component: er
	},
	{
		path: '/san',
		name: 'san',
		component: san
	},
	{
		path: '/user/:id',
		name: 'sanChilds',
		component: san,
		props: true,
		children: [{
				path: 'p1',
				component: ch,
				name: '1'
			},
			{
				path: 'p2',
				component: ch,
				name: '1'
			},
		]
	},
	{
		path: '/filter',
		name: 'filter',
		component: () => import('../components/filterTable')
	}
]
export default routes
