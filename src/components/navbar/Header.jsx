import React from 'react';
import {MenuItems} from './MenuItems';
import './Header.scss';

class Navbar extends React.Component {
    state = {clicked : false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i className=''></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <ul>
                            <li key={index}><a className='item.cName' href={item.url}>
                                {item.title}
                                </a>
                            </li>
                            </ul>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;