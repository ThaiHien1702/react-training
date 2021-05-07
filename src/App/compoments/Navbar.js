import { Component } from "react";

class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-inverse">
                <a className="navbar-brand" href="#">Title</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                </ul>
            </nav>

        )
    }
}
export default Navbar