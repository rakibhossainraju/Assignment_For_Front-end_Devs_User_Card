# ReactJS User List Application

This ReactJS application fetches user data from the [DummyJSON Users](https://dummyjson.com/users) endpoint and provides a user-friendly interface to view, search, and add users.

## Table of Contents
- [Overview](#overview)
- [Functional Requirements](#functional-requirements)
- [Design Requirements](#design-requirements)
- [Coding Requirements](#coding-requirements)
- [Evaluation Criteria](#evaluation-criteria)
- [Usage](#usage)
- [Submission](#submission)
- [Other Notes](#other-notes)

## Overview
This user list application is built using ReactJS, React Router, and [UI Framework]. It offers a clean and responsive interface for managing user data. Users can view a list of users, click on individual users for detailed information, search for users by name, sort the user list, and add new users through a form.

## Functional Requirements

### 1. User List Page
- Displays all users in a card layout.
- Each card includes:
    - Avatar
    - First Name
    - Last Name
    - Email
    - Address (Street, Suite, City)
    - Company Name

### 2. User Details Page
- Accessed by clicking on a user's name.
- Displays detailed information about a user, including:
    - Avatar
    - First Name
    - Last Name
    - Email
    - Address (Street, Suite, City)
    - Company Name

### 3. Search Functionality
- Includes a search input field at the top of the list.
- Allows users to search for users based on their names.

### 4. Sorting Options
- Includes a select input field at the top of the list.
- Users can sort the list based on:
    - Name
    - Email
    - Company Name

### UI Framework
- This project uses DaisyUI and Tailwindcss for the UI.


## Usage

1. Clone the repository: `git clone [repository_url]`
2. Install dependencies: `npm install`
3. Run the application: `npm start`