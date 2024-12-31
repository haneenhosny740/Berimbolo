import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ProductsPage = () => {
  // Helper function to apply discount
  const applyDiscount = (price) => (Math.random() < 0.33 ? price * 0.85 : price); // 33% chance for a 15% discount

  // Product data
  const products = [
    {
      id: 1,
      name: "Arlo Pro 4",
      price: 199.99,
      image: "../../public/images/pro4.jpg",
    },
    {
      id: 2,
      name: "Ring Stick Up Cam",
      price: 179.99,
      image: "images/ring.webp",
    },
    {
      id: 3,
      name: "Reolink Argus 3 Pro",
      price: 139.99,
      image: "images/reolink.jpg",
    },
    {
      id: 4,
      name: "SimpliSafe Wireless Alarm System",
      price: 249.99,
      image: "images/simple.jpg",
    },
    {
      id: 5,
      name: "Nest Secure Alarm System",
      price: 399.99,
      image: "images/nest.webp",
    },
    {
      id: 6,
      name: "Wyze Cam v3",
      price: 35.99,
      image: "images/wyze.jpg",
    },
    {
      id: 7,
      name: "Blink Outdoor",
      price: 99.99,
      image: "images/blink.jpg",
    },
    {
      id: 8,
      name: "Eufy Security Solo IndoorCam P24",
      price: 54.99,
      image: "images/Eufe.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {products.map((product) => {
            const discountedPrice = applyDiscount(product.price);

            return (
              <div
                key={product.id}
                className="col-12 col-lg-6 mb-4"
              >
                <div className="card shadow-lg border-light rounded">
                  <div className="row g-0">
                    <div className="col-4 d-flex align-items-center justify-content-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded-start"
                        style={{
                          maxHeight: "200px",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-between">
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        {discountedPrice !== product.price ? (
                          <>
                            <h6
                              className="text-muted text-decoration-line-through"
                              style={{ fontSize: "1.1rem" }}
                            >
                              ${product.price.toFixed(2)}
                            </h6>
                            <h5
                              className="text-success"
                              style={{
                                fontSize: "1.4rem",
                                fontWeight: "bold",
                              }}
                            >
                              ${discountedPrice.toFixed(2)}
                            </h5>
                          </>
                        ) : (
                          <h5
                            className="text-success"
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: "bold",
                            }}
                          >
                            ${product.price.toFixed(2)}
                          </h5>
                        )}
                      </div>
                      <div className="card-footer text-center">
                        <Link
                          to={`/product/${product.id}`}
                          className="btn btn-dark w-100"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
