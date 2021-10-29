// src/api/user.ts
import axios, { ResponseData } from './index'
import { AxiosPromise } from 'axios'
import Qs from 'qs'
interface LoginReqArguInterface {
    username: string;
    password: number | string
}
export const loginReq = (data: LoginReqArguInterface): AxiosPromise<ResponseData> => {
    return axios.request({
        url: '/api/user/login',
        data: Qs.stringify(data),
        method: 'POST'
    })
}
