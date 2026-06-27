import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (name.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Jenkins React Demo</h1>

      {/* Counter Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Counter</h2>
        <p data-testid="count-display">Count: {count}</p>
        <button data-testid="increment-btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button data-testid="decrement-btn" onClick={() => setCount(count - 1)} style={{ marginLeft: '1rem' }}>
          Decrement
        </button>
        <button data-testid="reset-btn" onClick={() => setCount(0)} style={{ marginLeft: '1rem' }}>
          Reset
        </button>
      </div>

      {/* Name Form Section */}
      <div>
        <h2>Greeting</h2>
        <input
          data-testid="name-input"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button data-testid="submit-btn" onClick={handleSubmit} style={{ marginLeft: '1rem' }}>
          Submit
        </button>
        {submitted && (
          <p data-testid="greeting-message">Hello, {name}!</p>
        )}
      </div>
    </div>
  )
}

export default App