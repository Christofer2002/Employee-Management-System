# Employee Management System

Employee Management System is a web application designed to help users efficiently manage their employees. The application offers an intuitive and user-friendly interface that allows users to create, view, and edit employee information easily.

## Key Features

- **Login and Logout:** Users can log in to the application using their credentials. Once authenticated, they can access all the functionalities of the application. Additionally, they have the option to log out whenever they wish.

- **Employee List View:** After logging in, users can view a list of all the employees they have previously registered. This list is displayed on the main page of the application and provides basic details about each employee, such as name, position, and contact information.

- **Employee Details View:** By clicking on a specific employee from the list, users can view the complete details of that employee, including associated contact information. This detailed view provides additional information about the employee and allows users to make changes if necessary.

- **Add New Employee:** Users have the option to add a new employee by clicking on an add employee button. This will open a pop-up window where they can enter the employee's details, such as name, position, contact information, etc. The contact information can be configured by selecting existing contacts or manually adding new ones.

- **Contact List Management:** During the creation of a new employee, users can add or remove contacts from the contact list associated with that employee. This allows them to customize the list of contacts as needed.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js with Express
- **Database:** MySQL (compatible with PHPMyAdmin)
- **HTTP client:** Axios
- **RESTful API for communication between frontend and backend.**

## Prerequisites

Make sure you have the following components installed before you begin:

- Node.js and npm (https://nodejs.org/)
- MySQL (https://dev.mysql.com/downloads/)
- PHPMyAdmin (https://www.phpmyadmin.net/)

## Installation Steps

### Backend (Node.js with Express)

1. Clone the repository

```bash
git clone https://github.com/YourUsername/Employee-Management-System.git
cd BackendEmployeeManagementSystem
```

2. Database Configuration
Update the database configurations in src/config/database.js.

3. Run the application
```bash
npm install
npm start
```

The backend will be available at http://localhost:5000.

### Frontend (React)

1. In the project root directory, navigate to the frontend directory.

```bash
cd FrontendEmployeeManagementSystem
```

2. Install dependencies
```bash
npm install
```

3. Configure Backend URL
Update the backend URL in the src/config.js file according to where the backend is running.

4. Run the application
```bash
npm start
```
The application will be available at http://localhost:3000.

### Application Usage
- Access the application from your browser using the URL provided after running the frontend.
- Log in with the provided credentials or create a new account.
- Explore the various employee management functions, such as adding new employees, editing employee details, and managing contacts.
- Contributions and Issues
- Contributions are welcome! If you encounter any issues or have ideas for improvements, please open an issue in the repository.

### License
- This project is licensed under the MIT License - see the LICENSE file for more details.
