
![alt text](https://listingslab.com/png/72_b.png "Headless WordPress PWA with React")

### [listingslab.com](https://listingslab.com)

*A simple phone book application using react and redux*

## Solution

Dev Time from cloning bitbucket repo to final develop>master merge __≈ 4.5 hrs__

Please note our solution does deviate slightly from the original brief. This is due to the constraints of completing the task in a very short time & wishing to showcase some of our current React development skills in the time allotted.

This simple phonebook app offers the following power ups

- Full Progressive Web App with all the correct manifests/icons & a 87% [lighthouse audit score](https://raw.githubusercontent.com/listingslab/react-tech-test/master/public/lighthouse.json)
- Hosted on Google Firebase, leveraging tech like as [firestore database](https://firebase.google.com/docs/firestore/)
- Aatars
- Persistant redux store (like cookies but better)
- [Material UI](https://material-ui.com/) for quick, modern, responsive UI frameworking

__Roadmap__  

Further development of this app might include 

- Look at importing/exporting contacts as JSON
- Upload avatars
- Develop the contact object to use many more fields
- Push notifications to let users know when they've been added to another's list

## Brief

Below is the original technical test readme.

# React Technical Excerise

### Phone Book

## Solution

The devilered solution solved the brief and also offers the following power ups

- Hosted on firebase, leveraging all kinds of Google goodness
- Persistant redux store (like cookies but better)
- [Material UI](https://material-ui.com/) for quick, modern, responsive UI frameworking

## Brief

Below is the original technical test readme.

### Phone Book

Create a simple phone book application using react and redux.
Follow the layout provided below.

```
---------------------------------------------------------
-   First Name  Last Name   Phone No.                   -
-   [        ]  [       ]   [       ]                   -
-                                                       -
-                                                       -
-                           [Save]    [Cancel]          -
-                                                       -
-  [First Name] | [Last Name] | [Phone Number] |        -
-   John        | Smith       | 1234           | [Edit] -
-               |             |                | [Edit] -
-               |             |                | [Edit] -
-               |             |                | [Edit] -
-               |             |                | [Edit] -
---------------------------------------------------------
```

- React and Redux must be used.
- You are free to use whatever additionaly libraries you would like.
- The application must pass the following 4 test cases.

#### Case 1: Add a new user

1.  Enter a first name, last name and phone number into the input fields.
2.  Clicking save should add the entry into a store. This store should be persistant i.e local storage. Once saved it should show in the table below.

**_Note: Try to treat reading and writing the data the way you would if you were consuming a RESTful API._**

#### Case 2: Show list of contacts

1.  List the contacts first name, last name and phone number in the table. The contact should load from the persistant store.

#### Case 3: Edit user

1.  Click the edit button next to the contact in the table and populate the input fields with the values.
2.  Modify the information and click save to update the existing record in the store.

#### Case 4: Cancel Edit Action

1.  Click the edit button to load the selected user data as above.
2.  Modify the information and click Cancel. The data should not be updated in local storage or table.

#### BONUS

1.  Write a unit test.
2.  Add sorting on the table
3.  Allow filtering/searching the table.

## Submission

### For a submission to be considered complete it must:

- Clone the _*unibet-front-end-tech-test*_ repo.
- Demonstrate appropriate use of source control/ versioning;
- Adhere to modern coding standards/ practices;
- Be merged to master with a merge commit;
- Be testable;
- Solve the problem.


#### OSL by Listingslab, 2018