import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
// import Silde from './Silde'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            language: "hi",
            search:""
        }
    }
    changeLangauge = (input) => {
        this.setState({ language: input })
    }
    changeSearch = (input) => {
        this.setState({ search: input })
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar changeLangauge={this.changeLangauge} changeSearch = {this.changeSearch} />

                <Routes>
                    <Route path='' element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                    <Route path='' element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                    <Route path='/Politics' element={<Home search={this.state.search} language={this.state.language} q="Politics" />} />
                    <Route path='/Crime' element={<Home search={this.state.search} language={this.state.language} q="Crime" />} />
                    <Route path='/Science' element={<Home search={this.state.search} language={this.state.language} q="Science" />} />
                    <Route path='/Technology' element={<Home search={this.state.search} language={this.state.language} q="Technology" />} />
                    <Route path='/Entertainment' element={<Home search={this.state.search} language={this.state.language} q="Entertainment" />} />
                    <Route path='/Sports' element={<Home search={this.state.search} language={this.state.language} q="Sports" />} />
                    <Route path='/Market' element={<Home search={this.state.search} language={this.state.language} q="Market" />} />
                    <Route path='/Health' element={<Home search={this.state.search} language={this.state.language} q="Health" />} />
                    <Route path='/Business' element={<Home search={this.state.search} language={this.state.language} q="Business" />} />
                    <Route path='/Farmers' element={<Home search={this.state.search} language={this.state.language} q="Farmers" />} />
                    <Route path='/Facts' element={<Home search={this.state.search} language={this.state.language} q="Facts" />} />




                    <Route path='/Cricket' element={<Home search={this.state.search} language={this.state.language} q="Cricket" />} />
                    <Route path='/International' element={<Home search={this.state.search} language={this.state.language} q="International" />} />
                    <Route path='/India' element={<Home search={this.state.search} language={this.state.language} q="India" />} />
                    <Route path='/*' element={<Home search={this.state.search} language={this.state.language} q="All" />} />


                </Routes>

                <Footer />
            </BrowserRouter>
        )
    }
}
