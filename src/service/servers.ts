import { getCache } from '@/utils/storage';
import HTTPREQUEST from "@/service/http"

/**
 * 绑定教务系统账号
 * @param data
 * @returns
 */
export const  LoginBind = (data)=> {
  return HTTPREQUEST.post('/api/v1/account/bind',data)
}

/**
 * 获取登录状态
 * @param param
 * @returns
 */
export const getLogin = (param) => {
  return HTTPREQUEST.get('/api/v1/account/login/', {}, param)
}

/**
 * 重新获取登录状态
 * @param method
 * @param url
 * @param data
 * @param param
 * @returns
 */
export const freshLogin = (method, url, data?, param?) => {
  return HTTPREQUEST.custom(method,url,data,param)
}

/**
 * 获取首页展示的上课信息
 * @param code
 * @returns
 */
export const getToday = (code) => {
  return HTTPREQUEST.get('/api/v1/schedule/today/', {}, code)
}

/**
 * 获取公告信息
 * @returns
 */
export const getNotices = () => {
  return HTTPREQUEST.get('/api/v1/admin/notice')
}

/**
 * 获取用户信息
 * @param account
 * @returns
 */
export const getUserInfo = (account) => {
  return HTTPREQUEST.get('/api/v1/info/', {}, account)
}

/**
 * 获取课表页面需要渲染的课表信息
 * @param account
 * @returns
 */
export const getSchedule = (account) => {
  return HTTPREQUEST.get('/api/v1/schedule/', {}, account)
}

/**
 * 获取课表页面更新需要的课表信息
 * @param
 * @returns
 */
export const updateSchedule = () => {
  return HTTPREQUEST.get('/api/v1/schedule/update')
}
