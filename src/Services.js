import React from 'react';
import './Services.css';
import MyCarousel from './MyCarousel';
import img1 from './assets/images/Rectangle 4588.png';
import img2 from './assets/images/Rectangle 4588-1.png';
import img3 from './assets/images/Rectangle 4588-2.png';
import img4 from './assets/images/Rectangle 4588-4.png';
import img5 from './assets/images/Rectangle 4588-3.png';
import img6 from './assets/images/Rectangle 4588-5.png';
import img7 from './assets/images/Rectangle 4590.png';
import { Button } from 'react-bootstrap';
import card1 from './assets/images/icon1.png';
import card2 from './assets/images/icon2.png';
import card6 from './assets/images/icon3.png';

const Services = () => {
  return (
    <div className="services">
      <div>
        <MyCarousel />
      </div>
      <br />
      <br />
      <div className="container">
        <div className="our-services text-center mt-4">
          <h3>OUR SERVICES</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4  ">
          <div className="col">
            <div className="card border-light h-100">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Website Design & Development</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque vero possimus harum libero adipisci repudiandae,
                  laudantium debitis dolorem, ab optio minus doloremque,
                  distinctio sapiente!
                </p>
                <button className="btn bg-transparent align-self-end">
                  VIEW MORE &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-light h-100">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Logo & Banner Designing</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, atque velit porro, aliquam cupiditate hic
                  reprehenderit omnis ipsam doloremque nam nemo nobis in quidem.
                </p>
                <button className="btn bg-transparent align-self-end">
                  VIEW MORE &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-light h-100">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Android App Development</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae dignissimos cupiditate, optio placeat molestiae
                  quaerat! Aperiam quia delectus dolor sequi quae consequuntur
                  placeat beatae?
                </p>
                <button className="btn bg-transparent align-self-end">
                  VIEW MORE &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-light h-100">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Wordpress Development</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur possimus corporis maxime assumenda dicta ab.
                  Incidunt eligendi culpa facere magnam iure ea quia dolorem.
                </p>
                <button className="btn bg-transparent align-self-end">
                  VIEW MORE &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-light h-100">
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Content Marketing</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur optio placeat ut, ad libero eum. Eum voluptate ipsum
                  labore magni suscipit aliquid numquam dolorum.
                </p>
                <button className="btn bg-transparent align-self-end">
                  VIEW MORE &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-light h-100">
              <img src={img6} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">IOS App Development</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur optio placeat ut, ad libero eum. Eum voluptate ipsum
                  labore magni suscipit aliquid numquam dolorum.
                </p>
                <button className="btn bg-transparent align-self-end">
                  VIEW MORE &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center px-4 py-3">
          <Button style={{ borderRadius: '20px' }} size="md" variant="success">
            View More Services &gt;
          </Button>
        </div>
        <br />
        <br />
        {/* What we do section */}
        <div className="card mb-3 border-light" style={{ maxWidth: '100%' }}>
          <div className="row g-5">
            <div className="col-md-5">
              {' '}
              {/* Increase the column width */}
              <img
                src={img7}
                className="img-fluid rounded"
                alt="..."
                style={{ height: '300px', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-7">
              {' '}
              {/* Decrease the column width */}
              <div className="card-body">
                <div className="container" style={{ textAlign: 'justify' }}>
                  <h6
                    className="card-title"
                    style={{ color: '#246b3c', fontWeight: 'bold' }}
                  >
                    WHAT WE DO
                  </h6>
                  <h5 className="card-title">We Help Companies</h5>
                  <h5 className="card-title">Scale with vetted,</h5>
                  <h5 className="card-title">Expert Talent &</h5>
                  <h5 className="card-title">Resources</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit deleniti consequuntur quibusdam mollitia porro
                    itaque eaque consectetur? Ad dolor quos illo blanditiis ut
                    non.
                  </p>
                  <p className="card-text">
                    <Button
                      style={{ borderRadius: '20px', color: '#fff' }}
                      size="md"
                      variant="success"
                    >
                      Contact Us &gt;
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="our-services text-center mt-4">
          <h3>A BETTER WAY TO SCALE YOUR TEAM </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
      <br />
      <div className="talk-section">
        <div>
          <div className="cards-talk">
            <div className="flex-card">
              {/* Card 1 */}
              <div className="medium">
                <div className="card-talk-1">
                  <img src={card1} className="p-1 me-3" alt="" />
                  <div className="pt-4">
                    <h4 className="text-capitalize">
                      Talk with Our Specialists
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto totam nobis nulla facere ipsum adipisci
                      voluptatibus, error veritatis atque consectetur ab earum
                      pariatur. Sint laudantium maiores, placeat nulla assumenda
                      magni. Expedita, tempore?
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card-talk-2 medium">
                <div className="">
                  <img src={card2} className="p-1 me-3" alt="" />
                  <div className="pt-4">
                    <h4 className="text-capitalize">
                      Talk with Our Specialists
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto totam nobis nulla facere ipsum adipisci
                      voluptatibus, error veritatis atque consectetur ab earum
                      pariatur. Sint laudantium maiores, placeat nulla assumenda
                      magni. Expedita, tempore?
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="medium">
                <div className="card-talk-1">
                  <img src={card6} className="p-1 me-3 " alt="" />
                  <div className="pt-4">
                    <h4 className="text-capitalize">
                      Talk with Our Specialists
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto totam nobis nulla facere ipsum adipisci
                      voluptatibus, error veritatis atque consectetur ab earum
                      pariatur. Sint laudantium maiores, placeat nulla assumenda
                      magni. Expedita, tempore?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
