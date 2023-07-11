import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    lang: "en",
    max: 3,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    lang: PropTypes.string,
  };

  constructor(props)
   /// to inherit the all properties of parent class Prototypes. we pass the props. 
   {
    super(props);
    // to initalize the state.
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
    };
    document.title = `NewsMela- ${this.props.category.charAt(0).toUpperCase()}${this.props.category.slice(1)}`;
  }
  async updateNews() {
   this.props.setProgress(10);
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}`;

   this.props.setProgress(50)
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.setState({loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading:false
    });
   
  };
  // }
  // handleNextBtn= async()=>
  // {
  //   this.setState({page:this.state.page+1})
  //   this.updateNews();

  // }

  // handlePrevBtn=async()=>
  // {
  //   this.setState({page:this.state.page-1})
  //   this.updateNews();
  // }
  render() {
    return (
      <>
        
          <h5 className="text-center" style={{ margin: '13px 0px', marginTop: '49px',color:"red" }}>NewsMela -{this.props.category.charAt(0).toUpperCase()}{this.props.category.slice(1)} Top Headlines</h5>
        
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 0}
          next={this.fetchMoreData}
          hasMore={
            this.state.articles
              ? this.state.articles.length !== this.state.totalResults
              : false 
          }
          loader={""}
        >
          <div className="container">
            <div className="row my-0">
              {this.state.articles && this.state.articles.length > 0
                ? this.state.articles.map((element) => (
                    <div className="col-md-4 my-2" key={element.url}>
                      <NewsItem
                        dateTime={element.publishedAt?element.publishedAt:""}
                        title={element.title?element.title:""}
                        description={
                          element.description
                            ? element.description.slice(0, 44)
                            : ""
                        }
                        urlToImage={element.urlToImage}
                        ImageUrl={element.url}
                      />
                    </div>
                  ))
                  : ""}
            </div>
          </div>
           
                  </InfiniteScroll>
      </>
    );
  }
}
