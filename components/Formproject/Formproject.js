/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import EmailField from './EmailField.js';
import s from './Formproject.css';

class Formproject extends React.Component{

  render (){
    return(
    <div className="FormProject">
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <EmailField/>
          </div>
        </div>
      </div>
    </div>
    )
  }

}

export default Formproject;
