<?php
/**
 * Created by PhpStorm.
 * User: Weitao.Ma
 * Date: 2018/9/13
 * Time: 19:11
 */

namespace Home\Controller;


use Think\Controller;
use Home\Func\JsonResult;
use Home\Model\ArticleModel;

class ArticleController extends Controller
{
    /**
     * url:Article/test
     */
    public  function test(){

      $articleModel = new ArticleModel();

        dump($articleModel->getArticleService());
       //dump(date('Y:m:d H:i:s'));
    }

    /**
     * url:Article/addArticle
     * 添加文章
     */
 public  function addArticle(){
     //获取前台传值
     $classify = $_REQUEST['classify'];
     $title = $_REQUEST['title'];
     $author = $_REQUEST['author'];
     $resume = $_REQUEST['resume'];
     $content = $_REQUEST['content'];
     $data = array(
         classify   =>   $classify,
         title      =>   $title,
         author     =>   $author,
         resume     =>   $resume,
         content    =>   $content,

     );
     //调用model类的添加方法
     $articleModel = new ArticleModel();
     $result = $articleModel->addArticleService($data);

     $jsonResult = new JsonResult();
     if($result){
         $jsonResult->success = true;
         $jsonResult->message = '操作成功';
     }
     $this->ajaxReturn($jsonResult,JSON);
 }
 /**
  * 获取文章列表
  *url:Article/getArticleList
  */
 public  function  getArticleList(){
     header('Access-Control-Allow-Origin:*');
// // 响应类型
     header('Access-Control-Allow-Methods:*');
// 响应头设置
     header('Access-Control-Allow-Headers:x-requested-with,content-type');

     //调用model类的获取文章方法
     $articleModel = new ArticleModel();
     $jsonResult = new JsonResult();
     $result = $articleModel->getArticleService();
     if($result){
         $jsonResult->success = true;
         $jsonResult->message = '操作成功';
         $jsonResult->data    = $result;
     }
     $this->ajaxReturn($jsonResult,JSON);
 }

    /**
     *  根据文章id删除文章逻辑删除
     */
 public  function deleteArticleById(){
    $articleModel =  new ArticleModel();
    $jsonResult = new JsonResult();
    $id = $_REQUEST['id'];
    if($id){
        $result = $articleModel->deleteArticleByIdService($id);
        $jsonResult->success = true;
        $jsonResult->message = '删除成功';
    }
    $this->ajaxReturn($jsonResult,JSON);
 }
}