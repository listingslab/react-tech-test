# React Technical Excerise

## Phone Book

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
- This repository should be private cloned and shared with techtest_au@kindredgroup.com when complete.

## Setup

### Step 1:

```
npm i
```

OR

```
yarn
```

### Step 2:

```
npm run start
```

OR

```
yarn start
```
