import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faker } from "@faker-js/faker";
import Navbar from "../components/Navbar";
import { products } from "../data/products";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    const generateOpinions = (productId) => {
      switch (productId) {
        case "1":
          setOpinions([
            {
              name: faker.person.fullName(),
              picture: faker.image.avatar(),
              text: "The Arlo Pro 4 is fantastic! 2K HDR video quality and color night vision make it a top choice for security.",
            },
            {
              name: faker.person.fullName(),
              picture: faker.image.avatar(),
              text: "I love the Arlo Pro 4! It was easy to set up, and the wireless feature makes it super flexible for outdoor use.",
            },
            {
              name: faker.person.fullName(),
              picture: faker.image.avatar(),
              text: "Great camera, the picture quality is amazing, and the color night vision works perfectly.",
            },
          ]);
          break;

        case "2":
          setOpinions([
            {
              name: faker.person.fullName(),
              picture: faker.image.avatar(),
              text: "The Ring Stick Up Cam is simple to install, and the two-way audio feature is fantastic for speaking with visitors.",
            },
            {
              name: faker.person.fullName(),
              picture: faker.image.avatar(),
              text: "Love how it integrates with Alexa. Works flawlessly for monitoring my front door and backyard.",
            },
            {
              name: faker.person.fullName(),
              picture: faker.image.avatar(),
              text: "This camera has been a solid addition to my home security setup. Clear video quality and easy access to live footage.",
            },
          ]);
          break;

        default:
          setOpinions([
            {
              name: faker.person.fullName(),
              picture: faker.image.avatar(),
              text: "This product is amazing! It changed the way I look at home security.",
            },
            {
              name: faker.person.fullName(),
              picture: faker.image.avatar(),
              text: "Such a great purchase! It made me feel a lot safer and more connected.",
            },
            {
              name: faker.person.fullName(),
              picture: faker.image.avatar(),
              text: "Highly recommend it! The quality is fantastic, and setup was a breeze.",
            },
          ]);
          break;
      }
    };

    generateOpinions(productId);
  }, [productId]);

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center text-dark mb-4">{product.name}</h2>
        <div className="row align-items-center">
          {/* Product Image */}
          <div className="col-12 col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow-lg border"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Product Details */}
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <h4 className="text-dark mb-3">
              Price: <span className="text-primary">${product.price}</span>
            </h4>
            <p className="text-secondary">{product.description || "No description available."}</p>

            {/* Customer Opinions */}
            <h5 className="text-dark mt-4">Customer Opinions:</h5>
            <ul className="list-group list-group-flush">
              {opinions.map((user, index) => (
                <li key={index} className="list-group-item d-flex align-items-center">
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="rounded-circle me-3"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div>
                    <strong>{user.name}</strong>
                    <p className="mb-0">{user.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Buy Now Button */}
            <div className="d-flex justify-content-center justify-content-md-start">
              <button className="btn btn-dark btn-lg shadow mt-4">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
