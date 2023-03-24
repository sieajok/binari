import  './carosel.css';
import img1 from './../img/nyu.jpg'
import img2 from './../img/nyu2.jpg'
import img3 from './../img/nyu3.jpg'


function Carousel() {
  return (
  <div className="carousel">
  <div className="carousel-inner">
    <input
      className="carousel-open"
      type="radio"
      id="carousel-1"
      name="carousel"
      aria-hidden="true"
      hidden
      defaultChecked="checked"
    />
    <div className="carousel-item">
      <img src={img1} />
    </div>
    <input
      className="carousel-open"
      type="radio"
      id="carousel-2"
      name="carousel"
      aria-hidden="true"
      hidden
    />
    <div className="carousel-item">
      <img src={img2} />
    </div>
    <input
      className="carousel-open"
      type="radio"
      id="carousel-3"
      name="carousel"
      aria-hidden="true"
      hidden
    />
    <div className="carousel-item">
      <img src={img3} />
    </div>
    <label htmlFor="carousel-3" className="carousel-control prev control-1">
      ‹
    </label>
    <label htmlFor="carousel-2" className="carousel-control next control-1">
      ›
    </label>
    <label htmlFor="carousel-1" className="carousel-control prev control-2">
      ‹
    </label>
    <label htmlFor="carousel-3" className="carousel-control next control-2">
      ›
    </label>
    <label htmlFor="carousel-2" className="carousel-control prev control-3">
      ‹
    </label>
    <label htmlFor="carousel-1" className="carousel-control next control-3">
      ›
    </label>
    <ol className="carousel-indicators">
      <li>
        <label htmlFor="carousel-1" className="carousel-bullet">
          •
        </label>
      </li>
      <li>
        <label htmlFor="carousel-2" className="carousel-bullet">
          •
        </label>
      </li>
      <li>
        <label htmlFor="carousel-3" className="carousel-bullet">
          •
        </label>
      </li>
    </ol>
  </div>
</div>

  );
}

export default Carousel;
  