import mountNativeElement from './mountNativeElement'
import mountComponent from './mountComponent'
import isFunction from './isFunctionType'

export default function mount(virtualDom, container){
  //通过virtualDom的type,判断是native还是component
  if(isFunction(virtualDom)){
    mountComponent(virtualDom, container)
  }else {
    mountNativeElement(virtualDom,container)
  }
}