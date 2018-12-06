import React from 'react';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
    const photoItems = props.photos.map((pic) => {
        return (
            <PhotoListItem
                key={pic.urls.small} //uuid()
                url={pic.urls.small}
            />
        );
    });

    return (
        <ul>
            {photoItems}
        </ul>
    );
}

export default PhotoList;