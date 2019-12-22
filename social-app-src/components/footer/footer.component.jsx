import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="container-fluid text-center py-4 position-fixed bg-dark text-light" style={{height: 56, bottom: 0}}>Footer Section</div>
            </footer>
        )
    }
}

export default Footer;