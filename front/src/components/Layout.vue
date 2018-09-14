<template>
  <div class="Layout" >
  	<!--preload-->
  	<div id="preloader" style="display: block;">
  		<div id="status" style="display: block;">
  			<img src="../assets/images/logo-big.png" alt="" />
  		</div>
  	</div>
    	<div class="app-header clearfix">
    		<div class="header-content">
		    			<router-link  to="/">
			  		<img class="index-link" src="../assets/images/logo.png" alt="" />
							</router-link>
							<!--nav-->
							<button class="nav-btn">
								<span></span>
								<span></span>
								<span></span>
							</button>
    					<!--隐藏的导航-->
							<ul class="nav-content" >
								<li><span id="close-btn">x</span></li>
    						<li class="nav-item"><router-link  to="/"  @click.native="closeNav"> <span></span>首页</router-link></li>
    						<li class="nav-item"><router-link  to="/Note" @click.native="closeNav"><span></span>个人笔记</router-link></li>
    						<li class="nav-item"><router-link  to="/Common" @click.native="closeNav"><span></span>常用链接</router-link></li>
    						<li class="nav-item"><router-link  to="/Share" @click.native="closeNav"><span></span>百度分享</router-link></li>
    					</ul>
    		</div>
    	</div>
	    <div class="app-content">
	    	  <router-view></router-view>
	    </div>
	    <!--<div class="app-footer">footer</div>-->
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

 methods:{
 	//关闭导航
	closeNav:function(){
		$('.nav-content').removeClass('nav-content-active');
	}
}
}

$(function(){
	 //preloader
	 /**
	  *预加载动画 
	  */
	 $("#status").fadeOut();
    $("#preloader").delay(300).fadeOut("slow");
    /**
     *	导航栏显示隐藏 
     */
    $('.nav-btn').click(function(){
    	$('.nav-content').addClass('nav-content-active');
    });
    $('#close-btn').click(function(){
    	$('.nav-content').removeClass('nav-content-active');
    });
    $('.nav-item a').mousemove(function(){
				$(this).find('span').css({'width':'120','opacity':1});
    });
     $('.nav-item a').mouseout(function(){
				$(this).find('span').css({'width':'20','opacity':0});
    })
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/*preloader*/
#preloader{
	  position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 999999;
}
#status {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    background-image: url('../assets/images/loader.gif');
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;
    margin: -.4rem 0 0 -1rem;
    }
#status img {
    text-align: center;
    margin-top: -.8rem;
}
    /*Layout*/
.Layout{
	width: 100%;

}
.app-header{
	position: fixed;
	top:0;
	height: .5rem;
	width: 100%;
	background: #FFFFFF;
	z-index: 100;
}
.header-content{
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.index-link{
	  padding: .06rem 0 .1rem 0;
		width: .45rem;
		display: block;
}
.nav-btn{
	display: inline-block;
	margin: .05rem 0;
	width: .8rem;
	height: .4rem;
	background: #FFFFFF;
	border: none;
	cursor: pointer;
}
.nav-btn span{
		display: block;
		width: .4rem;
		height: 2px;
		background: #000000;
		margin: .1rem auto;
}
.nav-content{
	position: absolute;
	top:0;
	right:-2.6rem;
	width:2.6rem;
	background: #2F2F2F;
	-webkit-transition: right 0.8s;
	-moz-transition: right 0.8s;
	-ms-transition: right 0.8s;
	-o-transition: right 0.8s;
	transition: right 0.8s;
	-webkit-transition-delay: 0.5s;
	-moz-transition-delay: 0.5s;
	-ms-transition-delay: 0.5s;
	-o-transition-delay: 0.5s;
	transition-delay: 0.5s;
}
.nav-content-active{
	right: 0;
	transition-timing-function: ease-in-out;
}
.nav-content li:nth-child(1){
	padding: .1rem .3rem;
	text-align: right;
	border-bottom: 1px solid #979797;
}
.nav-content li:nth-child(1) span{
	display: inline-block;
	width: .3rem;
	height: .3rem;
	cursor: pointer;
	font-size: .3rem;
	color:#FFFFFF;
	text-align: center;
	vertical-align: middle;
	transform: rotate(0deg);
	-webkit-transition: transform .5s;
	-moz-transition: transform .5s;
	-ms-transition: transform .5s;
	-o-transition: transform .5s;
	transition: transform .5s;
}
.nav-item{
	padding-left: .2rem;
	text-align: left;
	line-height: .8rem;
}
.nav-item a{
	position: relative;
	display: inline-block;
	width: 2rem;
	text-align: center;
	font-size: .16rem;
	line-height: .2rem;
	color: #979797;
	font-weight: 600;
	font-family: sans-serif;
	letter-spacing: 2px;
}

.nav-item a span{
	 position: absolute;
	 display: inline-block;
	 width: 0;
	 height: 3px;
	 background: #FFFFFF;
	 top:50%;
	 left:.4rem;
	 opacity: 0;
	 transform: scale(.9,.9);
	 transition: width .8s  ease-in-out,transform .6s ease-in-out,opacity 0.8s; 
}

/*.nav-item a span {
		display: inline-block;
		transform: scale(1,1);
}*/
/*content*/
.app-content{
	height: 100%;
}
#close-btn:hover{
	transform: rotate(90deg);
}
.mouse{	
	position: absolute;
	bottom: .3rem;
	left: 50%;
	width: .3rem;
	height: .5rem;
	background: #FFFFFF;
	opacity: .8;
	border-radius: .15rem ;
}
.scroll{
	  position: relative;
    border-radius: .1rem;
    background: #2f2f2f;
    width: 4px;
    height: .1rem;
    top: 4px;
    margin-left: auto;
    margin-right: auto;

}
.mouse .scroll {
    -webkit-animation-name: scrolling;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-play-state: running;
    animation-name: scrolling;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-play-state: running;
}

/*动画*/
@keyframes bounce {
	0%,
	20%,
	53%,
	80%,
	to {
		animation-timing-function: cubic-bezier(.215, .61, .355, 1);
		transform: translateZ(0)
	}
	40%,
	43% {
		animation-timing-function: cubic-bezier(.755, .05, .855, .06);
		transform: translate3d(0, -30px, 0)
	}
	70% {
		animation-timing-function: cubic-bezier(.755, .05, .855, .06);
		transform: translate3d(0, -15px, 0)
	}
	90% {
		transform: translate3d(0, -4px, 0)
	}
}
@-webkit-keyframes scrolling  {
  0%   { top:2px;  opacity: 0;}
  30%  { top:8px; opacity: 1;}
  100% { top:16px; opacity: 0;}
}

@keyframes scrolling  {
  0%   { top:2px;  opacity: 0;}
  30%  { top:8px; opacity: 1;}
  100% { top:16px; opacity: 0;}
}
@media only screen and (max-width: 750px) {
	.nav-content{
		width: 2rem;
	}
	.nav-content li:nth-child(1) span {
    width: .2rem;
    height: .2rem;
    cursor: pointer;
    font-size: .2rem;
}
.nav-item {
    padding-left: 0.1rem;
    text-align: left;
    line-height: .5rem;
}
.nav-item a{
	font-size: .1rem;
}
}
</style>
