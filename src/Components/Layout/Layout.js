import React from 'react';
import Aux from '../../Hoc/Auxx';

const layout = (props) => {
  <Aux>
    <div>Toolbar, sideDrawer, backdrop</div>;<main>{props.childern}</main>
  </Aux>;
};

export default layout;
