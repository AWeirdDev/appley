import { useState } from 'react';
import { Button } from './components/button';

import { Play } from 'lucide-react';


function App() {
  const [style, setStyle] = useState<number>(0);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    </div>
  )
}

export default App;
