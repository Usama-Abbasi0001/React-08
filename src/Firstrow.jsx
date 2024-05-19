

import React from 'react'

const Firstrow = () => {
  return (
    <div className="d-flex ms-5 " id="row">
  <div className="xl-col-6  ps-4">
    <div className="col-9" id="wait"> Why Wait to Connect with your favourite People?</div>
    <div className="col-7" id="now">Now its easy to join your friends & family with ka-net. Download and connect seemlessly with anyone around the world. </div>
    <div className="d-flex" id="main">
    <button type="button" class="btn btn-dark" id="set" >Download Now</button>
    <div className="d-flex" id="two-pic">
    <div><img src={require('./img/windows.png')} alt="" /></div>
    <div><img src={require('./img/Vector.png')} alt="" /></div>
    </div>
    </div>
  </div>
  <div className="col-6"><img src={require('./img/three.png')} alt="" /></div>
</div>
  );
}

export default Firstrow
