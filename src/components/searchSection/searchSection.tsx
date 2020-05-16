import React, { Component }from 'react';
import ResultCards from '../resultCards/resultCards';
import './searchSection.css';

class SearchSection extends Component<any, any> {

    constructor(props : any){
        super(props);
        this.state ={
            searchResults : [],
            resultText : ""
        };
    }

    getSearchResults = (event : any) => {
        event.preventDefault();
        let input : any = document.getElementById("searchInput");
        fetch('https://www.omdbapi.com/?apikey=fe374ac5&s='+input.value)
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                response.json().then((data) => {
                    console.log(data);
                    this.setState({
                        searchResults : data.Response === "True" ? data.Search : [],
                        resultText : data.Response === "True" ? data.Search.length + " results found" : "Sorry, no items found"
                    });
                });
            }).catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render(){
        return (
            <div>
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <label>Movie/TV series name</label>
                                <input type="text" className="form-control" id="searchInput" placeholder="Please enter a Movie/TV series name"/>
                            </div>
                            <div className="form-group col-md-2 searchButton">
                                <button onClick={this.getSearchResults} type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=" full-width alignCenter"><h6>{this.state.resultText}</h6></div>
                <br/>
                <div className="row mb-2 full-width">
                    { this.state.searchResults.length ? this.state.searchResults.map((movie : any)=>{
                        return <ResultCards 
                            type={movie.Type} 
                            image={movie.Poster ? movie.Poster : ""} 
                            title={movie.Title}
                            year={movie.Year}
                            imdb={movie.imdbID}/>
                    }) : ""}
                </div>
            </div>
        );
    }
}

export default SearchSection;