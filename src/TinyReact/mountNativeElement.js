import createDomElement from './createDomElement'

export default function mountNativeElement(virtualDom, container){
  let dom = createDomElement(virtualDom)
  container.appendChild(dom)
}