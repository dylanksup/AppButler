import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: null,
    };
  }

  selectServerType = (event) => {
    this.setState({ server: event.target.value });
    this.props.updateConfig({ server: event.target.value });
  }

  updateServerConfig = (event) => {
    let updateObj = {};
    updateObj[event.target.name] = event.target.value;
    this.props.updateConfig(updateObj);
  }

  currentServerDisplay = () => {
    switch (this.state.server) {
      case 'express':
        return (
          <div className="express">
            Port<br />
            <input type="text" name="port" onBlur={this.updateServerConfig} /><br />
            Express name
            <input type="text" name="express-instantiation"
              placeholder="app=express()"
              onBlur={this.updateServerConfig}
            />
          </div>
          );
      default:
        return (
          <div>
          </div>
          );
    }
  }

  render() {
    let currentServerDisplay = this.currentServerDisplay();
    return (
      <form action="" method="post">
        <div>
          App Name
          <input type="text" name="appName" required onBlur={this.updateServerConfig} />
        </div>
        <div>
          Server Type<br />
          <select onChange={this.selectServerType}>
            <option value="null"></option>
            <option value="express">Express</option>
          </select>
        </div>
        <hr />
        {currentServerDisplay}
      </form>
    );
  }
}

Form.propTypes = {
  updateConfig: React.PropTypes.func.isRequired,
};

export default Form;

