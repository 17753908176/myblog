<?php
namespace Home\Controller;
use Home\Func\JsonResult;
use Home\Model\ArticleModel;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $this ->display();
    }
}