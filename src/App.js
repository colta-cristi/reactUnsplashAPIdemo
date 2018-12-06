import React from 'react';
import SearchBar from './SearchBar';
import PhotoList from './PhotoList';

const API_KEY = '0e10b648b31843915ba0f5381f3875e31535bf4c8076c1fb24b8bb34202e088a';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            term: ''
        }
    }
//  https://api.unsplash.com/search/photos?query=coding&client_id=0e10b648b31843915ba0f5381f3875e31535bf4c8076c1fb24b8bb34202e088a
    componentDidMount() {
        if(this.state.term !== "") {
            this.fetchPhotos(this.state.term);
        } else {
            this.fetchPhotos('coding')
        }
    }

    fetchPhotos = (term) => {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${API_KEY}`)
            .then(resp => { return resp.json(); })
            .then(data => {
                this.setState({
                    photos: data.results
                });
            });
    }

    changeSearchTermState = (event) => {
        this.setState({
            term: event.target.value
        }, () => {this.state.term === "" ? this.fetchPhotos('coding') : this.fetchPhotos(this.state.term)});
    }

    render() {
        return (
            <div>
                <SearchBar changeSearchTermState={this.changeSearchTermState} value={this.state.term} />
                <PhotoList photos={this.state.photos} />
            </div>
        );
    }
}

export default App;