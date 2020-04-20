import React from 'react';

const ErrCardlist = (props) => {
    const clearButtonAction = () => {
      props.claerAction();
    };
    return (
      <div>
          {
      props.messages.map(anErr =>
        <div key={1} className="github-profile" style={{color: 'red'}}>
            {anErr.message}
            <div onClick={clearButtonAction} style={{cursor: 'pointer', color: 'blue'}} >Clear</div>
        </div>
      ) }
      </div>
    );
};

export default ErrCardlist;