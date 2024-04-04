import React, { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import BookCard from "./BookCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Children } from "../typees/children";


type bookCarouselProps = {
  children: Children;
  booksShown: number;
  index: number;
  handleNext: () => void;
  handlePrev: () => void;
};

const carouselStyle : React.CSSProperties = {
  margin: "20px",
  padding: "10px",
  backgroundColor: "#f2f2f2",
  boxShadow: "none",
  textAlign: 'left',
  width:'1000px',
};

const carouselButtonStyle: React.CSSProperties = {
  width: "40px",
  margin: "0px",
  padding: "0px",
  border: "none", // Add this line to remove borders
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const mainBodyStyle: React.CSSProperties = {
  flex: 1,
  border: "3px solid #d9d9d9",
  borderRadius: "10px", // Add this line to add rounded corners
  padding: "20px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const BookCarousel: React.FC<bookCarouselProps> = ({
  children,
  booksShown,
  index,
  handleNext,
  handlePrev,
}) => {
  const actualChildren = children.bookList.slice(index, index + booksShown);

  return (
    <>
      <Card title="Populært innen romaner og skjønnlitteratur 🔥" bordered={false} style={carouselStyle}>
        <Card.Grid style={carouselButtonStyle} hoverable={false}>
          {index > 0 && (
            <Button
              type="primary"
              icon={<LeftOutlined />}
              size="small"
              style={{ marginRight: "5px" }}
              onClick={handlePrev}
            />
          )}
        </Card.Grid>

        <Card.Grid style={mainBodyStyle} hoverable={false}>
          <Row wrap={false} className="grid gap-3">
            {actualChildren.map((bookTuple) => (
              <BookCard price={bookTuple[0]} image={bookTuple[1]} available={bookTuple[2]} kampanje={bookTuple[3]} />
            ))}
          </Row>
        </Card.Grid>

        <Card.Grid style={carouselButtonStyle} hoverable={false}>
          {index < children.bookList.length-1 && (
            <Button
              type="primary"
              icon={<RightOutlined />}
              size="small"
              style={{ marginRight: "5px" }}
              onClick={handleNext}
            />
          )}
        </Card.Grid>
      </Card>
    </>
  );
};

export default BookCarousel;
