import React from 'react'
import SpinnerComp from './SpinnerComp'



const Hoc = WrappedComponent =>{
    return props => props.isLoading ? <SpinnerComp /> : <WrappedComponent {...props}/>
}






export default Hoc;
