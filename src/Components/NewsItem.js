import React from "react";
import "./NewsItem.css";

export default function NewsItem(props) {
  let { title, author, time, source, description, imageURL, newsURL } = props;
  let publisher = (author, time) => {
    if (author) {
      return `By : ${author} on ${new Date(time).toGMTString()}`;
    } else {
      return `On ${new Date(time).toGMTString()}`;
    }
  };

  return (
    <div className="my-3">
      <div className="card cardcss">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "140px", zIndex: 1 }}
        >
          {source ? source : null}
        </span>
        <img src={imageURL} className="card-img-top" alt="FAILED TO LOAD img" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...read more</p>
          <p className="card-text">
            <small className="text-muted">{publisher(author, time)}</small>
          </p>
          <a
            rel="noreferrel"
            href={newsURL}
            target="blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
