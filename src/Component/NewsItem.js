import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(){
        super();
        console.log("constructor form newsitem")
    }
  render() {
    let{title,description,imgUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{height: "30rem",width: "18rem"}}>
        <img src={!imgUrl?"png-clipart-logo-font-brand-product-line-breaking-news-logo-text-rectangle.png":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem