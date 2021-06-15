
const arr1 = [
  {
    name: 'a1',
    children: [
      { name: 'b1', children: [{ name: 'c1' }] },
      { name: 'b2', children: [{ name: 'c3' }, { name: 'c4' }] },
      { name: 'b3', children: [{ name: 'c6' }] },
    ],
  }
]

/**
 * 深度优先遍历
 */
function dfs(roots) {
  const result = []; // 收集每个节点
  const parseNode = item => {
    result.push(item.name);
    item.children && item.children.forEach(child => parseNode(child));
  }

  roots.forEach(item => parseNode(item)) // 如果是多个根节点需要遍历，否则直接执行 map
  return result.join(',');
}
console.log('dfs:', dfs(arr1))


/**
 * 广度优先遍历
 */
function bfs(roots) {
  let result = []; // 收集每个节点
  let queue = roots; // 附初值后，始终操作 queue
  while (queue.length > 0) {
    queue.concat([]).forEach(item => {
      queue.shift(); // 每次遍历队列时，移出自身
      result.push(item.name);
      item.children && (queue.push(...item.children)); // 将被移出的节点内的子节点放入队列中
    });
  }
  return result.join(',');
}
console.log('bfs:', bfs(arr1))