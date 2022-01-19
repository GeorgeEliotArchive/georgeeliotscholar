
import React from "react"
import '../Css/App.css';
import Markdown from 'markdown-to-jsx';


// #1
export default class Setupenv extends React.Component {
    render() {
        return (
            <div className="main_content" >
                <h1 className="background_inherd">Set Up Local Working Enivronment</h1>
            
            <p className="setupenv">                
                <SetupEnv />
            </p>
            </div>
            
        )
    }
}

class SetupEnv extends React.Component {
    constructor(props) {
        super(props)
        this.state = { md: '' }
    }
  
    async componentDidMount() {
        const file = await import(`../Md/setup.md`);
        const response = await fetch(file.default);
        const text = await response.text();
  
        this.setState({
            md: text
        })
    }
    
    render() {
        const MyParagraph = ({ children, ...props }) => (
            <div {...props}>{children}</div>
        );

        return (
            <div>         

                <Markdown 
                options={{wrapper: "pre", forceWrapper: false,forceBlock: false,
                    overrides: {
                        
                        code: {
                            component: MyParagraph,
                            props: {
                                className: 'highlight',
                            },
                        },
                    }                    
                }}
                children={this.state.md} />
            </div>
           
        )
    }
  }