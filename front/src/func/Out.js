/*
 *
 * 1)先给span进行赋值
 * 2)传入一个字符串,将字符串拆分成字符
 * 3)将字符每隔.025s添加到span中，光标向后移动一个字符的位置
 * 4)字符串全部输入完之后,按每隔字符继续删除，光标向前移动一个位置
 * 5)清空完毕之后，循环进行上四步操作
 *
 * 1.初始化一个字符串，
 * 2.将这个字符串分隔之后通过outContent函数输出到页面。
 * 3.第一组字符串输出完之后紧着着输出第二组的字符串
 *
 */
(function($,window,document,undefine){
	var Out = function(el,opt){
		this.$element = el;
		this.defaults = {
			//输出字符串,默认字符串
			outStr:['my name is Post-90s!','the blog is my first project based on line!','I love my blog as I like my life!'],
			//回退速度,默认50ms
			backSpeed:50,
            //输出速度,默认100ms
			outSpeed:100,
			loop:false
		};
		this.options = $.extend({},this.defaults,opt);
		//	当结束的时候触发标识的改变,是否无限循环的标识
		this.loop = this.options.loop?this.options.loop:this.defaults.loop;
		//根据输出字符串的数组进行统计操作
	 	this.count = 0;
	 	//统计字符串输出的个数
		this.OutCount = 0;
		//false为outContent执行 true为backContent执行
        this.endFlag = true;
	 	this.backSpeed = this.options.backSpeed?this.options.backSpeed:this.defaults.backSpeed;
        this.outSpeed = this.options.outSpeed?this.options.outSpeed:this.defaults.outSpeed;
        this.contentStr = this.options.outStr?this.options.outStr:this.defaults.outStr;


        //初始化函数
        this.init(this.$element);

	};
	Out.prototype = {
		constructor:Out,
		//初始化函数
		init:function(el){
			var self = el;
			//把数组的第一组值赋值给span
			var textStr = this.defaults.outStr[0];
            //self.text(textStr);
			//调用outContent 输出文字特效
			this.outContent(el,textStr);
		},

        /**
		 * 文字回退函数
         * @param el 调用的元素
         */
		backContent:function(el){
			//初始化span
			var self = el;
			//保存this的指向
			var that = this;
            clearInterval(self.timeOut);
			self.timeOut = setInterval(function(){
				//当第一次输出与回退文字执行完后,进行判断 做count+1 将outStr[count+1]的值赋值给outContent
				if(self.text().length == 0){
					if(that.count < that.defaults.outStr.length - 1){
                        //console.log(that.count);
                        that.count = that.count+1;
                        clearInterval(self.timeOut);
                        that.endFlag = true;
                        that.outContent(el,that.defaults.outStr[that.count]);
					}
					else{
						//判断是否进行循环播放
						if(that.loop){
                            that.count = 0;
						}else{
							//如果不进行循环，则终止定时器
                            clearInterval(self.timeOut);
						}
					}

				}else{
                    self.text(self.text().substring(0,self.text().length- 1));
				}

			},this.backSpeed);
		},

        /**
		 * 输出文字
		 * @param el 调用的元素
         *
         */
		outContent:function (el,str) {
            var self = el;
			//初始化文字的时候进行输出
			//console.log(str.split(''));
			//将字符安转换为字符数组
            var charArr = str.split('');
			var that = this;

            clearInterval(self.ouTime);

			self.ouTime =  setInterval(function () {
                var text = self.text();
                if(that.endFlag){
                    if(that.OutCount < charArr.length){
                        //后期改为options里面的配置
                        self.text(text + charArr[that.OutCount]);
                        that.OutCount = that.OutCount + 1;
                    }else{
                        clearInterval(self.ouTime);
                        that.endFlag = false;
                        that.OutCount = 0;
                        that.backContent(el);
                    }
                }

            },this.outSpeed);

            //clearInterval(self.ouTime);

        }

	};
	//挂载到$的原型中，初始化实体类。
	$.fn.out = function(options){
		new Out(this,options);
	}
})($,window,document)
