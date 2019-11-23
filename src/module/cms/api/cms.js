import http from './../../../base/api/public'
import querystring from 'querystring'
import query from "vue-resource/src/url/query";
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

//页面查询
export const page_list = (page,size,params) =>{
  //将json对象转成key/value对
  let query = querystring.stringify(params)
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size+'/?'+query);
}

//页面添加
export const page_add = params =>{
  //请求服务端的页面查询接口
  return http.requestPost(apiUrl+'/cms/page/add/',params);
}

//页面获取
export const page_get = id =>{
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/cms/page/get/'+id);
}

//页面编辑
export const page_edit = (id,params) =>{
  //请求服务端的页面查询接口
  return http.requestPut(apiUrl+'/cms/page/edit/'+id,params);
}

//页面删除
export const page_del = id =>{
  //请求服务端的页面查询接口
  return http.requestDelete(apiUrl+'/cms/page/delete/'+id);
}


