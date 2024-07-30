import { useState } from 'react';
import { Button } from './components/button';

// import { Play } from 'lucide-react';

function Grid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="#cecece"
      strokeWidth="0.05"
      viewBox="0 0 24 24"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1
      }}
    >
      <path d="M0 1L24 1"></path>
      <path d="M1 0L1 24"></path>
      <path d="M0 2L24 2"></path>
      <path d="M2 0L2 24"></path>
      <path d="M0 3L24 3"></path>
      <path d="M3 0L3 24"></path>
      <path d="M0 4L24 4"></path>
      <path d="M4 0L4 24"></path>
      <path d="M0 5L24 5"></path>
      <path d="M5 0L5 24"></path>
      <path d="M0 6L24 6"></path>
      <path d="M6 0L6 24"></path>
      <path d="M0 7L24 7"></path>
      <path d="M7 0L7 24"></path>
      <path d="M0 8L24 8"></path>
      <path d="M8 0L8 24"></path>
      <path d="M0 9L24 9"></path>
      <path d="M9 0L9 24"></path>
      <path d="M0 10L24 10"></path>
      <path d="M10 0L10 24"></path>
      <path d="M0 11L24 11"></path>
      <path d="M11 0L11 24"></path>
      <path d="M0 12L24 12"></path>
      <path d="M12 0L12 24"></path>
      <g>
        <path d="M0 13L24 13"></path>
        <path d="M13 0L13 24"></path>
      </g>
      <g>
        <path d="M0 14L24 14"></path>
        <path d="M14 0L14 24"></path>
      </g>
      <g>
        <path d="M0 15L24 15"></path>
        <path d="M15 0L15 24"></path>
      </g>
      <g>
        <path d="M0 16L24 16"></path>
        <path d="M16 0L16 24"></path>
      </g>
      <g>
        <path d="M0 17L24 17"></path>
        <path d="M17 0L17 24"></path>
      </g>
      <g>
        <path d="M0 18L24 18"></path>
        <path d="M18 0L18 24"></path>
      </g>
      <g>
        <path d="M0 19L24 19"></path>
        <path d="M19 0L19 24"></path>
      </g>
      <g>
        <path d="M0 20L24 20"></path>
        <path d="M20 0L20 24"></path>
      </g>
      <g>
        <path d="M0 21L24 21"></path>
        <path d="M21 0L21 24"></path>
      </g>
      <g>
        <path d="M0 22L24 22"></path>
        <path d="M22 0L22 24"></path>
      </g>
      <g>
        <path d="M0 23L24 23"></path>
        <path d="M23 0L23 24"></path>
      </g>
    </svg>
  )
}

function App() {
  const [style, setStyle] = useState<number>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "12px", height: '100vh' }}>
      <Grid />

      <Button size="sm" color="blue">$69.99</Button>
      <Button size="md" color="red">Dangerous</Button>
      <div style={{ background: "white" }}>
        <Button size="lg" color="green" buttonStyle="bezeled">Plant</Button>
      </div>
    </div>
  )
}

export default App;
