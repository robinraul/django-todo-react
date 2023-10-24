import Banner from "./banner";
import PTList from "./ptlist"

import './App.css';


const App = () => {
  return (
    <div  className="container"> 
      <Banner>
        <div> Physical Therapists available at Movement-X</div>
      </Banner>
      <hr className="hrClass" />
      <PTList />
      
    </div>
  );
};

export default App;

