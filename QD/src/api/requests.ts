// src/api/user.ts
import axios, { ResponseData } from '@/api/index'
import { AxiosPromise } from 'axios'
import Qs from 'qs'

export const post = (uri: string, data: any): AxiosPromise<ResponseData> => {
  return axios.request({
    url: uri,
    data: Qs.stringify(data),
    method: 'POST'
  })
}
export const get = (uri: string, data: any): AxiosPromise<ResponseData> => {
  return axios.request({
    url: uri + '?' + Qs.stringify(data),
    method: 'GET'
  })
}
