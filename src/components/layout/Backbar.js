import React from "react";
import { withRouter } from 'react-router-dom';

const Backbar = ({history}) => {
  return (
    <div className='goback-bar'>
      <h2 onClick={() => history.goBack()}>HOME</h2>
    </div>
  );
};

export default withRouter(Backbar);
