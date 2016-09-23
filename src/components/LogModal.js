const React = require('react');

const LogModal = React.createClass ({
  propTypes: {
    handleClick: React.PropTypes.func,
    log: React.PropTypes.object,
  },
  componentDidUpdate() {
    $('#description').focus();
    $('#description').blur();
  },
  render() {
    // TODO: Yo creo que toca hacer un componente
    // que se renderice el header segun si está o no está el log.
    return (
      <div id="log-modal" className="modal">
        <div className="modal-content">
          <h4>Agregar log</h4>
          <p>Complete la siguiente información para agregar un log</p>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <label htmlFor="project">Projecto</label>
                <div id="project" className="input-field col s12">
                  <select className="browser-default" value={`${this.props.log.projectId}`} defaultValue="">
                    <option value="" disabled>Elegir opción</option>
                    <option value="1">Buen usuario</option>
                    <option value="2">Armada</option>
                    <option value="3">Zupport</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="description" className="materialize-textarea" value={this.props.log.description} />
                  <label htmlFor="description">Descripción</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="time" placeholder="2.5" type="number" step="0.1" value={this.props.log.time} />
                  <label htmlFor="time">Tiempo</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a onClick={this.props.handleClick} className="modal-action modal-close waves-effect waves-green btn-flat">
            Aceptar
          </a>
        </div>
      </div>
    );
  },
});

module.exports = LogModal;
