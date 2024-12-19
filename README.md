# College Management System

## How to Start the Application

### Step 1: Clone the Repository

Clone the project repository from GitHub using the following command:

```bash
git clone https://github.com/bammas/College-Management-Systerm.git
Navigate into the project folder:

bash

cd College-Management-Systerm
Step 2: Install Dependencies
Install the necessary dependencies for the project:

bash

npm install
Step 3: Run the Development Server
Start the development server to run the application locally:

bash

npm run dev
By default, the application will be accessible at http://localhost:3000.

Step 4: Access the Application
Once the server is running, you can access the following pages in your browser:

Signup Page (Default): /signup
Login Page: /login
Faculty Dashboard: /faculty
Student Dashboard: /student
Step 5: Application Flow
Signup and Login for Faculty:

Signup: The faculty user should first sign up using the /signup page.
Login: After signup, login to the faculty dashboard via /login page.
Faculty Dashboard:

Add Student: The faculty can create students through the dashboard and assign them to themselves.
Enroll Subjects for Student: The faculty can also enroll students in various subjects they are teaching.
Signup and Login for Student:

Signup: After faculty enrollment, a student can sign up via the /signup page.
Login: The student can log in using the /login page.
Student Dashboard:

View and Edit Student Details: The student can view and edit their profile details.
View Enrolled Subjects: The student can also see the list of subjects they are enrolled in, including their respective faculty.
Step 6: Testing the Application
Faculty Login:

Login as a faculty member using the /login page after signing up to access the Faculty Dashboard.
The faculty can create and manage students, assign students to themselves, and enroll students in subjects.
Student Login:

After the faculty adds students, the student can sign up via the /signup page and log in on the /login page.
The student will be able to view and edit personal details and see enrolled subjects assigned by the faculty.
