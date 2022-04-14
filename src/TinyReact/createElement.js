export default function createElement(type,props,...children){
  const childElements = [].concat(...children).reduce((result,item)=>{
    if(item !== true && item !== false && item !== null){
      if(item instanceof Object){
        result.push(item)
      }else {
        result.push(createElement('text',{textContent:item}))
      }
    }
    return result
  },[])
    return {
      type,
      props:Object.assign({children: childElements},props),
      children:childElements
    }
}