<template>
	<div class="blog-bg">
		<img src="../assets/images/hero1.jpeg" alt="" class="bg-img" />
		<div class="blog-content">
	    		<div class="title-content">
	    				<h1 class="bolg-title">Welcome to My Blog</h1>
	    		</div>
	    		<br />
	    		<span class="type"></span>
	    		<span class="typed-cursor">|</span>
</div>
<div class="mouse"><div class="scroll"></div></div>
	</div>
	
</template>

<script>
	import  '../func/Out.js'
	export default{
		name:'index',
		mounted(){
			//out.js首页文字回退效果
			$(".type").out({
				loop:true
			})
		}
	}
	
</script>

<style>

.bg-img{
		position: fixed;
        top: 0;
        left: 0;
        min-height: 100%;
        height: auto;
        min-width: 1440px;
        width: 100%;
}
.blog-content{
	position: absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	margin: auto auto;
	width: 3.5rem;
	height: 3.5rem;
	text-align: center;
	padding: .8rem;
    background: rgba(255, 255, 255, 0.8);
    outline: 4px double #FFFFFF;
    outline-offset: 8px;
}
.title-content{
	padding: .65rem 0;
	position: relative;
}
.bolg-title{
	position: absolute;
	top:50%;
	left: .2rem;
	line-height: .4rem;
	vertical-align: middle;
    letter-spacing: 0.6px;
    font-size: .3rem;
    animation: bounce 2s;
    animation-delay:.5s;
	transform-origin: center bottom;
	text-align: center;
}
.type{
	font-weight: 400;
    font-size: .25rem;
    line-height: 26px;
    letter-spacing: 1.5px;
    margin: 0 auto;
    opacity: 0.6;
}
.type i{
	font-size: .3rem;
	font-weight: 600;
}
.typed-cursor {
		width: 1px;
		height: .26rem;
		line-height: .26rem;
		background: #000000;
		opacity: 1;
		animation:cursor .8s infinite;
     }
@keyframes cursor{
	0%{opacity: 1;}
	50%{opacity: 0;}
	100%{opacity: 1;}
}
@media all and  (max-width:750px) {
	.blog-content {
		width: 2.6rem;
		height: 2.6rem;
		padding: .2rem;
	}
	.title-content {
    padding: .35rem 0;
    position: relative;
}
	.bolg-title{
		font-size: .22rem;
}
	.type{
		font-size: .1rem;
	}
}
@media all and  (max-width:375px){
	.index-link{
		width: .4rem;
	}
	.nav-btn{
		width: auto;
	}
	.nav-btn span{
		width: .25rem;
		margin: .06rem;
		text-align: center;
	}
}
</style>