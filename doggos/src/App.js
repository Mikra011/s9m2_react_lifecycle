import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

const fetchDog = (breed) => {
    console.log('1: fetched');
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => res)
        .catch(err => console.log('fetch failed:', err.message))
}

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            doggos: [],
            breed: 'husky'
        }
    }

    componentDidMount() {
        console.log('3: mounted');
        fetchDog(this.state.breed).then(res => {
            this.setState({ doggos: res.data.message })
        })
    }

    searchDog = dogName => {
        console.log('search');
        fetchDog(dogName).then(res => {
            this.setState({ doggos: res.data.message, breed: dogName})
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('4: updated');
        
        if(prevState.doggos !== this.state.doggos) {
            console.log('dogs have changed');
        }

    }

    render() {
        console.log('2: rendered');
        return (
            <div>
                <h1>Doggos</h1>
                <SearchForm searchDog={this.searchDog} />
                {this.state.doggos.map((dog, index) => (
                    <img height='200' src={dog} key={index} alt={dog} />
                ))}
            </div>
        )
    }
}