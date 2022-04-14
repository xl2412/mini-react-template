import TinyReact from './TinyReact'
let container = document.getElementById('root')
let oldDom = null
const virtualDom = (
  <div className="container">
    <h1>hello</h1>
    <h2 data-test="test">(code)</h2>
    <div>
      qiantao <div>qiantao2</div>
    </div>
    <h3>(it will be change)</h3>
    {2==1 && <div>if 2 equal 1 show this element</div>}
    {2==2 && <div>2</div>}
    <span>this is context</span>
    <button onClick={()=>alert('hello')}>click me</button>
    <h3>this element will be delete</h3>
    2,3
    <input type="text" value="13"/>
  </div>
)

// TinyReact.render(virtualDom,container,oldDom)

// console.log(virtualDom)

//解析函数组件和类组件，本质上都是function

const Title = () => <div>hello</div>
const Header = (props) => <div>
    {props.title}
    <Title/>
</div>


// TinyReact.render(<Header title={'hello react'}/>,container)

//解析类组件
class Alert extends TinyReact.Component{
    render(){
        return <div>render class component</div>
    }
}

TinyReact.render(<Alert/>, container)

