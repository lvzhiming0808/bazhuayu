/*
 * @Author: lvzhiming
 * @Date: 2018-06-27 11:39:19
 * @Last Modified by: lvzhiming
 * @Last Modified time: 2018-06-27 11:26:28
 */

import { request, baseUrl } from '@/utils'
// x
 // 砍价主页banner
export const banner = async opts => await request({ ...opts }, `${baseUrl}/res/indexBanners`)
