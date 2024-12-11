import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        return (
            <>
                <div className="col-xl-2 col-lg-3 col-md-4 sm-6 ">
                   <div className="card mt-3" >
                        <img src={this.props.pic} height={200} className="card-img-top" alt="..." />
                        <hr />
                        <div className="source-data p-2 ">
                            <p>{this.props.source}</p>
                            <p >{new Date(this.props.date).toLocaleDateString()}</p>
                        </div>
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <hr />
                            <p className="card-text">{this.props.description}</p>
                            <a href={this.props.url} target='_blank' rel="noreferrer"  className="btn background text-light w-100">Read Full Article</a>
                        </div>
                    </div>
                </div>
                

            </>


        )
    }
}
