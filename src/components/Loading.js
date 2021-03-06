import React from 'react';

function Loading() {
  return (
    <div className="row">
      <div className="col s12 center">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div><div className="gap-patch">
              <div className="circle" />
            </div><div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Loading;
