import React from 'react'

class SearchBar extends React.Component{
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    // onInputClick(){
    //     console.log('input is clicked')
    // }

    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)  //props.onSubmit got the reference of onSearchSubmit, 'this' is using in class based component
        // console.log(this.state.term)
    }


    render(){
        return(
            <div className="ui segment"> 
                <form onSubmit={this.onFormSubmit} className="ui form ">
                    <div className="field">
                        <label>Image Search</label>
                        <input  type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({term : e.target.value})}
                           
                            // onChange={this.onInputChange}
                            // onClick={this.onInputClick}
                            /> 
                        {/* oninputchange not gonna have paranthesis because we want to call on change of input, this is 
                        paranthesis that function will called when our component is rendered 
                        - we dont pass parathesis whenever we pass a callback function to any evet handler */}
                        
                    </div>       
                </form>   
            </div> 
        )
    }
}

export default SearchBar