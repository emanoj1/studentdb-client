![StudentDB Logo](./src/docs/logo/studentDB-logo.png)  
_Note: A MERN assignment project / For study purposes only / Not offered as an official product_

**Team**: a solo project by Manoj Kumar

## Helpful links

### Deployment info

**Final launched website**: https://studentdb.online

Deployed production (Client/Frontend): https://studentdbonline.netlify.app/  
Deployed production (Server/backend): https://studentdb-server.onrender.com

### GitHub Repositories
Client/Frontend: https://github.com/emanoj1/studentdb-client  
Server/Backend: https://github.com/emanoj1/studentdb-server  

### Video Walk-thru
Check out the full functionalities & features of the website!  

[![Video Walk thru image](./src/docs/images/video-walk-thru-studentdb-ss.png)](https://www.loom.com/share/132bc7bb472a45489ce28d018b19100e?sid=cd6af565-7413-48ff-bb9c-341ecb1dd9d3)


## About the Website

#### Purpose
The primary purpose of **StudentDB**, the online student management system is to provide educational institutions with a comprehensive and efficient way to manage student data. This system will streamline administrative tasks, improve data accuracy, and enhance communication between the institution and its students. By leveraging modern web technologies, the system aims to offer a user-friendly experience that saves time and resources for educational institutions.

#### Functionality / Features
1. **Institution Registration**
   - A simple and secure registration process for institutions.
   - Fields: Person name, email, institute name, institute id, etc.

2. **Student Database Management**
   - A robust database to store and manage student details.
   - Fields: Name, date of birth, gender, phone, email, address, date of enrolment, area of study (for university students).
   - Features for adding, editing, and deleting student records.
   - Search and filter capabilities to easily find specific student information.

3. **Homepage**
   - Showcases the features and benefits of the product.
   - Includes a clear call-to-action for institutions to sign up and start using the product.
   - Attractive and informative design to engage visitors.

4. **About Page**
   - Provides detailed information about the product, its development, and the team behind it.
   - Explains the mission and vision of the student management system.

5. **Contact Page**
   - Easy-to-use contact form for inquiries and support.
   - Contact details for direct communication.

#### Target Audience
The primary target audience for this online student management system includes:
- Schools (primary and secondary)
- Colleges
- Universities
- Other educational institutions that require a systematic way to manage student information.

#### Tech Stack
The development of the web app will utilize the MERN tech stack, which includes:
- **MongoDB**: For the database to store student and institution data.
- **Express.js**: For the back-end server to handle API requests and manage data transactions.
- **React.js**: For the front-end, providing a responsive and interactive user interface.
- **Node.js**: For the server-side runtime environment, ensuring efficient handling of concurrent operations.

### Detailed Description

StudentDB, the online student management system is designed to simplify and enhance the way educational institutions handle student information. The website will feature a professional and intuitive design, ensuring ease of use for both administrators and users.

**Homepage**
The homepage will serve as the first point of contact for potential users. It will feature an engaging design that highlights the key features and benefits of the system. Institutions will find a straightforward link to register and begin utilizing the platform. The homepage will also feature testimonials and success stories to build trust and credibility.

**About Page**
The about page will provide comprehensive information about the student management system. It will detail the product's origins, development process, and the team behind it. This page will also communicate the system's mission to improve administrative efficiency and data accuracy for educational institutions.

**Contact Page**
The contact page will offer multiple ways for users to get in touch with the support team. It will feature a contact form for general inquiries, as well as email contact details. This ensures that institutions can easily seek assistance and provide feedback.

**Institution Registration**
A secure and user-friendly registration process will allow institutions to sign up quickly. By providing essential details such as the person’s name, email, and institute name, the system will create a unique profile for each institution, enabling them to manage their student data efficiently.

**Student Database Management**
The core functionality of the system lies in its ability to manage student information. The database will be designed to store a wide range of student details, from personal information to academic records. Administrators will be able to add new students, update existing records, and remove outdated information with ease. Advanced search and filtering options will help users quickly find specific student data.

Overall, **studentDB** aims to become an indispensable tool for educational institutions, offering a seamless and efficient way to handle student information while leveraging the powerful capabilities of the MERN tech stack.

## DATAFLOW DIAGRAM

To begin with, let's have a look at the **standard control workflow** before we present the detailed dataflow diagram, to get a top-level view of the system:

**Entities**:
<ol>
<li>Institution</li>
<li>Admin</li>
<li>System Database</li>
</ol>

**Processes**:
<ol>
<li>Institution Registration</li>
<li>Student Data Management</li>
<li>Website Navigation</li>
</ol>

**Data Stores**:
<ol>
<li>Student Database</li>
<li>Institution Database</li>
</ol>

#### Top level diagram   

![Top Level](./src/docs/dataflows/DFD-Context-Level.png)

#### Detailed diagram   

![Detailed Level](./src/docs/dataflows/DFD-Detailed-Level.png)

### DATAFLOW DIAGRAM - Detailed Processes

The below detailed DFD provides a clear overview of the data flow within the system, specifying the type of data being passed around in each process.

**The Overall System**

![Overall System DFD](./src/docs/dataflows/level-0-overall-system-dfd.png)

Each block diagram below represents a distinct functionality of the above mentioned system. 

![Institution Registration](./src/docs/dataflows/1-detailed-dfd-institution-rego.drawio.png)

**Overview**  
Institution Admin submits registration information (Name, Email, Institute Name, Institute Id).  
The system validates and stores the information in the database.  
A confirmation email is sent to the admin.

**Purpose**  
The institution registration process allows educational institutions to create accounts on the platform. It collects essential information to authenticate and set up profiles for these institutions.  

**Functionality**  
Data Collection: The registration form collects the institution admin's name, official email, institution name, registration number, and a password.  
Validation and Storage: The information provided is validated to ensure it meets the system's requirements (e.g., valid email format, strong password) and then stored securely in the database.  
Immediate Access: Once registered, the institution admin can immediately access the system to manage student data, without the need for email confirmation.  

**Technical Implementation**  
Database Operations: Uses CRUD operations to create a new institution record in the database.  
Security Measures: Passwords are hashed before storage to enhance security.  

![User Login](./src/docs/dataflows/2-detailed-dfd-user-login.drawio.png)

**Overview**  
Institution Admin submits login credentials (Email, Password).  
The system authenticates the user and generates an authentication token.  

**Purpose**  
The user login process authenticates institution admins when they attempt to access their accounts, ensuring that only authorized users can manage sensitive student information.  

**Functionality**  
Credentials Verification: Admins log in using their registered email and password.  
Authentication Token: Upon successful authentication, the system generates an authentication token which is used for session management and securing subsequent requests.  
Security Features: Includes measures to prevent unauthorized access and attacks such as brute force.  

**Technical Implementation**  
Session Management: Typically involves generating a secure token (e.g., JWT) that maintains user state across requests.  
Security Checks: Might include rate limiting and automatic lockout after several failed attempts.  

![Manage Students](./src/docs/dataflows/3-detailed-dfd-manage-students.drawio.png)

**Overview**  
Institution Admin sends student details (Name, DOB, Gender, etc.) along with the token.  
The system processes the student data, storing or retrieving it from the database.  

**Purpose**  
This process allows institution admins to add, update, delete, and retrieve detailed information about students, maintaining a robust database of student records.

**Functionality**  
CRUD Operations: Admins can create new student records, read existing ones, update details, or delete records as needed.  
Search and Filtering: Provides functionality to search for specific students or filter lists based on criteria like enrollment date or area of study.  
Data Integrity: Ensures that all student information is accurately recorded and maintained.  

**Technical Implementation**  
Database Transactions: Ensures atomic operations for data integrity and error handling.  
Input Validation: Protects the system from invalid or harmful input.  

![Generate Reports](./src/docs/dataflows/4-detailed-dfd-generate-reports.drawio.png)

**Overview**  
Institution Admin requests reports.  
The system processes the report request, retrieves data from the database, and returns the report data.  

**Purpose**  
This feature allows the generation of reports based on the student data available. These reports can help admins track enrollment, performance, and other metrics over specified periods.  

**Functionality**  
Report Customization: Admins can generate reports based on various criteria (e.g., time frames, specific programs).  
Data Aggregation: The system aggregates data from multiple records to compile comprehensive reports.  
Export Options: In phase 2 of this project in the future, we can look at the ability to export reports in various formats like PDF or Excel.  

**Technical Implementation**  
Data Analysis Tools: May use SQL queries or specialized software libraries to analyze and format data.  
Asynchronous Processing: Large report generation tasks may be processed in the background to avoid blocking the main application workflow.  

![Notifications](./src/docs/dataflows/5-detailed-dfd-notifications.drawio.png)

**Overview**  
Institution Admin sends a notification request.  
The system processes the request and sends the notification via an external notification service.  
The "Notifications" process in the system serves a key role in communicating timely and relevant information to institution admins or other relevant stakeholders.  

**NOTE**: Majority of the notification features (mentioned below) can be implemented in the future, as a part of phase 2. For Phase 1, we will have simple & relevant notifications only. But, we are presenting all the possibilities for you to get an idea.

**Purpose**

1. **Timely Alerts**: The notification system can alert institution admins about important events or statuses within the application. For example, if there is an update to a student's records, or a deadline approaching for report submissions, the system can automatically notify the admins.

2. **Actionable Reminders**: Notifications can serve as reminders for actions that need to be taken. For instance, reminding admins of incomplete registration processes, pending approvals, or actions required after a certain trigger within the system.

3. **Error Alerts**: If there are errors in the system, such as failed data submissions or conflicts in schedules, notifications can alert the admin immediately, allowing for swift resolution.

4. **System Updates**: When there are updates or changes in the system, notifications can inform all users of these changes. This might include new features, maintenance times, or changes in terms or policies.

5. **User Engagement**: Regular notifications can help keep users engaged with the system, prompting them to return to the platform regularly, which can enhance user retention and satisfaction.

### Functionality of Notifications

- **Triggered by Specific Events**: Notifications are typically triggered by specific events within the system. For example, when a new student is enrolled, a notification might be sent to the admin to review and confirm the details.

- **Customizable**: Depending on the system's design, notifications can often be customized by the admins to control what types of notifications they receive, how often they receive them, and through what channels (e.g., email, SMS, system pop-ups).

- **Automated**: The notification process is usually automated. Once the triggers and types of notifications are defined, the system can handle the sending of these alerts without manual intervention.

- **Integrated with External Services**: To send notifications, especially through email or SMS, the system may integrate with external notification services or APIs that handle the actual delivery of these messages.

### Technical Implementation

- **External Notification Services**: For email and SMS, services like Twilio for SMS or SendGrid for email might be used. These services provide reliable delivery and management of notification services.

- **In-System Notifications**: For notifications that appear within the web application, technologies like WebSocket can be used for real-time communication, or simpler polling mechanisms could be employed depending on the application's requirements.

- **Database Monitoring**: The system will likely have mechanisms to monitor changes in the database or specific tables that trigger notifications. This could be implemented via database triggers or by application logic that checks for certain conditions during data processing.

By incorporating a robust notification system, the student management platform can enhance its interactivity and responsiveness, significantly improving the user experience for institution admins. This system can keep users well-informed and engaged, making the platform more effective and efficient.


### Key Points from the Dataflow Diagram
Each process (Institution Registration, User Login, Manage Students, Generate Reports, Notifications) is a separate block that interacts with the database and external systems.  
The user interface communicates with each of these processes independently based on the user's actions.  
Data such as registration info, credentials, student details, report requests, and notifications are passed between the user interface and the respective processes.  
Each process communicates with the database to store and retrieve relevant data.  
External systems are used for tasks like generating authentication tokens and sending notifications.  

This comprehensive DFD shows how the data flows between the different parts of the system, providing a detailed overview of the interactions and data exchanges within the application.  

## APPLICATION ARCHITECTURE DIAGRAM

Below is a detailed Application Architecture Diagram for the online student management system using the MERN stack.

#### Layers:
1. **Client Side (Frontend)**
   - Browser (React.js Application)
2. **Server Side (Backend)**
   - Express.js Server
3. **Database**
   - MongoDB

### Components:
1. **Client Side**
   - React Components (Pages, Forms, Navigation, etc.)
   - Redux (State Management)
   - Axios/Fetch (HTTP Client)

2. **Server Side**
   - Express.js Server
   - REST API Endpoints
   - Middleware (Authentication, Validation, Error Handling)
   - Controllers
   - Services

3. **Database**
   - MongoDB
   - Mongoose (ORM)

![APP Architecture Diagram](./src/docs/architecture/DFD-App-Architecture.png)

### Explanation:

#### Client Side (Frontend)
- **React Components**: These are the building blocks of the user interface, including pages (Home, About, Contact), forms (Institution Registration, Student Data Management), and navigation components.
- **Redux Store**: Used for managing the application state, ensuring a predictable and consistent state across the app.
- **Axios/Fetch**: HTTP clients for making API calls to the backend server.

#### Server Side (Backend)
- **Express.js Server**: The core of the backend, handling incoming HTTP requests and routing them to the appropriate endpoints.
- **Routes**: Define the API endpoints (e.g., /register, /students) and link them to controllers.
- **Middleware**: Includes authentication (e.g., JWT), validation, and error handling to process and secure the requests.
- **Controllers**: Handle the logic for each endpoint, interacting with the services to perform CRUD operations.
- **Services**: Business logic and interaction with the database, abstracting the database operations from the controllers.

#### Database
- **MongoDB**: The NoSQL database for storing institution and student data.
- **Collections**: Logical groupings of documents (e.g., Institutions, Students).
- **Documents**: Individual records in the collections.
- **Mongoose**: An ORM for MongoDB, providing a schema-based solution to model the application data and interact with MongoDB.

This architecture ensures a clear separation of concerns, with the frontend and backend interacting through well-defined API endpoints, and the database being managed through an ORM for ease of use and maintenance.

## USER STORIES

_Art credit: drawn by Manoj Kumar_

![](./src/docs/userstories/John-citizen-very-small.png)  

**John Citizen**:   
---
**Role**: Institutional admin at a local private institute  

**Work area**: Manages all student records of his institute   

**Location**: Sydney, Australia  

**Background**: John has been a part of the educational community for 17 years, and has played a key role in keeping student data organized and secure.  

**Goals**: 
<ul>
<li>John wants a system where student data management isn't restricted to his local machine, and has the ability to be accessed across computers and devices nationally.</li> 
<li>He also wants to signup some of his colleagues to use the new system so they can help him with student data entry and edits.</li>
</ul>

**Challenges**: 
<ul>
<li>Prior to using StudentDB, John had been using a software set locally on his machine. This means other members of his team did not have access all the time and there was a danger of data getting lost should his computer crash.</li> 
<li>It was an expensive software and very clunky to use, and took a long time to complete a student entry. There were many fields on the form he felt were unncessary and hence adding to his workload.</li>
<li>Basic computing and internet skills only. </li>
</ul>

**Tech skills**: Although not an IT professional, John is often meeting up with the institute's tech team to understand how technology & digital products can be used to make his work better and modern.  

**Why studentDB**:
<ol>
<li>Cheaper to use as it will be a subscription model unlike softwares that have high purchase and maintenance costs.</li>
<li>Data stored in the cloud using MongoDB, a highly secure & robust online database system.</li>
<li>The student data entry forms are simple to use, and asks only for relevant information.</li>
<li>studentDB is in the cloud, and hence easily accessible anywhere and by other members of his team on their own devices.</li>
<li>Begin using the app quickly, as it involves only user signup to get started. No installation or training required!</li>
</ol>


![](./src/docs/userstories/Jane-Appleseed-very-small.png)  
**Jane Appleseed**:  
---

**Role**: a casual web browser/user checking out the website.

**Work area**: Works in the software industry and keen to see what interesting products are in the market.  

**Location**: Ohio, U.S.A  

**Background**: Jane's loves anything IT, internet and software. One day she hopes to launch her own web application and quit her demanding 9-5 job! Till then, she is happy to browse the WWW, and see what new internet products and services are launching in the market. Recently, she saw an ad featuring **studentDB** in the local newspaper, and has been keen to check it out. Her parents work for the local school as teachers, and she is wondering if the product can be useful for the school, and perhaps she can be the freelancer consultant to bring it to them!!

**Goals**: 
<ul>
<li>Understand what studentDB offers, features & benefits and how it works.</li> 
<li>Share her understanding with her parents who work at the local school, and perhaps pitch it to the relevant school authorities.</li>
</ul>

**Challenges**: 
<ul>
<li>Education industry isn't her forte (but she understands tech!)</li> 
<li>She has never used any data management software before, so her experience is limited.</li> 
</ul>

**Tech skills**: Well-versed in the production of websites & software, understands how internet works, and comfortable with general technical matters!  

**Why studentDB**:
<ol>
<li>The ad she saw in the paper looked trustworthy and legit. </li>
<li>She is curious to know how an online database management works.</li>
</ol>

--- 
### User Story - Institution Registration and Management

1. **As John, the Institution Admin, I want to register my institution so that I can start using the student management system.**
   - **Acceptance Criteria:**
     - The registration form collects the person’s name, email, and institution name.  
     - The institution’s data is stored in the database.  

2. **As John, the Institution Admin, I want to log in to the system so that I can manage my institution’s student data.**
   - **Acceptance Criteria:**
     - The login form collects the email and password.
     - Authentication is handled securely.
     - Successful login redirects to the admin dashboard.

### User Story -  Student Data Management

3. **As John, the Institution Admin, I want to add new student details so that I can keep track of all students enrolled in my institution.**
   - **Acceptance Criteria:**
     - A form to add student details (name, date of birth, gender, phone, email, address, date of enrolment, area of study).
     - Validation of mandatory fields.
     - Successful submission stores the student’s data in the database.

4. **As John, the Institution Admin, I want to edit existing student details so that I can update any changes or correct mistakes.**
   - **Acceptance Criteria:**
     - An interface to search for and select a student.
     - A form pre-populated with the student’s current details.
     - Ablity to make the required changes
     - Successful submission updates the student’s data in the database.

5. **As John, the Institution Admin, I want to delete student details so that I can remove records of students who are no longer enrolled.**
   - **Acceptance Criteria:**
     - An interface to search for and select a student.
     - Successful deletion removes the student’s data from the database.

6. **As John, the Institution Admin, I want to search and filter student details so that I can easily find specific student information.**
   - **Acceptance Criteria:**
     - A search bar to search by student name, email, or other attributes.
     - Display of search results in a list format.

### User Story -  Website Navigation and Information

1. **As Jane Appleseed, a potential user, I want to visit the homepage so that I can understand the features and benefits of the student management system.**
   - **Acceptance Criteria:**
     - A well-designed homepage showcasing key features and benefits.
     - Clear call-to-action buttons for sign-up and login.

2. **As Jane, a potential user, I want to visit the About page so that I can learn more about the product and the team behind it.**
   - **Acceptance Criteria:**
     - An About page with detailed information about the product’s mission, vision, and development.
     - Information about the team behind the product.

3. **As Jane, a potential user, I want to visit the Contact page so that I can reach out for inquiries or support.**
   - **Acceptance Criteria:**
     - A contact form for submitting inquiries.
     - Display of contact details for direct communication.

### User Story -  User Account Management

10. **As John, an Institution Admin, I want to reset my password so that I can regain access if I forget it.**
    - **Acceptance Criteria:**
      - A password reset option on the login page.
      - Successful reset allows login with the new password.

11. **As John, an Institution Admin, I want to update my account details so that my profile information is always current.**
    - **Acceptance Criteria:**
      - A form to update account details (e.g., name, email, password).
      - Successful submission updates the account information in the database.

### User Story -  Security and Permissions

12. **As John, an Institution Admin, I want my data to be secure so that unauthorized users cannot access it.**
    - **Acceptance Criteria:**
      - Implementation of secure authentication and authorization mechanisms.
      - Encryption of sensitive data.
      - Regular security audits and updates.

These user stories cover the primary functionalities and interactions for the system, ensuring the needs of the institution administrators and potential users are met.

## Wireframes

The website is designed in a way to keep content and design minimalistic, and keep it easy for the user. It will use 1-2 fonts and 1-2 colors as well.  

Below are the wireframe diagrams of the app for multiple standard screen sizes using Figma:

### (1) Homepage - Desktop
![Homepagepage - Desktop](./src/docs/wireframes/homepage-figma-desktop.png)

The HOMEPAGE on desktop features all content placed left to right and from top to bottom. The navigation bar contains the logo to the left, and to the right are all the various links to the different pages. The nav bar items takes the user to their own pages, namely the About page, the Contact page, and finally the Login and Registration pages.  

Below the navigation bar are content in 3 sections:
<ul>
<li>the hero section featuring an image, an elevator pitch of the app and a call to signup</li>
<li>the Features section displays 3 key benefits of the app along with an icon</li> 
<li>a testimonial section containing reviews from other users</li>
</ul>

The page finishes with a footer bar, which contains Terms & Conditions and other admin related links and text.

### Homepage - Tablet
![Homepage Tablet wf](./src/docs/wireframes/homepage-figma-tablet.png)

The HOMEPAGE on the tablet displays content top to bottom, with a collapsible nav bar. All the content are a little compressed and sequentially placed to fit on the page.

### Homepage - Mobile
![Homepage mobile wf](./src/docs/wireframes/homepage-figma-mobile.png)

The HOMEPAGE on the mobile displays content top to bottom, with a hamburger menu for the navigation bar.

### (2) About page - Desktop
![About page desktop wf](./src/docs/wireframes/about-page-figma-desktop.png)

The ABOUT page talks about the history and purpose of the web app, followed by the mission & vision statements of the company. It will also feature the team, and their bio. Like the Homepage, the About page also has a header navigation bar and a footer bar. All content are place left to right, and top to bottom. The page also takes a sectional approach with each block of content placed in its own section.

### About page - Tablet
![About tablet wf](./src/docs/wireframes/about-page-figma-tablet.png)

The tablet view features content placed top to bottom, with a collapsible navigation bar, and a vertical carousel for the team section.

### About page - Mobile
![About mobile wf](./src/docs/wireframes/about-page-figma-mobile.png)

The mobile view has all content arranged horizontally, and uses a hamburger menu for the nav bar. The team section uses a vertical carousel.

### (3) Contact page - Desktop
![Contact desktop wf](./src/docs/wireframes/contact-page-figma-desktop.png)

The CONTACT page will feature a form for user data and comments entry. The form submission will send an email to the website owner. The plan is to use a 3rd party form widget (e.g: Tally, Paperform etc), which is implemented via a Javascript code.

### Contact page - Tablet
![Contact tablet wf](./src/docs/wireframes/contact-page-figma-tablet.png)

### Contact page - Mobile
![Contact mobile wf](./src/docs/wireframes/contact-page-figma-mobile.png)

### (4) Institute Registration page - Desktop
![Institute rego desktop](./src/docs/wireframes/institute-rego-page-figma-desktop.png)

Institution Registration is where a nominated person from an educational institute signs up to use the site. It asks for key information like person name, email id, Institution name and ID, and password. Once signed up, he can immediately access the dashboard and begin his work. Once registered, the page will redirect to the LOGIN page, where he enters the credentials to login.

### Institute Registration page - Tablet
![Institute rego tablet](./src/docs/wireframes/institute-rego-page-figma-tablet.png)

### Institute Registration page - Mobile
![Institute rego mobile](./src/docs/wireframes/institute-rego-page-figma-mobile.png)

### (5) Login page - Desktop
![Login desktop](./src/docs/wireframes/login-page-figma-desktop.png)

The Login page features fields that helps a registered user login to the site. The required details are - registered email and password he set during the registration stage. Once logged in, he is taken to the Dashbard page. If details entered are incorrect, the system will prompt him to enter the right info, or he can reset his login details using the Forgot Password link.

### Login page - Tablet
![Login tablet](./src/docs/wireframes/login-page-figma-tablet.png)

### Login page - Mobile
![Login page](./src/docs/wireframes/login-page-figma-mobile.png)

### (6) Admin (the user) Dashboard page - Desktop
![Admin dashboard desktop](./src/docs/wireframes/dashboard-page-figma-desktop.png)

The Dashboard for the user is a simple one featuring key action buttons on the left panel. The links are: 
<ul>
<li>Student List which features all students who have been entered on the system</li>
<li>Add Students page where the user can enter new students</li>
<li>the Admin settings where the admin user can change his profile, including password.</li>  
</ul>  

The Student List page also has the option to **Edit** student details or **Delete** a student from the database.

### Admin (the user) Dashboard page - Tablet
![Admin dashboard tablet](./src/docs/wireframes/dashboard-page-figma-tablet.png)

### Admin (the user) Dashboard page - Mobile
![Admin dashboard mobile](./src/docs/wireframes/dashboard-page-figma-mobile.png)

### (7) Student Management page - Desktop
![Student management page desktop wf](./src/docs/wireframes/student-management-page-figma-desktop.png)

This page shows all the students in the database, with the option to Edit student details or delete a student.

### Student Management page - Tablet
![Student management page tablet wf](./src/docs/wireframes/student-management-page-figma-tablet.png)

### Student Management page - Mobile
![Student management page mobile wf](./src/docs/wireframes/student-management-page-figma-mobile.png)

### (8) Add/Edit student page - Desktop
![Edit student page desktop](./src/docs/wireframes/edit-student-page-figma-desktop.png)

The Add-Edit page is loaded when the admin user clicks on the Edit button found against a student in the Student List page. The loaded page allows the admin user to update all data of a student in the database.

### Add/Edit student page - Tablet
![Edit student page tablet](./src/docs/wireframes/edit-student-page-figma-tablet.png)

### Add/Edit student page - Mobile
![Edit student page mobile](./src/docs/wireframes/edit-student-page-figma-mobile.png)

### (9) Admin Settings page - Desktop
![Admin page desktop](./src/docs/wireframes/admin-settings-figma-desktop.png)

The Admin Settings page gives the institute admin user to change any of the details of the insitutute he belongs to (institute name, Id etc), his own details (name, email etc) and also the login details (password update).

### Admin Settings page - Tablet
![Admin page tablet](./src/docs/wireframes/admin-settings-figma-tablet.png)

### Admin Settings page - Mobile
![Admin page mobile](./src/docs/wireframes/admin-settings-figma-mobile.png)

## Kanban board screenshots

The various to-do tasks for the preparation of this project documentation was managed via a 3-lane Kanban board using **Notion**. Notion is a productivity and note-taking web application. It is very similar to the propular apps like Trello and Evernote.   

Since the web app project involved 2 separate work - the documentation and the building of the app, I have created 3 Kanban boards within a single project page on Notion - the documentation (Part A), the Client side (Part B) and the Server side (Part B).

The Kanban board features 3 swimlanes - **Not Started**, **In Progress** and **Done**. All the required activities are first set as tasks in the **Not Started** column, and when the task is to be actioned, it is moved to the **In Progress** column. Once the task is completed, the task card is moved into the **Done** column.

![](./src/docs/kanban/kanban-board-ss.png)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
