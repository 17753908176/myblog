/*
 * 1)先给span进行赋值
 * 2)传入一个字符串,将字符串拆分成字符
 * 3)将字符每隔.025s添加到span中，光标向后移动一个字符的位置
 * 4)字符串全部输入完之后,按每隔字符继续删除，光标向前移动一个位置
 * 5)清空完毕之后，循环进行上四步操作
 */
(function($,window,document,undefine){
	var Out = function(el,opt){
		this.$element = el;
		this.defaults = {
			//输出字符串,默认字符串
			outStr:['my name is Post-90s','the blog is my first project based on line','I love my blog as I like my life'],
			//输出速度,默认500ms
			speed:100,
			loop:false
		};
		this.options = $.extend({},this.defaults,opt);
		//	当结束的时候触发标识的改变,是否无限循环的标识
		this.loop = this.options.loop?this.options.loop:this.defaults.loop;
		//根据输出字符串的数组进行统计操作
	 	this.count = 0;
	 	this.speed = this.options.speed?this.options.speed:this.defaults.speed;
		//this.backContent(this.$element);
		this.backContent(this.$element);
	};
	Out.prototype = {
		constructor:Out,
		//初始化函数
		init:function(el){
			var self = el;
			//把数组的第一组值赋值给span
			self.text(this.defaults.outStr[0]);

		},
		backContent:function(el){
			//初始化span
			this.init(this.$element);
			var self = el;
			//保存this的指向
			var that = this;
			self.timeOut = setInterval(function(){
				if(self.text().length == 0){
					if(that.count <= that.defaults.outStr.length){
							that.count =	that.count+1;
					}else{
						if(that.loop){
								that.count = 0;
						}else{
							clearInterval(self.timeOut);
						}
					}
						//后期改为options里面的配置
						self.text(that.defaults.outStr[that.count]);
						//clearInterval(self.timeOut);
				}else{
					self.text(self.text().substring(0,self.text().length- 1));
				}
			},this.speed);
		}
	};
	$.fn.out = function(options){
		new Out(this,options);
	}
})($,window,document)
