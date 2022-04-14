import mount from './mount'
import upDataNodeElement from './upDataNodeElement'

export default function createDomElement(virtualDom){
  let dom = null
  if(virtualDom.type === 'text'){
    //创建文本
    dom = document.createTextNode(virtualDom.props.textContent)
  }else{
    //创建元素
    dom = document.createElement(virtualDom.type,virtualDom.props.textContent)
    //创建完dom对象是空的，我们需要将存在virtualDom.props中的属性还原给真实dom
    upDataNodeElement(dom, virtualDom)
  }
  virtualDom.children.map((item)=>{
    mount(item,dom)
  })

  return dom
}