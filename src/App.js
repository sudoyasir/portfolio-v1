import Main from './Main';
import '../src/index.css'
import '../src/App.css'
import React, {useState, useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <>
    {
      loading ?(
        <div className='App'>
          <HashLoader
          color={'#18d26d'}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
        )
      
        : <Main />

    }
    
      
    </>
  );
}

export default App;