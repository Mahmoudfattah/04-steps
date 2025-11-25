// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   return (
//     <div>
//       <Steps />
//       <StepMessage step={1}>
//         <p>Pass in content</p>
//         <p>✌️</p>
//       </StepMessage>
//       <StepMessage step={2}>
//         <p>Read children prop</p>
//         <p>😎</p>
//       </StepMessage>
//       {/* <Steps /> */}
//     </div>
//   );
// }

// function Steps() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   // const [test, setTest] = useState({ name: "Jonas" });

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }

//   function handleNext() {
//     if (step < 3) {
//       setStep((s) => s + 1);
//       // setStep((s) => s + 1);
//     }

//     // BAD PRACTICE
//     // test.name = "Fred";
//     // setTest({ name: "Fred" });
//   }

//   return (
//     <div>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>

//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <StepMessage step={step}>
//             {messages[step - 1]}
//             <div className="buttons">
//               <Button
//                 bgColor="#e7e7e7"
//                 textColor="#333"
//                 onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
//               >
//                 Learn how
//               </Button>
//             </div>
//           </StepMessage>

//           <div className="buttons">
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
//               <span>👈</span> Previous
//             </Button>

//             <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
//               Next <span>👉</span>
//               <span>🤓</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function StepMessage({ step, children }) {
//   return (
//     <div className="message">
//       <h3>Step {step}</h3>
//       {children}
//     </div>
//   );
// }

// function Button({ textColor, bgColor, onClick, children }) {
//   return (
//     <button
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }





import { useState } from "react";
const text = ["Hello Mahmoud 👋", "Welcome to MyApp 🚀", "Let's get started!"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [steps, setSteps] = useState(0);
  const [count, setCount] = useState(0);

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  const handleCountplus = () => {
    if (steps !== 0) {
      setCount((c) => c + steps);
    } else {
      setCount((c) => c + 1);
    }
  };

  const handleCountMinus = () => {
    if (steps !== 0) {
      setCount((c) => c - steps);
    } else {
      setCount((c) => c - 1);
    }
  };

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div
        style={{
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "2.25rem", fontWeight: 700 }}>{text[step]}</h1>
      </div>

      <div
        onClick={() => setIsOpen((open) => !open)}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          cursor: "pointer",
          fontSize: "2.5rem",
          lineHeight: 1,
          background: "transparent",
          border: "none",
        }}
      >
        &times;
      </div>

      {isOpen && (
        <div style={{ margin: "0.75rem 0" }}>
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step >= 1 ? "#7950f2" : "#fff",
                color: step >= 1 ? "#fff" : "#000",
                border: "1px solid #d1d5db",
                fontWeight: 600,
              }}
            >
              1
            </div>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step >= 2 ? "#7950f2" : "#fff",
                color: step >= 2 ? "#fff" : "#000",
                border: "1px solid #d1d5db",
                fontWeight: 600,
              }}
            >
              2
            </div>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step >= 3 ? "#7950f2" : "#fff",
                color: step >= 3 ? "#fff" : "#000",
                border: "1px solid #d1d5db",
                fontWeight: 600,
              }}
            >
              3
            </div>
          </div>

          <h1
            style={{
              padding: "12px 16px",
              borderRadius: 8,
              background: "#fff",
              border: "1px solid #e5e7eb",
              marginBottom: 12,
              fontSize: "1.125rem",
            }}
          >
            {text[step - 1]}
          </h1>

          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              style={{
                backgroundColor: step === 1 ? "#e7e7e7" : "#7950f2",
                color: step === 1 ? "#333" : "#fff",
                padding: "8px 12px",
                borderRadius: 6,
                border: "none",
                cursor: step === 1 ? "not-allowed" : "pointer",
              }}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={step === 3}
              style={{
                backgroundColor: step === 3 ? "#e7e7e7" : "#7950f2",
                color: step === 3 ? "#333" : "#fff",
                padding: "8px 12px",
                borderRadius: 6,
                border: "none",
                cursor: step === 3 ? "not-allowed" : "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "2.5rem",
          marginTop: 12,
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0.75rem 0",
          }}
        >
          <button
            onClick={() => setSteps((s) => s - 1)}
            style={{
              backgroundColor: "#3b82f6",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            -
          </button>

          <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Steps {steps}</h1>

          <button
            onClick={() => setSteps((s) => s + 1)}
            style={{
              backgroundColor: "#3b82f6",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <button
            onClick={handleCountMinus}
            style={{
              backgroundColor: "#3b82f6",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            -
          </button>

          <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
            Count {count}
          </h1>

          <button
            onClick={handleCountplus}
            style={{
              backgroundColor: "#3b82f6",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.125rem",
            fontWeight: 700,
            paddingTop: 12,
          }}
        >
          <span>
            {count === 0
              ? `Today is ${date.toDateString()}`
              : count > 0
              ? `${count} days from today is ${date.toDateString()}`
              : `${Math.abs(count)} days ago was ${date.toDateString()}`}
          </span>
        </div>
      </div>
    </>
  );
}



export default App;


