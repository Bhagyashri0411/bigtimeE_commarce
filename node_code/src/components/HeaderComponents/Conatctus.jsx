import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

function Conatctus() {
  return (
    <div>
      <Header></Header>
      <div className="container mt-5">
        <div className="row">
          <div className="d-flex justify-content-between px-0">
            <div className="line align-self-center" />
            <div className="h4 px-3">Why Choose US </div>
            <div className="line align-self-center" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-8 ">
            <form action>
              <div className="row border p-3">
                <div className="h4 border-bottom pb-3">
                  Drop Us a Line
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-muted">Enter
                    Your Name</label>
                  <input type="text" name="name" id="name" className="form-control rounded-0" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-muted
                                    ">Enter Email</label>
                  <input type="text" name="email" id="email" className="form-control rounded-0" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label
                                    text-muted">Phone Number</label>
                  <input type="text" name="phone" id="phone" className="form-control rounded-0" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label
                                    text-muted">Message</label>
                  <textarea name="message" id="message" cols rows={5} className="form-control rounded-0" defaultValue={"                                "} />
                </div>
                <div className>
                  <button type="button" className="btn btn-dark
                                    rounded-0 text-white fw-normal px-4 py-2
                                    border-0 text-uppercase">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 ">
            {/* <div class="border"> */}
            <div className="row border p-3">
              <div className="mb-3">
                <div className="fw-semibold fs-4">Address</div>
                <div className="text-muted">123 Street Name, City,
                  Australia</div>
              </div>
              <hr />
              <div className="mb-3">
                <div className="fw-semibold fs-4">Phone</div>
                <div className="text-muted">Toll Free (123) 472-796<br />Mobile
                  : +91-9910XXXX</div>
              </div>
              <hr />
              <div className="mb-3">
                <div className="fw-semibold fs-4">Email</div>
                <div className="text-muted">mail@example.com</div>
              </div>
              <hr />
              <div className>
                <div className="fw-semibold fs-4">Working Days</div>
                <div className="text-muted">Mon - FRI / 9:30 AM - 6:30
                  PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Conatctus