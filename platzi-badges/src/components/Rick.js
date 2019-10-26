import React from 'react';
import ReactDOM from 'react-dom';
import './styles/RickStyle.css';

import logo from '../images/logoRick.png';

function CharacterCard(props) {
    const { character } = props;

    return (
        <div className="CharacterCard"
            style={{ backgroundImage: `url(${character.image})` }}>
            <div className="CharacterCard__name-container text-truncate">
                {character.name}
            </div>
        </div>
    );
}

class Rick extends React.Component {

    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {
            results: [],
        },
    }

    componentDidMount() {
        this.fetchCharacter();
    }

    fetchCharacter = async () => {
        this.setState({
            loading: true, 
            error: null });

        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`);

            // Esto es otra función asíncrona, así que hay que esperarla
            const data = await response.json();

            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(
                        this.state.data.results, data.results
                    )
                },
                nextPage: this.state.nextPage + 1,
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }

    render() {

        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }

        return (
            <div className="container">
                <div className="App">
                    <img src={logo} alt="Rick and Morty" className="Logo" />

                    <ul className="row">
                        {this.state.data.results.map(character => (
                            <li className="col-6 col-md-3" key={character.id}>
                                <CharacterCard character={character} />
                            </li>
                        ))}
                    </ul>

                    {this.state.loading && <p className="text-center">Loading...</p>}


                    {!this.state.loading && (
                        <button onClick={() => this.fetchCharacter()}>Load More</button>
                    )}

                </div>
            </div>
        );
    }

}

export default Rick;