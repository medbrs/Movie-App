import React, {Component} from 'react'

class Input extends Component {
    constructor(props){
        super(props)
        
    }


    render(){
        return(
            <div className='main'>
                <input className='main-input' type='text' onChange={e => this.props.handleChange(e.target.value)}  placeholder='Type your movie' />
                <button className='main-button'>Search</button>
            </div>
        )
    }
}




export default Input;