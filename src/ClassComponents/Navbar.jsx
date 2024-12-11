import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    constructor()
    {
        super()
        this.state={
            search:""
        }

    }

    postSearch(e){
     e.preventDefault()
     this.props.changeSearch(this.state.search)
     this.setState({search:""})
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary background sticky-top">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand text-light fs-3" to="/" onClick={()=>this.props.changeSearch("")}>NewsApp</NavLink>
                        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="material-symbols-outlined">menu</span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><NavLink className="nav-link text-light" to="/Politics" onClick={()=>this.props.changeSearch("")}>Politics</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link text-light" to="/All" onClick={()=>this.props.changeSearch("")}>All</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link text-light" to="/Crime" onClick={()=>this.props.changeSearch("")}>Crime</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link text-light" to="/Science" onClick={()=>this.props.changeSearch("")}>Science</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link text-light" to="/Technology" onClick={()=>this.props.changeSearch("")}>Technology</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link text-light" to="/Entertainment" onClick={()=>this.props.changeSearch("")}>Entertainment</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link text-light" to="/Market" onClick={()=>this.props.changeSearch("")}>Market</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link text-light" to="/Business" onClick={()=>this.props.changeSearch("")}>Business</NavLink></li>


                                <li className="nav-item"><NavLink className="nav-link text-light" to="/Sports" onClick={()=>this.props.changeSearch("")}>Sports</NavLink></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Other
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to="/Cricket"  onClick={()=>this.props.changeSearch("")}>Cricket</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Health" onClick={()=>this.props.changeSearch("")}>Health</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Farmers" onClick={()=>this.props.changeSearch("")}>Farmers</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Facts" onClick={()=>this.props.changeSearch("")}>Facts</NavLink></li>

                                        
                                        <li><NavLink className="dropdown-item" to="/International" onClick={()=>this.props.changeSearch("")}>International</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/India" onClick={()=>this.props.changeSearch("")}>India</NavLink></li>
                    
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Language
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><button onClick={()=>this.props.changeLangauge("hi")} className="dropdown-item">Hindi</button></li>
                                        <li><button onClick={()=>this.props.changeLangauge("en")} className="dropdown-item">English</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
                                <input className="form-control me-2" type="search" value={this.state.search} placeholder="Search" aria-label="Search"  name='search' onChange={(e)=>this.setState({search:e.target.value})} />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
