import { PREFIX } from '@/package/utils/constant/namePrefix'

/**
 * 设置组件名称
 * @param name 组件名
 * @returns { string } 带前缀的组件名
 */
export function setCompName(name: string): string {
  return `${PREFIX}${name}`
}