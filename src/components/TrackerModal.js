import React from 'react';
import { connect } from 'react-redux';
import TrackerModalTitle from './TrackerModalTitle';
import * as trackersActions from '../actions/trackersActions';
import * as projectsActions from '../actions/projectsActions';

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
  render() {
    const action = this.props.tracker._id ? this.props.handleUpdate : this.props.handleAdd;

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
          <a className="modal-action modal-close waves-effect waves-light btn"
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

          {(() => {
            if (this.props.tracker._id) {
              return (
                <a className="red modal-action modal-close waves-effect waves-light btn"
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
              );
            }

            return null;
          })()}
        </div>
      </div>
    );
  }
}

TrackerModal.propTypes = {
  projects: React.PropTypes.array,
  tracker: React.PropTypes.object,
  handleDidMount: React.PropTypes.func,
  handleAdd: React.PropTypes.func,
  handleUpdate: React.PropTypes.func,
  handleRemove: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    tracker: state.tracker,
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDidMount: () => {
      dispatch(projectsActions.fetchProjects());
    },
    handleAdd: (state) => {
      dispatch(trackersActions.addTracker(
        {
          description: state.description,
          projectId: state.projectId,
          time: state.time,
        }
      ));
    },
    handleUpdate: (tracker) => {
      dispatch(trackersActions.updateTracker(tracker));
    },
    handleRemove: (trackerId) => {
      dispatch(trackersActions.removeTracker(trackerId));
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(TrackerModal);
