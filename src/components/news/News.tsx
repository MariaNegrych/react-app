import React from "react";

import { NEWS } from "../../consts/news.const";
import { Card } from "../card/Card";
import "./News.css";

function News() {
  return (
    <div className={"News"}>
      {NEWS.articles.map((item: any, index) => {
        return <Card card={item} key={index} />;
      })}
    </div>
  );
}

export default News;
