import React, { Component } from 'react';
import './ThreadGallery.css'
import ThreadCard from '../ThreadCard/ThreadCard.js';

class ThreadGallery extends Component {
    state = {  }
    render() { 
      console.log(this.props.databaseUrl)
    //   const threadEls = this.state.threads.map(thread => {
    //   return <ThreadCard thread={thread} />;
    // }); 
        return ( 
            
          <div>

            <h3>Discussions</h3>

          {/* FORM FOR CREATING NEW THREAD */}
            <div id='thread-form-wrap' className='form-wrap'>


            </div>

            {/* GALLERY OF THREADS */}
            {/* {ThreadCard} */}


                
          </div>
                

         );
    }
}
 
export default ThreadGallery;