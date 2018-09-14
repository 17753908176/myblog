<template>
	<div id="note">
		<div class="note-content">
			<div class="note-list">
				<article class="article-item clearfix" v-for="item in article" >
						<div class="article-title-content">
							<a href="" class="article-classify">分类<i class="classify-arrow"></i></a>
							<span class="article-classify">{{ item.classify }}</span>
							<span class="article-title">{{ item.title }}</span>
						</div>
						<a href="#"><img src="../assets/images/bw-1.png"class="article-img" alt="文章图像" /></a>
						<span class="note-resume">{{ item.resume }}</span>
						<div class="article-info-content">
							<span class="article-info-item"><i class="article-icon  article-author"></i>{{ item.author }}</span>
							<span class="article-info-item"><i class="article-icon  article-date"></i>{{ item.date }}</span>
							<span class="article-info-item"><i class="article-icon  article-brow"></i>{{ item.browse }}</span>
							<span class="article-info-item"><i class="article-icon  article-commit"></i><a href="">{{ item.commite_number }}</a></span>
							<span class="article-info-item"><i class="article-icon  article-hover"></i><a href="">{{ item.like }}</a></span>
						</div>
				</article>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Note',
        data:function(){
            //这里必须是函数！！！
            return { article: [] }
    },
        created:function(){
		    var sel = this;
		    console.log(1);
            this.$ajax({
                method:'POST',
                //http://39.105.40.137:8000/index.php/Home/Test/test
                url: '/index.php/Home/Article/getArticleList',
                data:{
                    id:1
                },
            }).
            then(function (response) {
                console.log(2);
                console.log(response.data.data);
                sel.article = response.data.data;
            }).
            catch(function (error) {
                console.log(error);
            });
            console.log(3)
        },
	}
</script>
<style>
	body{
		background: #F6F6F6;
	}
#note{
	width: 90%;
	margin: 0 auto;
	padding-top: .5rem;
	background: rgba(255,255,255,0);
	color:#000000;
}
.note-content{
	margin-top: .15rem;

}
/*文章样式*/
.note-list{
	width: 6.9rem;
	margin: 0 auto;
	background: rgba(255,255,255,0);
	z-index: -6;
	outline: 4px solid #FFFFFF;
	outline-offset: .08rem;
}
.article-item{
	position: relative;
	background: #FFFFFF;
	padding: .15rem;
	margin-top: .15rem;
}
.article-title-content{
	padding: .15rem 0;
	
}
.article-classify{
	position: relative;
	display: inline-block;
	width: .5rem;
	height: .2rem;
	color: #FFFFFF;
	background: #d9534f;
	text-align: center;
	line-height: .2rem;
}
.article-classify i{
	position: absolute;
	display: inline-block;
	width: 0;
	height: 0;
	right: -.12rem;
	top:.04rem;
	border-width: .06rem;
	border-style: dashed dashed dashed solid;
	border-color: transparent transparent transparent #d9534f;
}
.article-title{
	margin-left: .5rem;
	font-size: .2rem;
}
.article-img{
	float: left;
	display: block;
	width: 1.5rem;
	height: 1.5rem;
	z-index: 1000;
/*	-webkit-transition: all .5s ease;
    transition: all .5s ease;*/
    transform: scale(.9,.9);
	transition: transform .6s ease-in-out;
}
.article-img:hover{
	transform: scale(1,1);
}
.note-resume{
	display: inline-block;
	margin-left: .2rem;
	width: 4.8rem;
	line-height: .24rem;
	color:#777777;
}
.article-info-content{
	float: right;
	position: absolute;
	bottom: 0;
	right: 0;
	padding-bottom: .15rem;
}
.article-info-item{
	margin-right: .15rem;
	color:#777;
}
.article-icon{
	display: inline-block;
	width: .2rem;
	height: .2rem;
	vertical-align: middle;
}
.article-author{
		background: url('../assets/images/article-author.png') no-repeat center;
			background-size: cover;
}
.article-date{
		background: url('../assets/images/article-date.png') no-repeat center;
		background-size: cover;
}
.article-brow{
		background: url('../assets/images/article-brow.png') no-repeat center;
		background-size: cover;
}
.article-commit{
		background: url('../assets/images/article-commit.png') no-repeat center;
		background-size: cover;
}
.article-hover{
		background: url('../assets/images/article-hover.png') no-repeat center;
		background-size: cover;
}
@media  screen and (max-width: 750px) {
	#note{
		width: 95%;
	}
	.note-list{
		width: 100%;
	}
	.article-info-content{
		display: none;
	}
	.note-resume{
		width: 100%;
		font-size: .16rem;
		margin-left: .06rem;
	}
}
@media  screen and (max-width: 3.75rem) {
	#note{
		width: 100%;
	}
	.note-list{
		width: 100%;
	}

}
</style>