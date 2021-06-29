import React from 'react';

class BadgeForm extends React.Component {
    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">FirstName</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            value={this.props.formValues.firstName}
                            name="firstName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">LastName</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="text" 
                            value={this.props.formValues.lastName}
                            name="lastName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            value={this.props.formValues.email}
                            name="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        value={this.props.formValues.jobTitle}
                        name="jobTitle"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            value={this.props.formValues.twitter}
                            name="twitter"/>
                    </div>
                    

                    <button className="btn btn-success">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;