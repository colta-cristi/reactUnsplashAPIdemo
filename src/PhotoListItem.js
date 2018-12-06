import React from 'react';

const PhotoListItem = (props) => {
    return (
        <div>
            <img src={props.url} />
        </div>
    );
}

export default PhotoListItem;