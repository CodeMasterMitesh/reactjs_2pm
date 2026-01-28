import { Hello, Button } from './components/Hello.jsx';
import FragmentExample from './components/Fragment.jsx';
import React, { Fragment } from 'react';
import LoopExample from './components/LoopsInReact.jsx';
import Nav from './components/Nav.jsx';
import { EventHandling } from './components/EventHandling.jsx';
import {EventPassAsProps} from './components/EventPassAsProps.jsx';
import { EventPropagation } from './components/EventPropogation.jsx';
// function App(){
//   return(
//     <div>
//         <h1>Hello World!</h1>
//     </div>
//   )
// }

// export default App;

export const App = () => {
  return (
    <>
      <Nav />
      {/* <React.Fragment> */}
      {/* <Fragment> */}
      <>
        {/* <Hello/>
      <Hello/>
      <Button name="Google" link="https://www.google.com"/>
      <Button name="Facebook" link="https://www.facebook.com"/>
      <Button name="Twitter" link="https://www.twitter.com" />
      <Button name="LinkedIn" link="https://www.linkedin.com"/>
      <Button name="GitHub" link="https://www.github.com"/>
      <FragmentExample/> */}
        <LoopExample />
      </>
      {/* </Fragment> */}
      {/* </React.Fragment> */}
      {/* <EventHandling />
      <EventPassAsProps /> */}
      <EventPropagation />
    </>

  )

}