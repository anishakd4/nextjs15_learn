# React Server components

[<img src="./pics/react_components.png" width="50%"/>](./pics/react_components.png)

[<img src="./pics/server_components.png" width="50%"/>](./pics/server_components.png)

[<img src="./pics/client_components.png" width="50%"/>](./pics/client_components.png)

# Create new app

[<img src="./pics/create_new_app.png" width="50%"/>](./pics/create_new_app.png)

[<img src="./pics/create_new_app_steps.png" width="50%"/>](./pics/create_new_app_steps.png)

# Router

[<img src="./pics/routing_png.png" width="50%"/>](./pics/routing_png.png)

- page.tsx file automatically maps to your site root url.
- Even though we deleted this layout.tsx file, nextjs will automatically create and set it up once we first access the root route.
- Routes are directly tied with their flder names in the app directory. A page.tsx file in the profile folder will mape to the /profile routes and a page.tsx file in the about folder will map to the /about route.

[<img src="./pics/routing_conventions.png" width="50%"/>](./pics/routing_conventions.png)

[<img src="./pics/routing_1.png" width="50%"/>](./pics/routing_1.png)

[<img src="./pics/routing_2.png" width="50%"/>](./pics/routing_2.png)

[<img src="./pics/routing_3.png" width="50%"/>](./pics/routing_3.png)

- If someone tries to visit a url that doesn't maps to any file in the app folder, here nextjs will serve 404 page. We don't need to write any special route to handle these.

[<img src="./pics/not_found.png" width="50%"/>](./pics/not_found.png)

- In nextjs we don't need to install and configure a router. Our folder and file structure does all the heavylifting

# Nested routes

[<img src="./pics/nested_routes_1.png" width="50%"/>](./pics/nested_routes_1.png)

[<img src="./pics/nested_routes_2.png" width="50%"/>](./pics/nested_routes_2.png)

[<img src="./pics/nested_routes_3.png" width="50%"/>](./pics/nested_routes_3.png)

[<img src="./pics/nested_routes_4.png" width="50%"/>](./pics/nested_routes_4.png)

[<img src="./pics/nested_routes_5.png" width="50%"/>](./pics/nested_routes_5.png)

[<img src="./pics/nested_routes_6.png" width="50%"/>](./pics/nested_routes_6.png)

# Dynamic routes

- Every page in App router receives route parameters through the param props.
- The type of params is a Promise that resolves to an object containing the dynamic segments as key value pair.
- The nice about server components is that we can use async await to resolve the promise and access the dynamic segemnt

[<img src="./pics/dynamic_routes_1.png" width="50%"/>](./pics/dynamic_routes_1.png)

[<img src="./pics/dynamic_routes_2.png" width="50%"/>](./pics/dynamic_routes_2.png)

[<img src="./pics/dynamic_routes_3.png" width="50%"/>](./pics/dynamic_routes_3.png)

[<img src="./pics/dynamic_routes_4.png" width="50%"/>](./pics/dynamic_routes_4.png)

[<img src="./pics/dynamic_routes_5.png" width="50%"/>](./pics/dynamic_routes_5.png)

# Nested Dynamic routes

[<img src="./pics/nested_dynamic_routes_6.png" width="50%"/>](./pics/nested_dynamic_routes_6.png)
