import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-white p-3">All Rights Reserved 2021</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
