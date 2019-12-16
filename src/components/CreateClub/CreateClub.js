import React, { Component } from 'react';
import "./CreateClub.css";

class CreateClub extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="signup-wrap">

        {/* INTRODCTION TO SIGN UP */}
        <section className="section container scrollspy" id="contact">
          <div className="row">
            <div className="col s12 l5">
              <h2 className="indigo-text text-darken-4 signhead">
                Create your own film club...
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
              </p>
              <p>
                Mauris dolor augue, vulputate in pharetra ac, facilisis nec
                libero. Fusce condimentum gravida urna, vitae scelerisque erat
                ornare nec.
              </p>
            </div>

            {/* title: { type: String, required: true },
  description: { type: String },
  currentTopic: { type: String },
  currentMovieURL: { type: String }, */}

            {/* SIGN UP FORM */}
            <div className="col s12 l5 offset-l2 form-wrap">
              <form>
                <div className="input-field">
                  <i className="material-icons prefix">group</i>
                  <input type="text" id="title" />
                  <label className="label" for="title">
                    Create a club title:
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">movie</i>
                  <input type="text" id="current-movie" />
                  <label className="label" for="current-movie">
                    Choose a starting movie
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">edit</i>
                  <textarea
                    id="description"
                    className="materialize-textarea"
                    cols="20"
                    rows="20"
                  ></textarea>
                  <label className="label" for="description">
                    Choose a topic for your club (this can change later). 
                  </label>
                </div>


                {/* SUBMIT BUTTON */}
                <div className="btn-wrap">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Create
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </section>
      </div>
         );
    }
}
 
export default CreateClub;