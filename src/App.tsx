import { useState } from 'react';
import { Button } from './components/button';

import { Play } from 'lucide-react';


function App() {
  const [style, setStyle] = useState<number>(0);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button size={["sm", "md", "lg"][style]} style="filled" icon={style == 2 && <Play fill="#fff" size={15} />} color="green" onClick={() => {
        let nextStyle = style + 1;
        setStyle(nextStyle % 3);
      }} dark>
        {style == 2 ? "Play" : "$69,000"}
      </Button>
    </div>
  )
}

export default App;
