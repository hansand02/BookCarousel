import React from "react";
import { Badge, Card } from "antd";
const { Meta } = Card;
type bookCardProps = {
  price: number;
  image: string;
  available: boolean;
  kampanje: boolean;
};

const BookCardContent: React.FC<bookCardProps> = ({
  price,
  image,
  available,
}) => (
  <Card
    hoverable
    style={{
      minWidth: 175,
      maxWidth: 220,
      textAlign: "left",
      backgroundColor: "transparent",
      boxShadow: "none",
    }}
    cover={
      <div
        style={{
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <img
          alt="book Image"
          src={image}
          className="book-image"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    }
    bordered={false}
  >
    {available ? (
      <Meta
        title={price + "kr"}
        className="meta-title"
        style={{ marginTop: "10px" }}
      />
    ) : (
      <button
        type="button"
        className="btn btn-info"
        style={{
          minWidth: "140px",
          maxWidth: "170px",
          marginTop: "10px",
          backgroundColor: "#155cff70",
        }}
      >
        Legg til salgs
      </button>
    )}
  </Card>
);

const BookCard: React.FC<bookCardProps> = ({
  price,
  image,
  available,
  kampanje,
}) => (
  <>
    {kampanje ? (
      <Badge.Ribbon text="Kampanje">
        <BookCardContent
          price={price}
          image={image}
          available={available}
          kampanje={kampanje}
        />
      </Badge.Ribbon>
    ) : (
      <BookCardContent
        price={price}
        image={image}
        available={available}
        kampanje={kampanje}
      />
    )}
  </>
);
export default BookCard;
