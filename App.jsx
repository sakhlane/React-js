import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './assets/components/AppName'
import UserText from './assets/components/UserText'
import TextCount from './assets/components/TextCount'

function App() {
  const [count , setCount] = useState("")
   
  // pass function to a child
  const textCount = (event) => {
      setCount(event.target.value.length)
    }
  return (
    <>
      <AppName></AppName>
      <UserText onClickChange = {textCount}> </UserText>
      <TextCount count = {count}></TextCount>
    </>
  )
}

export default App
