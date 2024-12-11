import React, { Component } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component';
// import Silde from './Silde'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1
    }

  }
  async getAPIData() {
    this.setState({ page: 1 })
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&language=${this.props.language}&pageSize=24&page=1&sortBy=publishedAt&apiKey=084b22e133ee45ea87930f3e0844fd8e`)
    // https://newsapi.org/v2/everything?q=cricket&language=hi&sortBy=publishedAt&apiKey=084b22e133ee45ea87930f3e0844fd8e
    response = await response.json()
    if (response.status === "ok") {
      this.setState({
        articles: response.articles.filter(x => x.title !== "[Removed]"),
        totalResults: response.totalResults
      })
    }

  }

  fetchdata = async () => {

    this.setState({ page: this.state.page + 1 })
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&language=${this.props.language}&pageSize=24&page=${this.state.page}&sortBy=publishedAt&apiKey=084b22e133ee45ea87930f3e0844fd8e`)
    response = await response.json()
    if (response?.status === "ok")
      this.setState({
        articles: this.state.articles.concat(response.articles.filter(x => x.title !== "[Removed]"))
      })
  }

  componentDidMount() {
    this.getAPIData()
  }
  componentDidUpdate(prevPrope) {

    if (this.props !== prevPrope) {
      this.getAPIData()
    }
  }

  render() {
    return (
      <>

        <div className="container-fluid ">
          <h5 className='background text-light mt-2 text-center p-2 fs-4 text-capitalize'>{this.props.search ? this.props.search : this.props.q} Article</h5>
          <InfiniteScroll
            dataLength={this.state.articles?.length} //This is important field to render the next data
            next={this.fetchdata}
            hasMore={this.state.articles?.length < this.state.totalResults}
            loader={<div className='my-5 text-center'>
              <div className="spinner-border background " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>}>

            <div className="row">
              {
                this.state.articles?.map((item, index) => {
                  return <Newsitem key={index}
                    source={item.source.name ?? "N/A"}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    pic={item.urlToImage ?? "/image/noimage.jpeg"}
                    date={item.publishedAt}
                  />
                })
              }
            </div>
          </InfiniteScroll>
        </div >
      </>

    )
  }
}
