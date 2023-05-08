import React from "react";
import { NEWS } from "../../consts/news.const";
import { Card } from "../card/Card";
import "./News.css";

function News() {
  return (
    <div className={"News"}>
      {NEWS.articles.map((item: any) => {
        return <Card card={item} />;
      })}
    </div>
  );
}

export default News;
