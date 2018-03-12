import Axios from './config'
/** 
 * website参数有：
	TIEBA(0, "tieba"),
    WEIBO(1, "weibo"),
    YILI(2, "yili"),
    FACEBOOK(3, "facebook"),
    TWITTER(4, "twitter"),
    SINA(5, "sina"),
    HOTMAIL(6, "hotmail"),
    GMAIL(7, "gmail"),
    YAHOO(8, "yahoo"),
    WANGYI(9, "wangyi"),
  @example:  add?username=test&passwd=test123&website=weibo&tagIds=[1,3]
*/
let promotionAPI = {
  'list': (params) => Axios.get('/promotion/account/list', { params }), // 推广账户列表
  'add': (params) => Axios.post('/promotion/account/add',  params ), // 添加推广账号
  'edit': (params) => Axios.post('/promotion/account/edit', params ) // 编辑推广账号 
}

export default promotionAPI