// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }
import React from "react";
import { Card, Button, Carousel } from "react-bootstrap";

export const ProjectCard = ({ title, description, images, link }) => {
  return (
    <Card className="project-card" style={{ marginBottom: "20px" }}>
      <Carousel
        interval={null}
        indicators={false}
        style={{ marginBottom: "10px" }}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={title} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};
