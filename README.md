

storybook: 
Storybook is a development environment tool that is used as a playground for UI components. It allows us, the developers, to create  components in isolation. It runs outside of the app, too, so project dependencies won’t affect the behaviour of components.

Once you build out a component, Storybook lets you create a "story" file where you can then import your component and create various use case examples in an iFramed sandbox using that component.

This provides an organized and focused environment to build new components and work on existing ones.

```bash

└── src/
    ├── constants/
    │   ├── constant/
    │   │   # for declaring constant.
    ├── contexts/
    │   ├── userContext/
    │   │   # Define userContext here
    ├── hooks/
    │   ├── getUserHooks/
    │   │   # custom hooks defined here	
    │   │── Dashboard/
    │   │      └── index.js
	│   │── Login/
	│   │	  └── index.js
	│   │   # routing pages are defined here
    ├── routes/
    │   │   └── routes.js
	│   │   # routes  are defined here
	├── stories/
    │   │── assets/
	│   │     └── index.js
	│   │── componentName/
    │   │ 	  ├──comonentname.stories.js
    │   │       ├──index.styles.js
	│   │       └── comonentname.js
	│   │── containers/
	│   │ 	  ├──comonentname.stories.js
	│   │       ├──index.styles.js
	│   │       └── comonentname.js
    ├── utils/
	│    └── index.js
    └── themes/
           ├── ButtonTheme.js

```

   


1. constants
	to hold all of the constants I use within all of my components. Within that folder I simply create a file /src/constants/constant.js to store all of my components
2. contexts
	to define context we are using contexts folder. all user defined contexts are defined under the src/constants/*.js
3. Hooks
	to define hooks we are using hooks directory. all user defined hooks are defined under the src/hooks/*.js
4. Pages
	this folder contains all user defined component here. component are made by composing reusable component which are created in storybooks.
4. Routes
	user defined routes are listed here.
	this routes help to render component as per routing path.
5. stories
	this contains all storybook stories.
	1. components
		this contains all reusable components like button, radio.
	2. containers
		this contain container component which are made by composing reusable component.
6.themes
	user defined themes for material UI component are defined here

7.utils
	utility functions are defined here.



Routing 

we are using react router v6 in routing between the components.

1. Set Up React Router

After making changes in index.js with React Router, this is what you should have:





```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

Step 2 - Define routes

routes defined in routes/routes.js

```javascript
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";


export const router =[
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "/login",
    element: <Login/>
  },
];
```

step 3 .add protected routes in App.js

```javascript

import React, { useState, Suspense, useEffect } from "react";
import { router } from "./routes/routes";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  console.log(router);
  const [isSigned, setIsSigned] = useState(false);

  const routesContainer = router.map((el) => (
    <Route path={el.path} element={el.element} />
  ));

  let navigate = useNavigate();

  useEffect(() => {
    if (isSigned) {
      return navigate("/");
    } else {
      return navigate("/login");
    }
  }, [isSigned]);

  return (
    <Suspense fallback={() => <h1>Loading</h1>}>
      <Routes>{routesContainer}</Routes>
    </Suspense>
  );
}

export default App;

```

We first imported the features we'll be using – Routes and Route. After that, we imported all the components we needed to attach a route to. Now let's break down the process.

Routes acts as a container/parent for all the individual routes that will be created in our app.

Route is used to create a single route. It takes in two attributes:

path, which specifies the URL path of the desired component. You can call this pathname whatever you want. Above, you'll notice that the first pathname is a backslash (/). Any component whose pathname is a backslash will get rendered first whenever the app loads for the first time. This implies that the Home component will be the first component to get rendered.
element, which specifies the component the route should render.

All we have done now is define our routes and their paths, and attach them to their respective components.
	
	 


[click here for storybook documentation](https://storybook.js.org/docs/ember/get-started/introduction)

[click here for react router v6 documentation](https://reactrouter.com/en/main)