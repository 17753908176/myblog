;(function(global, factory) {
  
  /**========================
   * 修改项目名，只在此处修改
   ========================*/
  // var projectName = '/WinGoKids';
  var projectName = '';
  
  var base = factory(projectName);
  
  // 过载基础对象到全局对象上
  global.BASE = base;
  // global.BASEURL = base.baseUrl();
  global.BASEURL = projectName;
  
  // HACK: 用require时，由于base.js在jquery之前引入，所以没有jquery对象
  // 后台不用require, 项目已经使用了$.baseUrl(),所以暂时不能去掉
  try {
    $.extend(base);
  } catch (e) {
    //用require时，不需将方法挂载在jQuery上，不需进行错误处理
  }
}(window, function(projectName) {
  /**
   * 测试地址 http://localhost:8080/jsp/login.jsp
   * @returns {string}
   */
  var base = {};
  
  //获取Host地址：'localhost:8080'
  base.baseHost = function() {
    return window.location.host;
  };
  
  //获取Url协议：'http:'
  base.baseProtocol = function() {
    return window.location.protocol;
  };
  
  //项目名，项目名后面没有 '/'，与baseUrl保持一致，并与js文件中保持一致
  base.projectName = function() {
    return projectName;
  };
  
  //获取项目的根目录：'http://localhost:8080 + 项目名'
  base.baseUrl = function() {

      return this.baseProtocol() + '//' + this.baseHost() + this.projectName();
      //return this.baseProtocol() + '//' + this.baseHost() + this.projectName()+'/index.php';
  };
  
  //获取项目的根目录：'localhost:8080 + 项目名'
  base.baseHostProject=function() {
    return this.baseHost() + this.projectName();
  };
  
  return base;
}));



