import React from "react";

export const Card = (props: any) => {
  const { card } = props;

  return (
    <div className="card" style={{ width: "18rem", margin: "5px" }}>
      <img
        className="card-img-top"
        src={card.urlToImage || undefined}
        alt="Card image"
      />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <h6 className="card-subtitle">{card.author}</h6>
        <p className="card-text">{card.content}</p>
      </div>
    </div>
  );
};
