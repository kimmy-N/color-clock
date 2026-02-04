import { useState, useEffect } from 'react'
// Import format function from date-fns for easy date formatting
import { format } from 'date-fns'
import './App.css'

function App() {
  // useState hook to store the current date and time.
  // We initialize it with 'new Date()' to get the time right now.
  const [currentTime, setCurrentTime] = useState(new Date())

  // useEffect hook to set up a timer that updates the time.
  // The empty dependency array [] ensures this runs only once when the component mounts.
  useEffect(() => {
    const timer = setInterval(() => {
      // Update the state with the new current date/time every 1000ms (1 second)
      setCurrentTime(new Date())
    }, 1000)

    // Cleanup function: clears the interval when the component unmounts
    // to prevent memory leaks.
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="clock-container">
      <h1>Dynamic Color Clock</h1>
      <div className="clock-display">
        {/* Display the date formatted as "Day, Month Date, Year" */}
        <p className="date-text">{format(currentTime, 'eeee, MMMM do, yyyy')}</p>

        {/* Display the time formatted as "Hour:Minute:Second AM/PM" */}
        <p className="time-text">{format(currentTime, 'h:mm:ss a')}</p>
      </div>
    </div>
  )
}

export default App
