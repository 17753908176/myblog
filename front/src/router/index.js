import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Index from '@/components/Index'
import Note from '@/components/Note'
import Common from '@/components/Common'
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
						  component: Note,
			},
			{
					path: '/Common',
						  name: 'Common',
						  component: Common,
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
