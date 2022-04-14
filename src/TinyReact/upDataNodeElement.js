export default function upDataNodeElement(dom, virtualDom){
  const virtualProps = virtualDom.props
  Object.keys(virtualProps).forEach((itemName)=>{
    let itemValue = virtualProps[itemName]
    if(itemName.slice(0,2) === 'on'){
      //如果是onClick类型的，需要将它转换成click
      dom.addEventListener(itemName.slice(2).toLowerCase(),itemValue)
    }else if (itemName === 'value' || itemName === 'checked'){
        dom[itemName] = itemValue
    }else if(itemName !== 'children') {
      if(itemName === 'className'){
        //如果是className类型的，需要将他转换为class
        dom.setAttribute('class',itemValue)
      }else{
        //如果是其他类型，则保留
        dom.setAttribute(itemName,itemValue)
      }
    }

  })
}
