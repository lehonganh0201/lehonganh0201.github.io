import "./Testimonials.scss";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="testimonials-box">
          <div className="title-monial">
            <h3>Testimonials</h3>
          </div>

          <div className="testimonials-content">
            <GoArrowLeft />
            <div className="comment-box">
              <div className="avatar">
                <img src={"https://s3-alpha-sig.figma.com/img/515d/ff9e/da4d74b6ffcfa490d831317ff20eb608?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KqdmtOzs-G35RRLgsg1RzDWeK-ilVVgVkAr654e27XwA2ArcF1qZ5xCQOTvu0j2-njRrBlSUqNSCMhZIIqoorgrsMJdLcudiKJh6ne0jwpAT~HSkvT4Ae0A4nywACpDNnGz8wbe5q6Tpv~uXICJZeYhu88E1ewpBlpXqdlRTHNJNMD~KtRMJMImyafjgR~7sT3bmURZ9Pgdhw9AZOJdj9NLD9fWsgiccGxobaAdCab8msLMtZmIvwBgHilAtU8deD3VLrXJJuiK3S6HqUEOXFyD0ChsbUoyQKrd5u6Q7hGKRBhZG2TRaCGXvJPnjt5n2XurHrWP4NLdsNYHMtdfscA__"} alt="" />
              </div>
              <div className="info">
                <div className="info-up">
                  <h5>John Fang</h5>
                  <p>wordfaang.com</p>
                </div>
                <div className="info-down">
                  <p>
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                    viverra enim erat tortor ultricies massa turpis. Arcu
                    pulvinar aenean nam laoreet nulla.
                  </p>
                </div>
              </div>
            </div>
            <GoArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
