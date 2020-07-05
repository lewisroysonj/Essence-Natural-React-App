import React from 'react';

import './SearchPopup.css';

export default class SearchPopup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'essence'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
    }
    



    render() {
    
        return (
            
            <div className="searchPopUpBG"  >
               <div className="searchPopUp" >
                 <form className="searchBar" onSubmit={this.handleSubmit} action="/search_results" >
                    <input id="fullName" type="text" placeholder="Search"  value={this.state.value} onChange={this.handleChange} />
                    <button className="searchSubmit" type="submit" ><i class="fas fa-search"></i></button>
                 </form>    
                 <span className="searchClose" onClick={this.props.toggle}>&times;</span>
              </div>
            </div>  
        )
    }
}