// 中英文的字符存储差异！JavaScript内部，字符以UTF-16的格式储存
var s = '𠮷'
// log(s.length) // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
t2-git checkout-b