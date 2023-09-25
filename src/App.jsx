import MyComponent from './components/MyComponent'
import Nested from './components/Nested'
import Slots from './components/Slots'
import Proxy from './components/Proxy'
import NumberList from './components/NumberList'
import NamesList from './components/NamesList'
import Events from './components/Events'
import Game from './components/Game'

import './App.css'

function App() {
  const people = [{name: "Roger", age: 40}, {name: "James", age: 45, birthday: true}, {name: "Kate", age: 30}]
  return (
    <>
      {/* <Nested>
        <MyComponent name="Roger" age={10*4}/>
        <MyComponent name="James" age={9*5} birthday />
      </Nested>
      <Slots footer={<p>Footer</p>}>
        <MyComponent name="Kate" age="30" />
      </Slots> */}
      {/* <Proxy name="James" age={9*5} birthday/> */}
      {/* <NumberList numbers={[1,2,3,4, 6]} /> */}
      {/* <NamesList people={people}/> */}
      {/* <Events/> */}
      <Game />
    </>
  )
}

export default App
