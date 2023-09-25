import { useState } from "react"

function Events() {
  // let number = 5;
  // const handler = () => {
  //   console.log('click')
  // }

  const [number, setNumber] = useState(0)

  const logValue = (value) => {
    console.log(value)
    // number =+1
    setNumber(number + 1)
  }

  return (
    <>
      {number}
      {/* <button onClick={handler}>Press me</button> */}
      <button onClick={()=> logValue(number)}>Press me too!</button>
    </>
  )
}

export default Events