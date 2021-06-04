// es export
import { a, b } from './es_a'
import * as ab from './es_a'
// es export + export default
import es_a from './es_a'
import { default as es_a_as } from './es_a'
// es export default
import * as es_d from './es_d'
// cjs exports
import cjs_a from './cjs_a'
import * as cjs_ab from './cjs_a'
// cjs module.exports
import cjs_d from './cjs_d'

// console.log('a, b', a, b)
// console.log('* as ab', ab)
// console.log('default', es_a)
// console.log('{default as es_a}', es_a_as)

// console.log('cjs_a', cjs_a)
// console.log('cjs_ab', cjs_ab)

// console.log('* as es_d', es_d)
// console.log('cjs_d', cjs_d)
