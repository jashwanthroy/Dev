# MERN STACK

Day-1
Created the Restrocards for the real time json data into the component

Day-2
Rendered the dynamic data to component and displayed required fields

Day-3
Separated all the components and import & exports, Started 
# REACT HOOKS 
-> useState() - for State Variables in react
Made the filter of avgRating > 4.4 in restaurants

Day-4
Minolithic and Microservices Architecture
-> useEffect(()=>{},[])
two parameters : callback function, dependency list
callback function will be called after component rendering.

Day-5
Optional Chaining, shimmer ui, conditional Rendering
using useState() -> created a button like toggle functionality for login and logout
use of usestate rather than normal javascript variable
implementing the search bar functionality


Day-6
->When there is change in local state variable, React will re-render the component or Reconcialiation alogrithm will run again
-> implemented the search functionality among the data dynamically with respect to name, using the data from api

Day-7
Added corsproxy.io to make it secure to get the api from external website
useEffect-> three cases for dependency array -> not mentioned,empty([]),dependent ([variable / Component])
Tip: useState is not to declare outside function and not inside if-else,for-loop,function
# REACT ROUTER
npm i react-router-dom
using createBrowserRouter to make use of routing and with the help of RouterProvider

Day-7
useRouteError which is sed to handle the errorElement for the rotues
Children routes
[
    path: "/",
    element: </>,
    children:[{
        path:"/xyz",
        element,
    },
    ...
    ],
    errorElement:</>
]
<Oulet> it is a component which is used to replace the component based on the path or routes
<Link path=""/> it is also a component which takes "path" parameter and which will not reload the page but rerender the component
Two types of Routing
-> client side routing (with out reload of page)
-> server side routing (due to request response from server, API call from web browser)
React Application called Single Page Application

Day-8
Did Nothing but starting dynamic routing for rendering the menu of a specific restaurant.

Day-9
for particular restaurant API is not working as it is coming from backend of SWiggy API 

Day-10 (after 5 days gap)
Started class based component
->constructor,super(props),this.props
