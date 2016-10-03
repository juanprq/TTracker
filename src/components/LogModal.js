import React from 'react';
import { connect } from 'react-redux';

class LogModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }
  handleValueChange(event, field) {
    const newState = this.state;
    newState[field] = event.target.value;
    this.setState({ newState });
  }
  render() {
    // TODO: Yo creo que toca hacer un componente
    // que se renderice el header segun si está o no está el log.
    return (
      <div id="tracker-modal" className="modal">
        <div className="modal-content">
          <h4>Agregar tracker</h4>
          <p>Complete la siguiente información para agregar un tracker</p>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div id="project" className="col s12">
                  <label htmlFor="project">Proyecto</label>
                  <select className="browser-default" onChange={(e) => { this.handleValueChange(e, 'projectId'); }} value={`${this.state.projectId}`}>
                    <option value="" disabled>Elegir opción</option>
                    <option value="1">Buen usuario</option>
                    <option value="2">Armada</option>
                    <option value="3">Zupport</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="description" onChange={(e) => { this.handleValueChange(e, 'description'); }} className="materialize-textarea" value={this.state.description} placeholder="test..." />
                  <label htmlFor="description">Descripción</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="2.5" id="time" type="number" step="0.1" className="validate" onChange={(e) => { this.handleValueChange(e, 'time'); }} value={this.state.time || ''} />
                  <label htmlFor="time">Tiempo</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a onClick={this.props.handleClick} className="modal-action modal-close waves-effect waves-light btn">
            <i className="material-icons left">
              done
            </i>
            Aceptar
          </a>

          <a className="red modal-action modal-close waves-effect waves-light btn">
            <i className="material-icons left">
              delete
            </i>
            Eliminar
          </a>
        </div>
      </div>
    );
  }
}

LogModal.propTypes = {
  handleClick: React.PropTypes.func,
  tracker: React.PropTypes.object,
};

function mapStateToProps(state) {
  return state.tracker;
}

function mapDispatchToProps(dispatch) {
  return {
    save(tracker) {
      console.log(tracker);
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(LogModal);
