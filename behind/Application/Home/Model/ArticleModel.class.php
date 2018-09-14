<?php
/**
 * Created by PhpStorm.
 * User: Weitao.Ma
 * Date: 2018/9/13
 * Time: 18:54
 */

namespace Home\Model;


use Think\Model;

class ArticleModel extends Model
{
    //测试是否成功连接数据库
    public  function  test(){
        $result = $this->select();
        return $result;
    }

    /**
     * @param $arr
     * @return mixed 返回插入的结果
     */
    public function addArticleService($arr){
        $flag = false;
        $result = $this->add($arr);
        if($result){
            $flag = true;
        }
        return $flag;
    }

    /**
     * @return mixed 获取所有文章
     */
    public function  getArticleService(){

        $result = $this->select();

            return $result;


    }
    /**
     *
     */
    public  function  deleteArticleByIdService($articleId){
        //成功返回 1 失败返回 0
        $result = $this->delete($articleId);
        return $result;
    }
}