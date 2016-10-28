import React from 'react';
import { connect } from 'react-redux';
import TrackerModalTitle from './TrackerModalTitle';
import * as trackersActions from '../actions/trackersActions';
import * as projectsActions from '../actions/projectsActions';
import * as trackerUtils from '../lib/trackerUtils';
import * as modal from '../lib/trackerModal';

class TrackerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.handleDidMount();
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.tracker);
  }
  handleValueChange(event, field) {
    const newState = this.state;
    newState[field] = event.target.value;
    this.setState({ newState });
  }
  errorMessage() {
    if (this.props.error) {
      return (
        <div className="row">
          <div className="col s12">
            <div className="card-panel red lighten-4">
              Por favor complete todos los campos del formulario.
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
  render() {
    const action = this.props.tracker._id ? this.props.handleUpdate : this.props.handleAdd;
    const hideRemove = this.props.tracker._id ? '' : 'hide';
    const errorMessage = this.errorMessage();

    return (
      <div id="tracker-modal" className="modal">
        <div className="modal-content">
          <TrackerModalTitle />
          {errorMessage}
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div id="project" className="col s12">
                  <label htmlFor="project">Proyecto</label>
                  <select className="browser-default" onChange={(e) => { this.handleValueChange(e, 'projectId'); }} value={`${this.state.projectId}`}>
                    <option value="" disabled>Elegir opción</option>
                    {
                      this.props.projects.map((project) => {
                        return (
                          <option
                            value={project._id}
                            key={project._id}
                          >
                            {project.name}
                          </option>
                        );
                      })
                    }
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
          <a className="modal-action waves-effect waves-light btn"
            onClick={
              (event) => {
                action(this.state);
              }
            }
          >
            <i className="material-icons left">
              done
            </i>
            Aceptar
          </a>

          <a className={`red modal-action modal-close waves-effect waves-light btn ${hideRemove}`}
            onClick={
              (event) => {
                event.preventDefault();
                this.props.handleRemove(this.props.tracker._id);
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
  projects: React.PropTypes.array,
  tracker: React.PropTypes.object,
  error: React.PropTypes.bool,
  handleDidMount: React.PropTypes.func,
  handleAdd: React.PropTypes.func,
  handleUpdate: React.PropTypes.func,
  handleRemove: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    tracker: state.tracker,
    error: state.tracker.error,
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDidMount: () => {
      dispatch(projectsActions.fetchProjects());
    },
    handleAdd: (state) => {

      const valid = trackerUtils.validate(state);
      if (valid) {
        dispatch(trackersActions.addTracker(
          {
            description: state.description,
            projectId: state.projectId,
            time: state.time,
          }
        ));
        modal.close();
      } else {
        dispatch(trackersActions.displayError());
      }
    },
    handleUpdate: (tracker) => {
      const valid = trackerUtils.validate(tracker);
      if (valid) {
        dispatch(trackersActions.updateTracker(tracker));
        modal.close();
      } else {
        dispatch(trackersActions.displayError());
      }
    },
    handleRemove: (trackerId) => {
      dispatch(trackersActions.removeTracker(trackerId));
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(TrackerModal);
