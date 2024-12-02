import '../stylescss/featured.css'
import back from '../images/bck.jpg'
import { motion } from "framer-motion";
import Inventory from '../images/InventoryMgtApp.PNG'
import JobApp from '../images/JobPortalApp.PNG'
import JobUsers from '../images//Job Posting APP.PNG'
import ShopCart from '../images/shopping cart.PNG'
import chat from '../images/mayorwise chat app.PNG'
import sceptre from '../images/sceptre chemicals.PNG'

const Featured =()=>{

    return(
<section class="featured-projects" id="featured-projects">
  <h2>Featured Projects</h2>

  <div class="project">
    <div class="project-details">
      <h3>Inventory App</h3>
      <p class="subtitle">Inventory Management Application</p>
      <p>
       This application revolutionizes inventory tracking by allowing users to effortlessly manage stock levels. Users can log the quantity of products, update totals to reflect current inventory, and make real-time adjustments. Built with a reliable backend using Express.js and Node.js, it ensures efficient processing and seamless operations. Data is securely stored with MongoDB, while the custom-designed CSS interface offers an intuitive and responsive user experience.
This tool demonstrates expertise in backend development, database integration, and UI/UX design, tailored for practical business applications.ging application developed with React, Node.js, and Express. The
        backend features a JWT authentication REST API that connects to a MongoDB database.
      </p>

 

      <div class="buttons">
      <a href="https://inventory-application-project.vercel.app/upload" class="btn live-preview">Live Preview</a>
      <a href="https://github.com/Mayorwise001/Inventory_application_project.git" class="btn client">Preview Code</a>
      </div>
    </div>
    <div class="project-image">
      <img src={Inventory} alt="Blog Application Preview" />
    </div>
  </div>
  <div class="project2">
    <div class="project-details2">
      <h3>Advanced Job Management Admin Portal</h3>
      <p class="subtitle">Advanced Job Management Admin Portal</p>
      <p>
      

      The Advanced Job Management Admin Portal is a React-based application built to provide administrators with a seamless interface for managing job portals. Using Axios for API communication, the portal streamlines the process of creating and categorizing job listings, defining custom job categories, and overseeing user accounts.

Key features include:<br></br>

<br></br>

1. Job Management: Easily create, update, and delete job postings.
Category Customization: Define and organize jobs into custom categories for better organization.<br></br>

2. User Administration: Manage registered users with options for secure account updates and deletion.<br></br>

3. Data Security: Robust authentication mechanisms ensure user data privacy, leveraging secure password updates and validation.<br></br>

<br></br>The portal demonstrates expertise in frontend development with React, effective API integration with Axios, and user-focused UI/UX design. It is an essential tool for efficient job portal administration.
      </p>

 

      <div class="buttons">
        <a href="https://frontend-blog-api.vercel.app/" class="btn live-preview">Live Preview</a>
        <a href="https://github.com/Mayorwise001/frontend_blog_api.git" class="btn client">Preview Code</a>
      
      </div>
    </div>
    <div class="project-image2">
      <img src={JobApp} alt="Blog Application Preview" />
    </div>
  </div>

  <div class="project">
    <div class="project-details2">
      <h3>Job Portal Application</h3>
      <p class="subtitle">Job Portal Application</p>
      <p>

      The frontend of the Advanced Job Management System, built with React, HTML, and CSS, offers a seamless experience for job seekers and recruiters. Using REST APIs, it dynamically fetches and displays up-to-date job listings. Users can filter jobs by categories and view detailed information about each listing with a single click.

The platform’s responsive design ensures compatibility across all devices, providing an intuitive and efficient way to explore opportunities. Whether searching for your next role or showcasing job openings, the system delivers simplicity, speed, and satisfaction.
      </p>

      <div class="buttons">
      <a href="https://frontend-blog-api-users.vercel.app/" class="btn live-preview">Live Preview</a>
      <a href="https://github.com/Mayorwise001/frontend_blog_api_users.git" class="btn client">Preview Code</a>
      </div>
    </div>
    <div class="project-image">
      <img src={JobUsers} alt="Blog Application Preview" />
    </div>
  </div>

  <div class="project2">
    <div class="project-details2">
      <h3>E-commerce Store</h3>
      <p class="subtitle">E-commerce Store Project</p>
      <p>
      

      This e-commerce store project is a modern web application built with React, showcasing the integration of APIs for dynamic data handling. It uses the Fake Store API to fetch and display product details, demonstrating practical API utilization.

The platform features a clean interface where users can browse products, explore detailed information, and experience a seamless shopping journey. This project highlights the effective combination of React and APIs to deliver a responsive and interactive user experience.
      </p>

 

      <div class="buttons">
        <a href="https://shopping-project-blue.vercel.app/" class="btn live-preview">Live Preview</a>
        <a href="https://github.com/Mayorwise001/shopping-project.git" class="btn client">Preview Code</a>
      
      </div>
    </div>
    <div class="project-image2">
      <img src={ShopCart} alt="Blog Application Preview" />
    </div>
  </div>

  <div class="project">
    <div class="project-details">
      <h3>Chat Messenger</h3>
      <p class="subtitle">Chat Messenger</p>
      <p>
      This chatting app is a dynamic web application built with React and powered by a custom backend API. The app enables users to create personalized profiles, complete with profile pictures, social media handles, and additional personal details. Users can connect and exchange messages with other registered account holders, fostering real-time communication.

With a focus on individual profile management, the app showcases seamless integration between frontend and backend systems, offering an intuitive and engaging messaging experience.
      </p>

 

      <div class="buttons">
      <a href="https://messenger-users.vercel.app/" class="btn live-preview">Live Preview</a>
      <a href="https://github.com/Mayorwise001/messenger_users.git" class="btn client">Preview Code</a>
      </div>
    </div>
    <div class="project-image">
      <img src={chat} alt="Blog Application Preview" />
    </div>
  </div>

  <div class="project2">
    <div class="project-details2">
    <h3>Website for Sceptre Chemicals</h3>
      <p class="subtitle">Built with WordPress</p>
      <p>
The Sceptre Chemicals website is a professionally designed platform built with WordPress, tailored to showcase the company's services and expertise. It serves as an informative hub, providing detailed insights into the wide range of chemical solutions offered by Sceptre Chemicals. With a clean and intuitive layout, the website ensures a user-friendly experience, enabling visitors to easily access service information and connect with the company.
      </p>

 
      <div class="buttons">
      <a href="https://sceptrechemicals.org/" class="btn live-preview">Live Preview</a>
      </div>
    </div>
    <div class="project-image2">
      <img src={sceptre} alt="Sceptre website preview" />
    </div>
  </div>


</section>

    )
}

export default Featured