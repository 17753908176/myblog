import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Index from '@/components/Index'
import Note from '@/components/Note'
import Common from '@/components/Common'
import Content from '@/components/Content'
import Share from '@/components/Share'


Vue.use(Router);

export default new Router({
	routes: [{
		  path: '/',
		  name: 'Layout',
		  component: Layout,
		  children:[

			{
				   path: '',
				   name: 'Index',
				   component: Index,
			},
			{
					path: '/Note',
					name: 'Note',
					component: Note
			},
			{
					path: '/Common',
					name: 'Common',
					component: Common,
			},
			{
					path: '/Content',
					name: 'Content',
					component: Content,
			},
			{
					path: '/Share',
					name: 'Share',
					component: Share,
			}
		  ]
		}
	  ]
})
