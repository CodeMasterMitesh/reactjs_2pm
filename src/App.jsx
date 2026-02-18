import { Hello, Button } from './components/Hello.jsx';
import FragmentExample from './components/Fragment.jsx';
import React, { Fragment } from 'react';
import LoopExample from './components/LoopsInReact.jsx';
import Nav from './components/Nav.jsx';
import { EventHandling } from './components/EventHandling.jsx';
import {EventPassAsProps} from './components/EventPassAsProps.jsx';
import { EventPropagation } from './components/EventPropogation.jsx';
import {StateManage} from './components/State.jsx';
import StateManageWithObj from './components/StateManageWithObj.jsx';
import FormWithUseState from './components/FormWithUseState.jsx';
import UseEffectHook from './components/UseEffectHook.jsx';
import { UseEffectExample } from './components/UseEffectExample.jsx';
import { UseEffectGetCompany } from './components/UseEffectGetCompnay.jsx';
import CleanupInUseEffect from './components/CleanupInUseEffect.jsx';
import UseEffectDependancyArray from './components/UseEffectDependancyArray.jsx';
import UseIdHooks from './components/UseIdHooks.jsx';
import { PropsDrilling } from './components/PropsDrilling.jsx';
// import UseRefHook from './components/useRefHook.jsx';
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
      {/* <Nav /> */}
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
        {/* <LoopExample /> */}
      </>
      {/* </Fragment> */}
      {/* </React.Fragment> */}
      {/* <EventHandling />
      <EventPassAsProps /> */}
      {/* <EventPropagation /> */}
      {/* <StateManage /> */}
      {/* <StateManageWithObj /> */}
      {/* <FormWithUseState /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectExample/> */}
      {/* <UseEffectGetCompany /> */}
      {/* <CleanupInUseEffect /> */}
      {/* <UseEffectDependancyArray/> */}
      {/* <UseRefHook /> */}
       {/* <UseIdHooks/ > */}
       <PropsDrilling/>
    </>

  )
  
}