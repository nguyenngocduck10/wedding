import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const useAudio = url => {
  const [audio] = useState(new Audio('https://raw.githubusercontent.com/pmq2212/hanh-phuc-quang-mai/master/music/hon_ca_yeu.mp3'));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

function App() {
  const [playing, toggle] = useAudio('https://raw.githubusercontent.com/pmq2212/hanh-phuc-quang-mai/master/music/hon_ca_yeu.mp3');
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "js/main.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="App">
      <div className="sticky-header">
        <div className="header-area header-area-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-11 col-sm-11 col-10">
                <div className="logo">
                  <h1><a href="index.html"><span>Đức&nbsp;<i className="fa fa-heart" aria-hidden="true"></i></span>Yến</a></h1>
                </div>
              </div>
              <div className="col-lg-9 d-none d-lg-block">
                <div className="main-menu">
                  <nav id="nav_mobile_menu">
                    <ul className="">
                      <li><a href="#cuple">Về Chúng mình</a></li>
                      <li><a href="#event">Địa Điểm tổ Chức</a></li>
                      <li><a href="#gallery">Ảnh Tụi Mình</a></li>
                      <li><a href="#Contact">Tham gia</a></li>
                      <li><a href="#Gift">Lời nhắn</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12 d-block d-lg-none">
                <div id="mobile_menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Swiper className="slider-area slider-style-2 slider-two parallax">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper> */}
      <div className="slider-area slider-style-2 slider-two parallax">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="single-slider swiper-slide">
              <div className="container">
                <div className="slider-content sd-default-content">
                  <div className="col-lg-12 slider-content--inner"></div>
                </div>
              </div>
            </div>
            <div className="single-slider slider-2 swiper-slide">
              <div className="container">
                <div className="slider-content sd-default-content">
                  <div className="col-lg-12 slider-content--inner"></div>
                </div>
              </div>
            </div>
            <div className="single-slider slider-3 swiper-slide">
              <div className="container">
                <div className="slider-content sd-default-content">
                  <div className="col-lg-12 slider-content--inner"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next">
            <i className="fa fa-angle-right"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="fa fa-angle-left"></i>
          </div>
        </div>
      </div>

      <div className="count-down-area">
        <section className="count-down-section section-padding parallax" data-speed="7">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 section-area">
                <div className="section-sub"></div>
                <h2 className="big"><span>Chúng mình chờ đợi.....</span> Ngày Cưới</h2>
              </div>
              <div className="col-12 col-md-8 clock-area">
                <div className="count-down-clock">
                  <div id="clock">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="cuple" className="couple-area pt--100 pb--80">
        <div className="container">
          <div className="col-l2">
            <div className="section-title text-center">
              <h2>Về chúng mình</h2>
            </div>
          </div>
          <div className="couple-item">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                <div className="couple-img">
                  {/* <Image src={hinh5} alt="" /> */}
                </div>
                <div className="couple-content  mt--30">
                  <h4>Nguyễn Thị Mai</h4>
                  <p>Hêu con của mình. Mọi người thường gọi là Mei<br />
                    Thích đọc sách, thích ăn ngon cùng với người thân-yêu.<br />
                    Và là một cô gái ấm áp.</p>
                </div>
                <div className="social-icon">
                  <ul className="d-flex">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 couple-single">
                <div className="couple-shape">
                  {/* <Image src={hinh2} alt="" /> */}
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 couple-single md-0">
                <div className="couple-img">
                  {/* <Image src={hinh6} alt="" /> */}
                </div>
                <div className="couple-content mt--30">
                  <h4>Phan Minh Quang</h4>
                  <p>Anh bạn thân ít nói, thích hành động của mình đây rồi!<br />
                    Thích nơi yên tĩnh nhưng không thích một mình.<br />
                    Khả năng đặc biệt là tích trữ nhiều năng lượng tích cực.
                  </p>
                </div>
                <div className="social-icon">
                  <ul className="d-flex">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="event" className="service-area service-area2 ptb--100">
        <div className="container">
          <div className="col-l2">
            <div className="section-title text-center">
              <h2>Địa Điểm Tổ Chức</h2>
            </div>
          </div>
          <div className="service-area-menu">
            <div className="Ceremony-wrap">
              <div className="row">
                <div className="col-lg-5">
                  <div className="ceromony-img">
                    {/* <Image src={service1} alt="" /> */}
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="ceromony-content">
                    <h3>Hôn Lễ Nhà Gái</h3>
                    <ul>
                      <li>
                        <i className="fa fa-map-marker"></i>
                        <b>Tư Gia Nữ</b><br />
                        84 Đường 10/3, TT Tiên Kỳ, Huyện Tiên Phước, Quảng Nam
                      </li>
                      <li>
                        <i className="fa fa-clock-o"></i>
                        10:30 - Thứ Sáu, Ngày 26 Tháng 8 2022
                      </li>
                    </ul>
                    <a target="noreferrer" href="https://www.google.com/maps/dir/?api=1&amp;destination=15.489878933773175, 108.30465956409975">
                      Dẫn đường
                      <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-7">
                <div className="ceromony-content ceromony-content2">
                  <h3>Hôn Lễ Nhà Trai</h3>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      <b>Sảnh C - Trung Tâm Tiệc Cưới Golden Phoenix</b><br />
                      A8.2 Lô 1,2 KCV Bắc Tượng Đài Đường 2/9, Q.Hải Châu, TP.Đà Nẵng
                    </li>
                    <li>
                      <i className="fa fa-clock-o"></i>
                      11:00 - Chủ Nhật, Ngày 28 Tháng 8 2022
                    </li>
                  </ul>
                  <a target="noreferrer" href="https://www.google.com/maps/dir/?api=1&amp;destination=16.045842008044517, 108.22343875656138">
                    Dẫn đường
                    <i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="ceromony-img">
                  {/* <Image src={service2} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="gallery" className="gallery-area pt--100 pb--70">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>Ảnh Của Tụi Mình</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="gallery-menu text-center">
              </div>
            </div>
          </div>
          <div className="row grid">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 grid-item Enagagement">
              <div className="gallery-single">
                <a href="img/gallery/enagagement/1.jpg" className="expand-img">
                  {/* <Image src={hinh7} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Pre-Wedding">
              <div className="gallery-single">
                <a href="img/gallery/pre-wedding/2.jpg" className="expand-img">
                  {/* <Image src={hinh8} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Pre-Wedding">
              <div className="gallery-single">
                <a href="img/gallery/pre-wedding/3.jpg" className="expand-img">
                  {/* <Image src={hinh9} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 grid-item Pre-Wedding">
              <div className="gallery-single">
                <a href="img/gallery/pre-wedding/1.jpg" className="expand-img">
                  {/* <Image src={hinh10} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Pre-Wedding">
              <div className="gallery-single">
                <a href="img/gallery/pre-wedding/4.jpg" className="expand-img">
                  {/* <Image src={hinh11} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Enagagement">
              <div className="gallery-single">
                <a href="img/gallery/enagagement/3.jpg" className="expand-img">
                  {/* <Image src={hinh12} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Enagagement">
              <div className="gallery-single">
                <a href="img/gallery/enagagement/4.jpg" className="expand-img">
                  {/* <Image src={hinh13} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Enagagement">
              <div className="gallery-single">
                <a href="img/gallery/enagagement/5.jpg" className="expand-img">
                  {/* <Image src={hinh14} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Pre-Wedding">
              <div className="gallery-single">
                <a href="img/gallery/pre-wedding/5.jpg" className="expand-img">
                  {/* <Image src={hinh15} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Parties">
              <div className="gallery-single">
                <a href="img/gallery/parties/1.jpg" className="expand-img">
                  {/* <Image src={hinh16} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Enagagement">
              <div className="gallery-single">
                <a href="img/gallery/enagagement/2.jpg" className="expand-img">
                  {/* <Image src={hinh17} alt="" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Parties">
              <div className="gallery-single">
                <a href="img/gallery/parties/2.jpg" className="expand-img">
                  {/* <Image src={hinh18} alt="" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Contact" className="guest-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-2">
              <div className="guest-wrap">
                <div className="col-12">
                  <div className="section-title section-title4 text-center">
                    <h2>Bạn tham gia cùng tụi mình chứ?</h2>
                    <p>Vui lòng để lại thông tin của bạn trước ngày 20-08-2022.</p>
                  </div>
                </div>
                <div className="contact-form form-style">
                  <form id="rsvp-form" action="" className="validate-rsvp-form" method="post">
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <input type="text" placeholder="Tên của bạn*" id="fname" name="name" />
                      </div>
                      <div className="col-12  col-sm-6">
                        <input type="text" placeholder="Email của bạn*" id="email" name="email" />
                      </div>
                      <div className="col col-sm-6">
                        <select className="form-control" name="events">
                          <option disabled selected>Bạn sẽ tham dự tiệc*</option>
                          <option>Tiệc nhà gái</option>
                          <option>Tiệc nhà trai</option>
                        </select>
                      </div>
                      <div className="col col-sm-6">
                        <select className="form-control" name="guest">
                          <option disabled selected>Số lượng người thân đi cùng*</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea className="contact-textarea" placeholder="Lời nhắn gửi của bạn" name="notes"></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button id="submit" className="submit">Gửi thông tin</button>
                        <span id="loader"><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></span>
                      </div>
                      <div className="col col-md-12 success-error-message">
                        <div id="success">Cảm ơn bạn vì đã tham gia cùng tụi mình!</div>
                        <div id="error"> Đang có lỗi trong quá trình xử lý. Xin thử lại. </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Gift" className="Gift-area pt--60 pb--30">
        <div className="container">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Đôi lời khó nói ...</h2>
              <p>Hẳn là có lý do nào đấy nên bạn không thể tham dự buổi tiệc với tụi mình được, bạn có thể gửi lời nhắn đến tụi mình tại đây</p>
            </div>
          </div>
          <div className="gift-item">
            <button data-toggle="modal" data-target="#modal-gift"><i className="fa fa-comment"></i><b>Bạn Chú Rể</b></button>
            <button data-toggle="modal" data-target="#modal-gift"><i className="fa fa-comment"></i><b>Bạn Cô Dâu</b></button>
          </div>
        </div>
        <div className="modal fade" id="modal-gift" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">

            <div className="modal-content">
              <div className="modal-header">
                <b>Lời Nhắn Gửi Của Bạn</b>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                {/* <Image src={hinh19} alt="" /> */}
                <div>
                  <b>ACB - Á Châu Bank<br />
                    230250709<br />
                    PHAN MINH QUANG</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area">
        <div className="container">
          <div className="footer-content">
            <div className="content-sub">
              <h2>Thank You</h2>
              <span>For Being With Us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="music-box music-box-2">
        <button className="music-box-toggle-btn" onClick={toggle}>
          <i className="fa fa-music" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
