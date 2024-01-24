import React, { useState } from 'react';
import './YourComponent.css';

const YourComponent = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        $('#industry, #location, #job-role').select2();

    }, []);

    const searchJobs = () => {
        console.log('Search Jobs');
    };

    return (
    <div>
        <header>
            <div class="logo"><a href="#">SkillSails</a></div>
            <div class="menu">
                <a href=""><ion-icon name="close" class="close"></ion-icon></a>
                <ul>
                    <li><a href="#" class="under">HOME</a></li>
                    <li><a href="#" class="under">START OVER</a></li>
                    <li><a href="#" class="under">ABOUT US</a></li>
                </ul>
            </div>
            <h1>Hello Name</h1>
        </header>

    <h2>Let's begin your dream job search,</h2>
    <h2>just give us a glimpse.</h2>

    <section id="user-input">
        <form id="job-form">
            <label for="industry">
                <i class="fas fa-industry icon" style="font-size:24px"></i>Industry: 
            </label>
                <select id="industry" name="industry" required>
                <option value="" disabled selected>Select an industry</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                
            </select>
            

            <label for="location">
                <i class="fas fa-map-marker-alt icon"></i>Location: </label>
                <select id="location" name="location" required>
                    <option value="" disabled selected>Select an industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    
                </select>
            
            

            <label for="job-role">
                <i class="fas fa-briefcase icon"></i>Job Role: </label>
                <select id="job-role" name="jobRole" required>
                    <option value="" disabled selected>Select an industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    
                </select>
        
            <div class="button-container">
            <button type="button" onclick="searchJobs()">Search Jobs</button>
            </div>
        </form>
    </section>
    

    <section id="job-listings">
       
    </section> 
    {/*<script src="script.js"></script>
    <script>
        $(document).ready(function () {
            $('#industry, #location, #job-role').select2();
        });
    </script>*/}
</div>
    );
};

export default YourComponent;
