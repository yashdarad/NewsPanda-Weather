import './App.css';
import React, { Suspense, useState } from 'react'
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ErrorFallback from './Components/ErrorBoundary';

import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import Footer from './Components/Footer';

const TempApp = React.lazy(()=> import('./Components/Tempapp'));

const App = () => {
  const apikey="ced035a95bc948339fe954824bfbb443";
  const [progress, setProgress] = useState(0);

  const setprogress =(progress)=>{
    setProgress(progress);
  }

    return (
      <Router>
        <Navbar />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<div>Loading...</div>}>
              <TempApp/>
            </Suspense>
        </ErrorBoundary>
        
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={setprogress} apikey={apikey} key="general" category="general" pageSize={10} />
          </Route>
          <Route exact path="/business">
            <News setProgress={setprogress} apikey={apikey} key="business" category="business" pageSize={10} />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setprogress} apikey={apikey} key="entertainment" category="entertainment" pageSize={10} />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setprogress} apikey={apikey} key="sports" category="sports" pageSize={10} />
          </Route>
          <Route exact path="/science">
            <News setProgress={setprogress} apikey={apikey} key="science" category="science" pageSize={10} />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setprogress} apikey={apikey} key="technology" category="technology" pageSize={10} />
          </Route>
          <Route exact path="/health">
            <News setProgress={setprogress} apikey={apikey} key="health" category="health" pageSize={10} />
          </Route>
        </Switch>
        <Footer/>
      </Router>

    )
  
}

export default App