/**
 * 适配器模式
 * 示例：
 * 特点：解决新老接口适配问题
 * 优点：
 * 缺点：
 */

const fetchOldApi = (function () {
  return [
    {
      name: 'apple',
      id: 11,
    },
    {
      name: 'orange',
      id: 12
    }
  ]
}())

// 适配器
const adaptor = function (oldInfo) {
  const obj = {}
  for (let item of oldInfo) {
    obj[item.name] = item.id
  }
  return obj
}

const oldApi = fetchOldApi()
const newApi = adaptor(oldApi)
console.log(oldApi, newApi);

// 新数据
// {
//   apple: 11,
//   orange: 12,
// }

