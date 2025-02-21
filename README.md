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

[<img src="./pics/nested_dynamic_routes_1.png" width="50%"/>](./pics/nested_dynamic_routes_1.png)

[<img src="./pics/nested_dynamic_routes_2.png" width="50%"/>](./pics/nested_dynamic_routes_2.png)

# Catch all Segments

- nextjs also offers optional catch all segments. /docs will show 404 page currently

[<img src="./pics/catch_all_segments.png" width="50%"/>](./pics/catch_all_segments.png)

[<img src="./pics/catch_all_segments_1.png" width="50%"/>](./pics/catch_all_segments_1.png)

[<img src="./pics/catch_all_segments_2.png" width="50%"/>](./pics/catch_all_segments_2.png)

[<img src="./pics/catch_all_segments_3.png" width="50%"/>](./pics/catch_all_segments_3.png)

[<img src="./pics/catch_all_segments_4.png" width="50%"/>](./pics/catch_all_segments_4.png)

[<img src="./pics/catch_all_segments_optional.png" width="50%"/>](./pics/catch_all_segments_optional.png)

# Not Found Page

- By default when you visit a route that doesn't exist in your route folder we will see a basic 404 page.
- This page will work fine for development but for production site we might want a customized 404 page.
- Not Found page can also be triggered programmatically using notFound function.
- We can create specific notfound pages for different sections of the app.
- Notfound component doesn't accept props. But we might more data to show different message based on the route parameters. For this we can use the `usePathname` hook from nextjs.
- In the new React server component architecture all React components are server components by default and hooks can only be used in client components. To fix add `"use client"` at the top.

[<img src="./pics/not_found_1.png" width="50%"/>](./pics/not_found_1.png)

[<img src="./pics/not_found_2.png" width="50%"/>](./pics/not_found_2.png)

[<img src="./pics/not_found_3.png" width="50%"/>](./pics/not_found_3.png)

[<img src="./pics/not_found_4.png" width="50%"/>](./pics/not_found_4.png)

[<img src="./pics/not_found_5.png" width="50%"/>](./pics/not_found_5.png)

[<img src="./pics/not_found_6.png" width="50%"/>](./pics/not_found_6.png)

[<img src="./pics/not_found_7.png" width="50%"/>](./pics/not_found_7.png)

# File Colocation

- A route only becomes publically accessible when you add page.tsx or page.jsx file to it.
- We can safely colocate project files inside the route segements inside app directory without worrying about they accidently becoming routes themselves.

[<img src="./pics/file_colocation_1.png" width="50%"/>](./pics/file_colocation_1.png)

[<img src="./pics/file_colocation_2.png" width="50%"/>](./pics/file_colocation_2.png)

[<img src="./pics/file_colocation_3.png" width="50%"/>](./pics/file_colocation_3.png)

[<img src="./pics/file_colocation_4.png" width="50%"/>](./pics/file_colocation_4.png)

[<img src="./pics/file_colocation_5.png" width="50%"/>](./pics/file_colocation_5.png)

[<img src="./pics/file_colocation_6.png" width="50%"/>](./pics/file_colocation_6.png)

# Private folders

[<img src="./pics/private_folders_1.png" width="50%"/>](./pics/private_folders_1.png)

[<img src="./pics/private_folders_2.png" width="50%"/>](./pics/private_folders_2.png)

[<img src="./pics/private_folders_3.png" width="50%"/>](./pics/private_folders_3.png)

[<img src="./pics/private_folders_4.png" width="50%"/>](./pics/private_folders_4.png)

# Route groups

- Route groups are the only way to share a layout between routes without affecting the url.
- To create a route group we simply wrap the folder name in paranthesis. This tells nextjs to treat this folder as an organisational tool only and excluding it from URL path.

[<img src="./pics/route_groups_1.png" width="50%"/>](./pics/route_groups_1.png)

[<img src="./pics/route_groups_2.png" width="50%"/>](./pics/route_groups_2.png)

[<img src="./pics/route_groups_3.png" width="50%"/>](./pics/route_groups_3.png)

# Layouts

- layout.tsx file in the app folder is called the route layout and it is not optional. Even if you delete it nextjs will auto generate it.
- Every layout component needs a children prop. This is where our page content will go.

[<img src="./pics/layouts_1.png" width="50%"/>](./pics/layouts_1.png)

[<img src="./pics/layouts_2.png" width="50%"/>](./pics/layouts_2.png)

[<img src="./pics/layouts_3.png" width="50%"/>](./pics/layouts_3.png)

[<img src="./pics/layouts_4.png" width="50%"/>](./pics/layouts_4.png)

[<img src="./pics/layouts_5.png" width="50%"/>](./pics/layouts_5.png)

[<img src="./pics/layouts_6.png" width="50%"/>](./pics/layouts_6.png)

[<img src="./pics/layouts_7.png" width="50%"/>](./pics/layouts_7.png)

[<img src="./pics/layouts_8.png" width="50%"/>](./pics/layouts_8.png)

# Nested layouts

- First nextjs renders the root layout where the children prop representing the productId folder content. then productId layout kicks in replacing the children prop in the root layout. Finally the actual content from the page.tsx from the productId fills the children prop in the productId layout.
- This pattern gives you the power to create specialized layouts for the different parts of the application.

[<img src="./pics/nested_layout_1.png" width="50%"/>](./pics/nested_layout_1.png)

[<img src="./pics/nested_layout_2.png" width="50%"/>](./pics/nested_layout_2.png)

[<img src="./pics/nested_layout_3.png" width="50%"/>](./pics/nested_layout_3.png)

[<img src="./pics/nested_layout_4.png" width="50%"/>](./pics/nested_layout_4.png)

[<img src="./pics/nested_layout_5.png" width="50%"/>](./pics/nested_layout_5.png)

[<img src="./pics/nested_layout_6.png" width="50%"/>](./pics/nested_layout_6.png)

[<img src="./pics/nested_layout_7.png" width="50%"/>](./pics/nested_layout_7.png)

[<img src="./pics/nested_layout_8.png" width="50%"/>](./pics/nested_layout_8.png)

# Multiple Root Layouts

[<img src="./pics/multiple_root_layouts_1.png" width="50%"/>](./pics/multiple_root_layouts_1.png)

[<img src="./pics/multiple_root_layouts_2.png" width="50%"/>](./pics/multiple_root_layouts_2.png)

# Routing Metadata And dynamic metadata

- While both page and layout can have metadata, page's metadata take priority when they overlap.
- When routes have multiple metadata objects, they merge together with deeper segments taking priority.
- Metadata won't work with pages marked with `use client` directive. The solution is to keep your metadata in server components and extract any client side functionality in separate component.

[<img src="./pics/routing_metadata_1.png" width="50%"/>](./pics/routing_metadata_1.png)

[<img src="./pics/routing_metadata_2.png" width="50%"/>](./pics/routing_metadata_2.png)

[<img src="./pics/routing_metadata_3.png" width="50%"/>](./pics/routing_metadata_3.png)

[<img src="./pics/routing_metadata_4.png" width="50%"/>](./pics/routing_metadata_4.png)

[<img src="./pics/routing_metadata_5.png" width="50%"/>](./pics/routing_metadata_5.png)

[<img src="./pics/routing_metadata_6.png" width="50%"/>](./pics/routing_metadata_6.png)

[<img src="./pics/routing_metadata_7.png" width="50%"/>](./pics/routing_metadata_7.png)

[<img src="./pics/routing_metadata_8.png" width="50%"/>](./pics/routing_metadata_8.png)

[<img src="./pics/routing_metadata_19.png" width="50%"/>](./pics/routing_metadata_9.png)

[<img src="./pics/routing_metadata_10.png" width="50%"/>](./pics/routing_metadata_10.png)
