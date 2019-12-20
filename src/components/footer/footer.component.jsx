import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer style={{height: 56}}>
                <div className="container-fluid text-center bg-dark text-light py-3 position-fixed" style={{bottom: 0}}>CopyRight 2020</div>
            </footer>
        )
    }
}

export default Footer;