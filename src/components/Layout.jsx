import React from 'react';
import MyNavbar from './Navbar';
import Footer from './Footer'

function Layout(props) {
    return(
        <React.Fragment>
            <MyNavbar/>
            {props.children}
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;