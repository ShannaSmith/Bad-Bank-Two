import React from 'react';
import {UserContext} from '../UserContext';
import Card from '../card';
import { getOwnPropertySymbols } from 'core-js/core/object';

function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <>
      <h5>All Data in Store</h5>
      {JSON.stringify(ctx)}<br/>
      </>
    );
  }
 export default AllData; 