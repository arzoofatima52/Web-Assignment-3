import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Products from './components/products';
function App() {


  return (
    <>

   <Navbar/>

    <div className="text img">
        <div className="sale">
            <h1><span style={{color: '#fcfcfc'}} > Ramzaan Sale Upto</span>
                <p style={{ fontSize: '10vw', color: '#FF7D7D', fontWeight: 40, margin: 0}}>
                    70% Off
                    <button className="button" id="btn" onclick="myFunction()" autofocus>Shop Now</button>
                </p>
            </h1>
        </div>
    </div>

    <div className="text-center">
        <img src="../images/hijab.png" width='50%' className="rounded mt-5 mb-5" alt="..."/>
        <img src="../images/acces.png" width='50%' className="rounded mt-5 mb-5" alt="..."/>

    </div>
    <div className="new img2">
        <div className="arrival">
            <h1><span style={{color: '#000'}}> New Arrivals</span>
                <p style={{ fontSize: '4vw', color:'#FF7D7D', fontWeight: 700, margin: 0}}>
                    #NewCollection
                    <br />
                    <button className="button">Click Here</button>
                </p>
            </h1>

        </div>
    </div>
    <div className="head" id="hed">
        <h1> Our <span style={{color :'#FF7D7D'}}> Products </span> </h1>
    </div>

  <Products/>
        <div className="all">
            <button className="button">View All Products</button>
       
    </div>
   </>
  );
}

export default App;
