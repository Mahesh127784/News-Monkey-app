import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [article, setArticle] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  async function NewsUpdater() {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true);
    let data = await fetch(url);
    props.setProgress(70);
    let parseData = await data.json();
    // setLoading(false);
    setArticle(parseData.articles);
    setTotalResults(parseData.totalResults);
    props.setProgress(100);
  }

  useEffect(() => {
    NewsUpdater();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apikey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticle(article.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <div style={{ marginTop: "70px" }} className="container">
      <h2 className="text-center text-danger text-decoration-underline">
        <strong> NewsMonkey - {props.newsType}</strong>
      </h2>
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length <= totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {article.map((elem) => {
              return (
                <div className="col-md-3 my-3" key={elem.url}>
                  <NewsItem
                    title={elem.title ? elem.title.slice(0, 45) : ""}
                    description={
                      elem.description ? elem.description.slice(0, 80) : ""
                    }
                    source={elem.source.name}
                    time={elem.publishedAt}
                    author={elem.author}
                    imageURL={elem.urlToImage}
                    newsURL={elem.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
