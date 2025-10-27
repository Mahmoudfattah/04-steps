import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }

    // BAD PRACTICE
    // test.name = "Fred";
    // setTest({ name: "Fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
/*




// import {useState} from 'react'
// const text = [
//   'Hello Mahmoud 👋',
//  'Welcome to MyApp 🚀',
//  'Let\'s get started!'
// ]

// function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);
//   const [steps, setSteps] = useState(0);
//   const [count, setCount] = useState(0);

//   const handleNext = ()=> {
//     if (step < 3) setStep((step)=> step + 1 )
//   }


// const handleCountplus = ()=>{
// if (steps !== 0) {
//   setCount((count) => count + steps);
// }
// else{
//    setCount((count) => count + 1);
// }
// }

// const handleCountMinus = ()=>{
// if (steps !== 0) {
//   setCount((count) => count - steps);
// }
// else{
//    setCount((count) => count - 1);
// }
// }

// const date = new Date('june 21 2027')
// date.setDate(date.getDate() + count)
  
//   return <>
//     {/* <div className="min-h-screen flex items-center justify-center">
//       <h1 className="text-4xl font-bold">{text[step]}</h1>
//     </div> */

//   <div className='close' onClick={() => setIsOpen((isOpen)=> !isOpen)}>&times;</div>
//   { isOpen && 
//   <div className="steps !my-3">
//     <div className="numbers">
//       <div className={step >= 1 ? 'active' : ''}>1</div>
//       <div className={step >= 2 ? 'active' : ''}>2</div>  
//       <div className={step >= 3 ? 'active' : ''}>3</div>
//     </div>

//       <h1 className="message">{text[step-1]}</h1>

//     <div className="buttons">
//       <button style={{backgroundColor: step === 1 ? '#e7e7e7' : '#7950f2', color: step === 1 ? '#333' : '#fff'}} onClick={() => setStep(step - 1)} disabled={step === 1}>previous</button>
//       <button style={{backgroundColor: step === 3 ? '#e7e7e7' : '#7950f2', color: step === 3 ? '#333' : '#fff'}} onClick={handleNext} disabled={step === 3}>next</button>
//     </div>

   
//   </div>}
//    <div className="bg-gray-100 px-10  py-10">
//     <div className='flex justify-between items-center my-3'>
//       <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={()=> setSteps((steps) => steps - 1)} >-</button>
//       <h1 className='text-2xl font-bold'>Steps {steps} </h1>
//       <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={()=> setSteps((steps) => steps + 1)}>+</button>
//       </div>
//     <div className='flex justify-between items-center'>
//       <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleCountMinus} >-</button>
//       <h1 className='text-2xl font-bold'>Count {count}</h1>
//       <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleCountplus}   >+</button>
//       </div>
//        <span className='text-2xl font-bold pt-3 text-center flex items-center justify-center '>{count === 0 ? `Today is ${date.toDateString()}` : count > 0 ? `${count} days from today is ${date.toDateString()}` : `${Math.abs(count)} days ago was ${date.toDateString()}`} </span>
//     </div>
//   </>

// }

// export default App;


