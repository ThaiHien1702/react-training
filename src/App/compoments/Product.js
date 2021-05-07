import { Component } from "react";

class Product extends Component {
    //có 3 cách bắt sự kiện
    //cách 1 không chuyền tham sô phải bind function onAddToCart1
    constructor(props) {
        super(props);
        this.onAddToCart1 = this.onAddToCart1.bind(this)//bind function onAddToCart
        this.state = {
            data: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]
        }
    }
    onAddToCart1() {
        console.log(this.props.data.Name)
    }
    //cách 2 không chuyền tham số thì phải dùn arrow function
    onAddToCart2 = () => {
        console.log(this.props.data.Name)

    }
    //cách 3 có chuyền tham số
    onAddToCart3 = (text) => {
        console.log(text)
    }

    onAction1 = () => {
        let data = this.props.data.status = !this.props.data.status
        console.log(data)
    }
    render() {
        return (
            <div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt={this.props.data.Name} src={this.props.data.image} />
                        <div className="caption">
                            <h3>{this.props.data.Name}</h3>
                            <p>
                                {this.props.data.Price}
                            </p>
                            <p>
                                <a className="btn btn-primary" onClick={this.onAction1}>Action </a>
                                <a className="btn btn-default" onClick={this.onAddToCart1}>bt1</a>
                                <a className="btn btn-default" onClick={this.onAddToCart2}>bt2</a>
                                <a className="btn btn-default" onClick={() => { this.onAddToCart3(this.props.data.id) }}>bt3</a>
                                <a className="btn btn-default" onClick={() => { this.props.onHanderChange(this.state.data) }}>bt4</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Product;