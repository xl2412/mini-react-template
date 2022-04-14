import mount from './mount'

export default function render(virtualDom,container,oldDom) {
  if(!oldDom){
    mount(virtualDom,container)
  }
}