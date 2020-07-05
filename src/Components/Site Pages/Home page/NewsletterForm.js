import React from 'react';

class NewsletterSignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    handleChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit(event) {
        alert('Thank you for your Subscription')
    }



    render () {
    return (
        <form className="newsletterForm" onSubmit={this.handleSubmit} >
            <input
            id="email"
            name="email"
            type="email"
            required
            min="1"
            onChange={this.handleChange}
            placeholder="Enter Your Email"
            value={this.state.email}

            ></input>
            <button type="submit">Submit</button>
        </form>
    );

};

}

export default NewsletterSignUpForm;
