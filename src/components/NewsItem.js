import React, { Component } from "react";

export default class NewsItem extends Component {
  
  render() {
    
    let {title, description,ImageUrl,urlToImage,dateTime}= this.props
    
    return (
      <div className="card">
          <img src={urlToImage?urlToImage:"https://photos.auto-moto.com/32/2023/06/photo_article/22050/120087/1200-L-fiabilit-un-rapport-accable-les-voitures-neuves.jpg"} style={{height:"9rem"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text my-0">
              {description}...</p>
             <p className="py-0 my-0"><small className="text-muted">{dateTime}</small></p>
            <a href={ImageUrl} target="_blank" rel="noreferrer" className="btn btn-info btn-sm py-0 px-1">
              Read More
            </a>
          </div>
        </div>
    );
  }
}
