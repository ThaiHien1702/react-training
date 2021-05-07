import { Component } from 'react';
import Navbar from './compoments/Navbar'
import Product from './compoments/Product'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          Name: 'iphon',
          Price: '15tr',
          image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg',
          status: true
        },
        {
          id: 2,
          Name: 'samsung',
          Price: '25tr',
          image: 'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600-200x200.jpg',
          status: true
        },
        {
          id: 3,
          Name: 'sony',
          Price: '5tr',
          image: 'https://www.sony.com.vn/image/93375262915162c04b81617da973a2c4?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
          status: false
        }
      ],
      isActive: true
    }

  }
  //lấy giá trị thông qua Ref(VD: lấy giá trị ô input, texarea, v.v...)
  onAddproduct = () => {
    console.log(this.refs.name.value)

  }
  onAddToCart4 = (text) => {
    console.log(text)

  }
  isOnActive = () => {

    this.setState({
      isActive: !this.state.isActive
    })
    console.log(this.state.isActive)
  }
  onAction = (text) => {
    this.setState({
      status: !text
    })
  }
  render() {

    let element = this.state.products.map((el, i) => {
      let result = ''
      if (el.status) {
        result = <Product
          key={i}
          data={el}
          onHanderChange={this.onAddToCart4}
          onAction1={this.onAction}

        ></Product>
      }
      return result
    })
    return (
      <div className="App">
        <Navbar></Navbar>

        <div className="container">

          <div className="row">

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label >Thêm sản phẩm</label>
                <input type="text" className="form-control" ref="name" placeholder="Input field" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.onAddproduct}>Luu</button>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {this.state.isActive ? element : ''}
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => { this.isOnActive(this.state.isActive) }}>Acctive</button>

          </div>

        </div>


      </div>
    )
  }
}

export default App;
