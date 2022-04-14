import isFunctionComponent from './isFunctionComponent'
import mountNativeElement from './mountNativeElement'
import isFunction from './isFunctionType'

export default function mountComponent(virtualDom,container){
  let childComponent = null
  if(isFunctionComponent(virtualDom)){
    //是函数组件
    childComponent = buildFunEle(virtualDom)
  }else {
    //是类组件
    childComponent = buildClassEle(virtualDom)
  }
  if(isFunction(childComponent)){
    mountComponent(childComponent,container)
  }else{
    mountNativeElement(childComponent,container)
  }
}

function buildFunEle(virtualDom){
  return virtualDom.type(virtualDom.props || {})
}

function buildClassEle(virtualDom){
  //创建一个实例对象
  const nextEleObj = new virtualDom.type()
  //调用对象中的render方法，取到类组件中的内容
  const nextEle = nextEleObj.render()
  return nextEle
}