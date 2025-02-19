# React Server components

![react_components](pics/react_components.png)

![server_components](pics/server_components.png)

![client_components](pics/client_components.png)

# Router

- page.tsx file automatically maps to your site root url.
- Even though we deleted this layout.tsx file, nextjs will automatically create and set it up once we first access the root route.
- Routes are directly tied with their flder names in the app directory. A page.tsx file in the profile folder will mape to the /profile routes and a page.tsx file in the about folder will map to the /about route.
- If someone tries to visit a url that doesn't maps to any file in the app folder, here nextjs will serve 404 page. We don't need to write any special route to handle these.
- In nextjs we don't need to install and configure a router. Our folder and file structure does all the heavylifting

# Nested routes

![nested_routes_1](pics/nested_routes_1.png)

![nested_routes_2](pics/nested_routes_2.png)

![nested_routes_3](pics/nested_routes_3.png)

![nested_routes_4](pics/nested_routes_4.png)

![nested_routes_5](pics/nested_routes_5.png)

![nested_routes_6](pics/nested_routes_6.png)
