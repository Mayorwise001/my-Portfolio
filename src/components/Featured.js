import '../stylescss/featured.css'
import back from '../images/bck.jpg'

const Featured =()=>{
    return(
<section class="featured-projects" id="featured-projects">
  <h2>Featured Projects</h2>

  <div class="project">
    <div class="project-details">
      <h3>Blog</h3>
      <p class="subtitle">Blog Application</p>
      <p>
        A blogging application developed with React, Node.js, and Express. The
        backend features a JWT authentication REST API that connects to a MongoDB database.
      </p>
      <div class="buttons">
        <a href="#" class="btn live-preview">Live Preview</a>
        <a href="#" class="btn client">Client</a>
        <a href="#" class="btn api">API</a>
      </div>
    </div>
    <div class="project-image">
      <img src={back} alt="Blog Application Preview" />
    </div>
  </div>


</section>

    )
}

export default Featured