var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var EditForm = React.createClass({
	render: function(){
		return(
			<div className="well">
        <h3>Edit Contact</h3>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" ref="name" onChange={this.handleChange.bind(this, 'name')} value={this.props.contactToEdit.name} className="form-control" placeholder="Add Name..."/>
            </div>
            <div className="form-group">
              <input type="text" ref="phone" className="form-control" placeholder="Add Phone..."/>
            </div>
            <div className="form-group">
              <input type="text" ref="email" className="form-control" placeholder="Add Email..."/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
			</div>
		);
	},
  handleSubmit: function(e){
    e.preventDefault();
    var contact = {
      name: this.refs.name.value.trim(),
      email: this.refs.email.value.trim(),
      phone: this.refs.phone.value.trim(),
    }
    AppActions.saveContact(contact);
  }
});

module.exports = EditForm;
