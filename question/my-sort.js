
/**
 * 快速排序
 * 思想：分治法，从中间取一个值后，对剩余节点遍历，与取出的值比较，小的放左侧数组，大的放入右侧数组。返回左中右合并后的数组。递归
 * 时间复杂度：O(N*logN)
 */
var quickSort = function (arr) {
  if (arr.length <= 1) { return arr; }
  var mIndex = Math.floor(arr.length / 2);
  var mValue = arr.splice(mIndex, 1)[0];
  // console.log('mValue: ', mIndex, mValue, arr);
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // console.log('left', left, 'right', right);
  let rlt = quickSort(left).concat(mValue, quickSort(right));
  // console.log('rlt: ', rlt);
  return rlt
};

console.log(quickSort([5, 2, 2, 9, 4]));

/**
 * 冒泡排序
 * 原理：从左侧开始，相邻元素比较，大值居右。一轮完成后，最后一个元素是最大值。第二轮时遍历到 n-1 次。
 * 时间复杂度：最好是On，最坏是On²（逆序时）
 * 图例：https://www.cnblogs.com/bigdata-stone/p/10464243.html
 */
var bubbleSort = function (arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) { // 轮
    for (var j = 0; j < len - 1 - i; j++) { // 相邻元素两两对比
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1]; // 元素交换-stat
        arr[j + 1] = arr[j];
        arr[j] = temp; // 元素交换-end
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([5, 2, 2, 9, 4]));


/**
 * 插入排序 
 * 时间复杂度，最好是On，最坏是On²（逆序时）
 * 原理：指针a从1开始，指针b从a-1开始向左
 * 示意图 https://www.runoob.com/data-structures/insertion-sort.html
 */
var insertSort = function (arr) {
  // console.log('input: ', arr);
  for (var i = 1; i < arr.length; i++) {
    let preIndex = i - 1; // 重置前者索引
    let current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      // console.log(arr);
      preIndex--; // 前移
    }
    arr[preIndex + 1] = current;
    // console.log('step: ', arr, preIndex);
  }
  // console.log('rlt: ', arr);
  return arr;
}

// console.log(insertSort([5, 2, 2, 44, 4]))

