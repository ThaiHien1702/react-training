import './App.css';
import { Component } from 'react';
import Navbar from './compoments/Navbar'
import Product from './compoments/Product'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component{
  render(){
    let products = [
      {
        id:1,
        Name:'iphon',
        Price:'15tr',
        image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg',
        status: true
      },
      {
        id:1,
        Name:'samsung',
        Price:'25tr',
        image: 'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600-200x200.jpg',
        status: true
      }, {
        id:3,
        Name:'sony',
        Price:'5tr',
        image: 'https://www.sony.com.vn/image/93375262915162c04b81617da973a2c4?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
        status: false
      },
    ];
    let element = products.map((el, i)=>{
      let result =''
      if(el.status){
        result = <Product
        key={i}
        name={el.Name}
        price={el.Price}
        image={el.image}
        ></Product>
      }
      return result
    })
    return(
      <div className="App">
        <Navbar></Navbar>
        
        <div className="container">
          
          <div className="row">
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {
              element
              /* <Product 
              name="Iphon6s" 
              price="15tr"
              image="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg"
              ></Product>
              <Product 
              name="SamSung" 
              price="25tr"
              image="https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600-200x200.jpg"
              ></Product>
              <Product 
              name="sony" 
              price="5tr"
              image="https://www.sony.com.vn/image/93375262915162c04b81617da973a2c4?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
              ></Product> */}
              
            </div>
            
          </div>
          
        </div>
        

      </div>
    )
  }
}

export default App;
