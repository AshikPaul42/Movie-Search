import React, { Component } from 'react';
import './resultCards.css'

class ResultCards extends React.Component<any, any>{
  
    constructor(props : any ){
        super(props);
    }

    render(){
        return ( 
            <div className="col-md-6">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-primary text-capitalize">{this.props.type}</strong>
                        <h3 className="mb-0 font-weight-normal">
                            <a rel="noopener noreferrer" target="_blank" className="text-dark" href={'https://www.imdb.com/title/'+this.props.imdb}>{this.props.title}</a>
                        </h3>
                        <div className="mb-1 text-muted">{this.props.year}</div>
                        {/* <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p> */}
                        <a rel="noopener noreferrer" target="_blank" href={'https://www.imdb.com/title/'+this.props.imdb}>IMDB</a>
                    </div>
                    <img src={this.props.image} className="small-img card-img-right flex-auto d-none d-md-block" data-src={this.props.image} alt="unavailable"/>
                </div>
        </div>);
  }
}

  export default ResultCards;