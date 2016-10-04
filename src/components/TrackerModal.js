import React from 'react';
import { connect } from 'react-redux';
import TrackerModalTitle from './TrackerModalTitle';
import * as trackersActions from '../actions/trackersActions';

class TrackerModal extends React.Component {
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
    const action = this.props.id ? this.props.handleUpdate : this.props.handleAdd;

    return (
      <div id="tracker-modal" className="modal">
        <div className="modal-content">
          <TrackerModalTitle />
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
          <a className="modal-action modal-close waves-effect waves-light btn"
            onClick={
              (event) => {
                event.preventDefault();
                action(this.state);
              }
            }
          >
            <i className="material-icons left">
              done
            </i>
            Aceptar
          </a>

          <a className="red modal-action modal-close waves-effect waves-light btn"
            onClick={
              (event) => {
                event.preventDefault();
                this.props.handleRemove(this.state);
              }
            }
          >
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

TrackerModal.propTypes = {
  handleAdd: React.PropTypes.func,
  handleUpdate: React.PropTypes.func,
  handleRemove: React.PropTypes.func,
};

function mapStateToProps(state) {
  return state.tracker;
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: (tracker) => {
      dispatch(trackersActions.addTracker(tracker));
    },
    handleUpdate: (tracker) => {
      dispatch(trackersActions.updateTracker(tracker));
    },
    handleRemove: (tracker) => {
      dispatch(trackersActions.removeTracker(tracker));
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(TrackerModal);
