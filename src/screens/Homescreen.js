import React from "react";
import Product from "../components/Product";
import products from "../products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "react-rating";

const Homescreen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    centerMode: true,
    adaptiveHeight: true,
    fade: true,
    arrows: true,
    autoplaySpeed: 5000,
    className: "slides",
  };
  return (
    <div>
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div>
              <div className="row">
                <div className="col-md-12 ">
                  <div className="card p-2 m-2 main-des1">
                    <div className="row">
                      <div className="col-md-4 ">
                        <div className="mt-5">
                          <h2>{product.name}</h2>
                        </div>
                        <div className="mt-5">
                          <h1>{product.description}</h1>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <img
                          src={product.image2}
                          className="img-fluid m-3 bigimg2"
                          alt="description"
                        />
                      </div>
                      <div className="col-md-4 ">
                        <h3>Rating:</h3>
                        <Rating
                          style={{ color: "orange" }}
                          initialRating={product.rating}
                          emptySymbol="far fa-star fa-1x"
                          fullSymbol="fas fa-star fa-1x"
                          readonly={true}
                        />
                        <h3 className="mt-5 ">Available Colors</h3>
                        <div className="color-content">
                          <div className="color-groups ">
                            <div className="color color-white active-color"></div>
                            <div className="color color-black"></div>

                            <div className="color color-blue"></div>
                            <div className="color color-red"></div>
                          </div>
                        </div>

                        <h3>Available Sizes</h3>
                        <span>
                          <button className="btn btn-warning ">UK-7</button>
                        </span>
                        <span>
                          <button className="btn btn-warning m-2">UK-8</button>
                        </span>
                        <span>
                          <button className="btn btn-warning">UK-9</button>
                        </span>
                        <span>
                          <button className="btn btn-warning m-2">UK-10</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <hr />
      <div className="row justify-content-center" id={"shop"}>
        <h2>Shop</h2>
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
      <hr />
      <div className="row" id={"blog"}>
        <div className="col-md-12 ">
          <h2>Blog</h2>
          <div className=" p-2 m-2 main-des2">
            <h2>Best Running Shoes in India – Reviews & Buying Guide</h2>
            <h1>August 12,2021 Anurag</h1>
            <p>
              I love the feeling when my whole body perspires with sweat after a
              good run. In my opinion, a good pair of shoes is essential for a
              good run. We wouldn’t want a twisted or sprained ankle, would we?
              These thoughts kindled my search for the best marathon running
              shoes for men in India. No matter how you search the Internet –
              the best walking shoes, the best jogging shoes, the best sports
              shoes or best PT shoes, you will have plenty of options to
              consider. The key is to pick the one that suits best for you. Now
              that I have some insight about buying a pair of best running shoes
              for men, I have come up with an extensive guide to help you find
              your pair of sneakers.
            </p>
            <h1>Type of Running Shoes</h1>
            <p>
              Picking the right pair of shoes can be tricky. You have to
              consider the environment or the surface where you run, your
              weight, speed, body type, foot type and above all, your gait. Now,
              let’s discuss all these types further.
            </p>
            <h1>Based on Running Surface</h1>
            <p>
              Manufactures design running shoes keeping in mind what kind of
              surface you plan to run on. There is a difference in the look,
              feel and design of the shoes because road running shoes are not
              best fit for trails and vice versa. Now, let’s understand the
              purpose of these different kinds.
            </p>
            <h1>Road Running Shoes</h1>
            <p>
              These are the most common types of shoe ideal for human-made
              surfaces like the pavement, footpath or concrete roads. These are
              designed to hold the impact of the hard surfaces and have less
              wear and tear compared to the rugged trails.{" "}
            </p>
            <h1>Trail Running Shoes</h1>
            <p>
              If you frequent rough, off-road, muddy or inclined trails, this
              kind is your best pick. Trail shoes are designed for better grip,
              support and protection around your ankles. Most importantly, its
              key feature is the inclusion of a rock plate. These are made of
              plastic or carbon fibre material either embedded within the
              midsole or sandwiched between your midsole and outsole to give you
              that extra protection against small rocks and other sharp objects.
            </p>
            <h1> Daily Training shoes </h1>
            <p>
              Built to withstand the toil of daily use, these are designed to
              give you comfort around the feet; in addition, they offer you
              stability for your regular road running sessions. Suitable for
              beginners and intermediate runners, they offer a little less speed
              but are more durable.
            </p>
            <h1>Gym Shoes</h1>
            <p>
              Gym enthusiasts who like to run on a treadmill, lift weights or
              perform step aerobics prefer this type. These offer extra ankle
              support for seamless forward and backward movement. However, these
              are not the best fit for long runs or marathons.
            </p>
            <h1>Jogging Shoes </h1>
            <p>
              You need a good pair of shoes to do your traditional warm-ups to
              wake up your leg muscles. Jogging shoes can help you here. They
              offer the best cushioning, breathability and comfort.
            </p>
            <h1>Walking Shoes</h1>
            <p>
              If you are looking for a comfortable pair of shoes to take a
              stroll or walk your dog, these are the kind you need. They are
              built for comfort and are not suited for running or jogging.
              Walking shoes have less-cushioning, are flexible, but most
              importantly, do not have a flared heel.{" "}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row" id={"contact"}>
        <h2>Contact Us :</h2>
        <div className="col-md-12 ">
          <div className=" p-2 m-2 main-des3">
            <h1>Registered Office Address:</h1>
            <p>
              Buildings Alyssa, Begonia and Clover situated in Embassy Tech
              Village, Outer Ring Road, Devarabeesanahalli Village, Varthur
              Hobli, Bengaluru – 560133, India
            </p>
            <h1>CIN: U72300KA2007PTC047799</h1>
            <h1>Telephone: +91-80-61599999</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
