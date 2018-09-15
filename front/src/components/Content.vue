<template>
	<div class="Content">
		<div style="margin:1rem auto; text-align: center;">后续开发，敬请期待!</div>
	</div>
</template>

<script>
	import event from '../func/event.js'
	export default{
		name:"Content",
		data:function(){
			return {
				itemArticle:null
			}
		},
		created:function(){
			
			event.$on('change',(articleData)=>{
				
				console.log(articleData);
			})
			
		}
	}
</script>

<style>
</style>