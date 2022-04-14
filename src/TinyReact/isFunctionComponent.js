import isFunction from './isFunctionType'

export default function isFunctionComponent(virtualDom){
  let type = virtualDom.type
  //必须向上查询原型对象中是否有render函数
  // 函数组件只是一个普通的 JavaScript 函数，它可以返回 JSX。
  // 类组件是一个继承 React.Component 的 JavaScript 类，它有一个render函数
  return type && isFunction(virtualDom) && !(type.prototype && type.prototype.render)
}