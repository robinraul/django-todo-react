import Banner from "./banner";
import PTList from "./ptlist"

import { ErrorBoundary } from "react-error-boundary";

import './App.css';


const App = () => {
  return (
    <div  className="container"> 

    <ErrorBoundary fallback={<div>Something went wrong. Please contact Support.</div>}>

      <Banner>
        <div> Physical Therapists available at Movement-X</div>
      </Banner>
      <hr className="hrClass" />
      <PTList />

    </ErrorBoundary>
      
    </div>
  );
};

export default App;

