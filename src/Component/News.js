import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
   
    constructor(){
        super();
        console.log("constructor form news")
        this.state={
             articles: [],
             loadings:false,
             page:1
        }
    
    
    }

   async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=acec8eae29374986aa69745a6e495b85&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loadings:true});
        let data =await fetch(url);
        let parsedData= await data.json();
        this.setState({articles:parsedData.articles, 
            totalArticles:parsedData.totalResults
        ,loadings:false})

    }

    handlePrevious= async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=acec8eae29374986aa69745a6e495b85&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loadings:true});
        let data =await fetch(url);
        let parsedData= await data.json();
        this.setState({
            page: this.state.page -1,
            articles: parsedData.articles,
            loadings:false
        })

    }



    handleNext= async()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pageSize)){

        }else{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=acec8eae29374986aa69745a6e495b85&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loadings:true});
        let data =await fetch(url);
        let parsedData= await data.json();
        this.setState({
            page: this.state.page +1,
            articles: parsedData.articles,
            loadings:false
        })}

    }

  render() {
    return (
      <div className='container'>
        <h2>News Freak -Top Headlines</h2>
        {this.state.loadings && <Spinner/>}
        <div className="row">
            {!this.state.loadings && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description?element.description.slice(0,80):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
            
        </div>
    <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previoue</button>

    <button  disabled= {this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
           
    </div>

      </div>
    )
  }
}

export default News


//acec8eae29374986aa69745a6e495b85