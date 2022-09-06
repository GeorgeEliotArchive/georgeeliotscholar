
/* Ongoing.js - Show "Ongoing" Page
Edited by Libo Sun, Jan 2022 
Auburn University */

import React from "react"
import '../Css/App.css';
import Markdown from 'markdown-to-jsx';


//Chronogy class intergrated and export default
export default class Ongoing extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = { 
            md: '' ,
        }
    }
    async componentDidMount() {
        this._isMounted = true;

        const file = await import(`../Md/ongoing.md`);
        const response = await fetch(file.default);
        const text = await response.text();
        if(this._isMounted){
            this.setState({
                md: text
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
      }
  
  
    render() {
        return (           
            <div className="main_content">    
                <div>
                    <Markdown children={this.state.md} />   
                </div>           
            </div>
        )
    }
  }