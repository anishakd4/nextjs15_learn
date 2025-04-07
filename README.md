# React Server components

[<img src="./pics/react_components.png" width="75%"/>](./pics/react_components.png)

[<img src="./pics/server_components.png" width="75%"/>](./pics/server_components.png)

[<img src="./pics/client_components.png" width="75%"/>](./pics/client_components.png)

# Create new app

[<img src="./pics/create_new_app.png" width="75%"/>](./pics/create_new_app.png)

[<img src="./pics/create_new_app_steps.png" width="75%"/>](./pics/create_new_app_steps.png)

# Router

[<img src="./pics/routing_png.png" width="75%"/>](./pics/routing_png.png)

- page.tsx file automatically maps to your site root url.
- Even though we deleted this layout.tsx file, nextjs will automatically create and set it up once we first access the root route.
- Routes are directly tied with their folder names in the app directory. A page.tsx file in the profile folder will map to the /profile routes and a page.tsx file in the about folder will map to the /about route.

[<img src="./pics/routing_conventions.png" width="75%"/>](./pics/routing_conventions.png)

[<img src="./pics/routing_1.png" width="75%"/>](./pics/routing_1.png)

[<img src="./pics/routing_2.png" width="75%"/>](./pics/routing_2.png)

[<img src="./pics/routing_3.png" width="75%"/>](./pics/routing_3.png)

- If someone tries to visit a url that doesn't maps to any file in the app folder, here nextjs will serve 404 page. We don't need to write any special route to handle these.

[<img src="./pics/not_found.png" width="75%"/>](./pics/not_found.png)

- In nextjs we don't need to install and configure a router. Our folder and file structure does all the heavylifting

[<img src="./pics/routing_demo_understanding_1.png" width="75%"/>](./pics/routing_demo_understanding_1.png)

[<img src="./pics/routing_demo_understanding_2.png" width="75%"/>](./pics/routing_demo_understanding_2.png)

[<img src="./pics/routing_demo_understanding_3.png" width="75%"/>](./pics/routing_demo_understanding_3.png)

# Nested routes

[<img src="./pics/nested_routes_1.png" width="75%"/>](./pics/nested_routes_1.png)

[<img src="./pics/nested_routes_2.png" width="75%"/>](./pics/nested_routes_2.png)

[<img src="./pics/nested_routes_3.png" width="75%"/>](./pics/nested_routes_3.png)

[<img src="./pics/nested_routes_4.png" width="75%"/>](./pics/nested_routes_4.png)

[<img src="./pics/nested_routes_5.png" width="75%"/>](./pics/nested_routes_5.png)

[<img src="./pics/nested_routes_6.png" width="75%"/>](./pics/nested_routes_6.png)

[<img src="./pics/blog_default_react_component.png" width="75%"/>](./pics/blog_default_react_component.png)

[<img src="./pics/first_blog_default_react_component.png" width="75%"/>](./pics/first_blog_default_react_component.png)

# Dynamic routes

- Nextjs treats a folder name in square brackets as a dynamic segment make our routes dynamic and flexible
- Every page in App router receives route parameters through the param props.
- The type of params is a Promise that resolves to an object containing the dynamic segments as key value pair.
- The nice about server components is that we can use async await to resolve the promise and access the dynamic segemnt

[<img src="./pics/dynamic_routes_1.png" width="75%"/>](./pics/dynamic_routes_1.png)

[<img src="./pics/dynamic_routes_2.png" width="75%"/>](./pics/dynamic_routes_2.png)

[<img src="./pics/dynamic_routes_3.png" width="75%"/>](./pics/dynamic_routes_3.png)

[<img src="./pics/dynamic_routes_4.png" width="75%"/>](./pics/dynamic_routes_4.png)

[<img src="./pics/dynamic_routes_5.png" width="75%"/>](./pics/dynamic_routes_5.png)

[<img src="./pics/product_list_component_1.png" width="75%"/>](./pics/product_list_component_1.png)

[<img src="./pics/product_list_component_2.png" width="75%"/>](./pics/product_list_component_2.png)

[<img src="./pics/productid_component_1.png" width="75%"/>](./pics/productid_component_1.png)

[<img src="./pics/productid_component_2.png" width="75%"/>](./pics/productid_component_2.png)

[<img src="./pics/productid_component_3.png" width="75%"/>](./pics/productid_component_3.png)

[<img src="./pics/productid_component_4.png" width="75%"/>](./pics/productid_component_4.png)

[<img src="./pics/productid_component_5.png" width="75%"/>](./pics/productid_component_5.png)

# Nested Dynamic routes

[<img src="./pics/nested_dynamic_routes_1.png" width="75%"/>](./pics/nested_dynamic_routes_1.png)

[<img src="./pics/nested_dynamic_routes_2.png" width="75%"/>](./pics/nested_dynamic_routes_2.png)

[<img src="./pics/nested_dynamic_routes_3.png" width="75%"/>](./pics/nested_dynamic_routes_3.png)

[<img src="./pics/nested_dynamic_routes_4.png" width="75%"/>](./pics/nested_dynamic_routes_4.png)

[<img src="./pics/nested_dynamic_routes_5.png" width="75%"/>](./pics/nested_dynamic_routes_5.png)

# Catch all Segments

- nextjs also offers optional catch all segments. /docs will show 404 page currently

[<img src="./pics/catch_all_segments.png" width="75%"/>](./pics/catch_all_segments.png)

[<img src="./pics/catch_all_segments_1.png" width="75%"/>](./pics/catch_all_segments_1.png)

[<img src="./pics/catch_all_segments_2.png" width="75%"/>](./pics/catch_all_segments_2.png)

[<img src="./pics/catch_all_segments_3.png" width="75%"/>](./pics/catch_all_segments_3.png)

[<img src="./pics/catch_all_segments_4.png" width="75%"/>](./pics/catch_all_segments_4.png)

[<img src="./pics/catch_all_segments_optional.png" width="75%"/>](./pics/catch_all_segments_optional.png)

[<img src="./pics/catch_all_segments_docs_1.png" width="75%"/>](./pics/catch_all_segments_docs_1.png)

[<img src="./pics/catch_all_segments_docs_2.png" width="75%"/>](./pics/catch_all_segments_docs_2.png)

[<img src="./pics/catch_all_segments_docs_3.png" width="75%"/>](./pics/catch_all_segments_docs_3.png)

[<img src="./pics/catch_all_segments_docs_4.png" width="75%"/>](./pics/catch_all_segments_docs_4.png)

[<img src="./pics/catch_all_segments_docs_5.png" width="75%"/>](./pics/catch_all_segments_docs_5.png)

# Not Found Page

- By default when you visit a route that doesn't exist in your route folder we will see a basic 404 page.
- This page will work fine for development but for production site we might want a customized 404 page.
- Not Found page can also be triggered programmatically using notFound function.
- We can create specific notfound pages for different sections of the app.
- Notfound component doesn't accept props. But we might more data to show different message based on the route parameters. For this we can use the `usePathname` hook from nextjs.
- In the new React server component architecture all React components are server components by default and hooks can only be used in client components. To fix add `"use client"` at the top.

[<img src="./pics/not_found_1.png" width="75%"/>](./pics/not_found_1.png)

[<img src="./pics/not_found_2.png" width="75%"/>](./pics/not_found_2.png)

[<img src="./pics/not_found_3.png" width="75%"/>](./pics/not_found_3.png)

[<img src="./pics/not_found_4.png" width="75%"/>](./pics/not_found_4.png)

[<img src="./pics/not_found_5.png" width="75%"/>](./pics/not_found_5.png)

[<img src="./pics/not_found_6.png" width="75%"/>](./pics/not_found_6.png)

[<img src="./pics/not_found_7.png" width="75%"/>](./pics/not_found_7.png)

[<img src="./pics/not_found_file_1.png" width="75%"/>](./pics/not_found_file_1.png)

[<img src="./pics/not_found_file_2.png" width="75%"/>](./pics/not_found_file_2.png)

[<img src="./pics/not_found_file_3.png" width="75%"/>](./pics/not_found_file_3.png)

# File Colocation

- A route only becomes publically accessible when you add page.tsx or page.jsx file to it.
- Even when a route is public with a page.tsx file, the browser only gets what is returned by page.tsx and it has to be a default export app component.
- We can safely colocate project files inside the route segments inside app directory without worrying about they accidently becoming routes themselves.

[<img src="./pics/file_colocation_1.png" width="75%"/>](./pics/file_colocation_1.png)

[<img src="./pics/file_colocation_2.png" width="75%"/>](./pics/file_colocation_2.png)

[<img src="./pics/file_colocation_3.png" width="75%"/>](./pics/file_colocation_3.png)

[<img src="./pics/file_colocation_4.png" width="75%"/>](./pics/file_colocation_4.png)

[<img src="./pics/file_colocation_5.png" width="75%"/>](./pics/file_colocation_5.png)

[<img src="./pics/file_colocation_6.png" width="75%"/>](./pics/file_colocation_6.png)

# Private folders

[<img src="./pics/private_folders_1.png" width="75%"/>](./pics/private_folders_1.png)

[<img src="./pics/private_folders_2.png" width="75%"/>](./pics/private_folders_2.png)

[<img src="./pics/private_folders_3.png" width="75%"/>](./pics/private_folders_3.png)

[<img src="./pics/private_folders_4.png" width="75%"/>](./pics/private_folders_4.png)

# Route groups

- Route groups are the only way to share a layout between routes without affecting the url.
- To create a route group we simply wrap the folder name in paranthesis. This tells nextjs to treat this folder as an organisational tool only and excluding it from URL path.

[<img src="./pics/route_groups_1.png" width="75%"/>](./pics/route_groups_1.png)

[<img src="./pics/route_groups_2.png" width="75%"/>](./pics/route_groups_2.png)

[<img src="./pics/route_groups_3.png" width="75%"/>](./pics/route_groups_3.png)

# Layouts

- layout.tsx file in the app folder is called the route layout and it is not optional. Even if you delete it nextjs will auto generate it.
- Every layout component needs a children prop. This is where our page content will go.

[<img src="./pics/layouts_1.png" width="75%"/>](./pics/layouts_1.png)

[<img src="./pics/layouts_2.png" width="75%"/>](./pics/layouts_2.png)

[<img src="./pics/layouts_3.png" width="75%"/>](./pics/layouts_3.png)

[<img src="./pics/layouts_4.png" width="75%"/>](./pics/layouts_4.png)

[<img src="./pics/layouts_5.png" width="75%"/>](./pics/layouts_5.png)

[<img src="./pics/layouts_6.png" width="75%"/>](./pics/layouts_6.png)

[<img src="./pics/layouts_7.png" width="75%"/>](./pics/layouts_7.png)

[<img src="./pics/layouts_8.png" width="75%"/>](./pics/layouts_8.png)

# Nested layouts

- First nextjs renders the root layout where the children prop representing the productId folder content. then productId layout kicks in replacing the children prop in the root layout. Finally the actual content from the page.tsx from the productId fills the children prop in the productId layout.
- This pattern gives you the power to create specialized layouts for the different parts of the application.

[<img src="./pics/nested_layout_1.png" width="75%"/>](./pics/nested_layout_1.png)

[<img src="./pics/nested_layout_2.png" width="75%"/>](./pics/nested_layout_2.png)

[<img src="./pics/nested_layout_3.png" width="75%"/>](./pics/nested_layout_3.png)

[<img src="./pics/nested_layout_4.png" width="75%"/>](./pics/nested_layout_4.png)

[<img src="./pics/nested_layout_5.png" width="75%"/>](./pics/nested_layout_5.png)

[<img src="./pics/nested_layout_6.png" width="75%"/>](./pics/nested_layout_6.png)

[<img src="./pics/nested_layout_7.png" width="75%"/>](./pics/nested_layout_7.png)

[<img src="./pics/nested_layout_8.png" width="75%"/>](./pics/nested_layout_8.png)

# Multiple Root Layouts

[<img src="./pics/multiple_root_layouts_1.png" width="75%"/>](./pics/multiple_root_layouts_1.png)

[<img src="./pics/multiple_root_layouts_2.png" width="75%"/>](./pics/multiple_root_layouts_2.png)

# Routing Metadata And dynamic metadata

- While both page and layout can have metadata, page's metadata take priority when they overlap.
- When routes have multiple metadata objects, they merge together with deeper segments taking priority.
- Metadata won't work with pages marked with `use client` directive. The solution is to keep your metadata in server components and extract any client side functionality in separate component.

[<img src="./pics/routing_metadata_1.png" width="75%"/>](./pics/routing_metadata_1.png)

[<img src="./pics/routing_metadata_2.png" width="75%"/>](./pics/routing_metadata_2.png)

[<img src="./pics/routing_metadata_11.png" width="75%"/>](./pics/routing_metadata_11.png)

[<img src="./pics/routing_metadata_12.png" width="75%"/>](./pics/routing_metadata_12.png)

[<img src="./pics/routing_metadata_13.png" width="75%"/>](./pics/routing_metadata_13.png)

[<img src="./pics/routing_metadata_14.png" width="75%"/>](./pics/routing_metadata_14.png)

[<img src="./pics/routing_metadata_3.png" width="75%"/>](./pics/routing_metadata_3.png)

[<img src="./pics/routing_metadata_4.png" width="75%"/>](./pics/routing_metadata_4.png)

[<img src="./pics/routing_metadata_5.png" width="75%"/>](./pics/routing_metadata_5.png)

[<img src="./pics/routing_metadata_6.png" width="75%"/>](./pics/routing_metadata_6.png)

[<img src="./pics/routing_metadata_7.png" width="75%"/>](./pics/routing_metadata_7.png)

[<img src="./pics/routing_metadata_8.png" width="75%"/>](./pics/routing_metadata_8.png)

[<img src="./pics/routing_metadata_9.png" width="75%"/>](./pics/routing_metadata_9.png)

[<img src="./pics/routing_metadata_10.png" width="75%"/>](./pics/routing_metadata_10.png)

[<img src="./pics/routing_metadata_15.png" width="75%"/>](./pics/routing_metadata_15.png)

[<img src="./pics/routing_metadata_16.png" width="75%"/>](./pics/routing_metadata_16.png)

# Title metadata

- Title.default acts as a fallback for any child route that doesn't specify a title.
- Title.template is used when we want consistent prefix and suffix to the route title.
- Sometimes when we want to break free from the template pattern set by parent segment. This is exactly what Title.absolute does.

[<img src="./pics/title_metadata_7.png" width="75%"/>](./pics/title_metadata_7.png)

[<img src="./pics/title_metadata_8.png" width="75%"/>](./pics/title_metadata_8.png)

[<img src="./pics/title_metadata_9.png" width="75%"/>](./pics/title_metadata_9.png)

[<img src="./pics/title_metadata_10.png" width="75%"/>](./pics/title_metadata_10.png)

[<img src="./pics/title_metadata_11.png" width="75%"/>](./pics/title_metadata_11.png)

[<img src="./pics/title_metadata_12.png" width="75%"/>](./pics/title_metadata_12.png)

[<img src="./pics/title_metadata_13.png" width="75%"/>](./pics/title_metadata_13.png)

[<img src="./pics/title_metadata_14.png" width="75%"/>](./pics/title_metadata_14.png)

[<img src="./pics/title_metadata_15.png" width="75%"/>](./pics/title_metadata_15.png)

[<img src="./pics/title_metadata_16.png" width="75%"/>](./pics/title_metadata_16.png)

[<img src="./pics/title_metadata_1.png" width="75%"/>](./pics/title_metadata_1.png)

[<img src="./pics/title_metadata_2.png" width="75%"/>](./pics/title_metadata_2.png)

[<img src="./pics/title_metadata_3.png" width="75%"/>](./pics/title_metadata_3.png)

[<img src="./pics/title_metadata_4.png" width="75%"/>](./pics/title_metadata_4.png)

[<img src="./pics/title_metadata_5.png" width="75%"/>](./pics/title_metadata_5.png)

[<img src="./pics/title_metadata_6.png" width="75%"/>](./pics/title_metadata_6.png)

# Links

- replace replaces the current history entry with the new one.

[<img src="./pics/navigation.png" width="75%"/>](./pics/navigation.png)

[<img src="./pics/link_component.png" width="75%"/>](./pics/link_component.png)

[<img src="./pics/link_component_replace_1.png" width="75%"/>](./pics/link_component_replace_1.png)

[<img src="./pics/link_component_replace_2.png" width="75%"/>](./pics/link_component_replace_2.png)

[<img src="./pics/link_component_replace_3.png" width="75%"/>](./pics/link_component_replace_3.png)

[<img src="./pics/link_component_replace.png" width="75%"/>](./pics/link_component_replace.png)

# Active Links

- nextjs gives us the usePathname hook to help us figure out which link is active.

[<img src="./pics/active_link_1.png" width="75%"/>](./pics/active_link_1.png)

[<img src="./pics/active_link_2.png" width="75%"/>](./pics/active_link_2.png)

[<img src="./pics/active_link.png" width="75%"/>](./pics/active_link.png)

# params and searchParams

- We are able to await params and searchParams in news articles component because it is server component. If this was a client component we would get a error because client component don't support async await.
- To access params and searchParams in client component we need to use `use` hook.
- So async await for server components and `use` hook for client components.

[<img src="./pics/params_searchparams_1.png" width="75%"/>](./pics/params_searchparams_1.png)

[<img src="./pics/params_searchparams_2.png" width="75%"/>](./pics/params_searchparams_2.png)

[<img src="./pics/params_searchparams_3.png" width="75%"/>](./pics/params_searchparams_3.png)

[<img src="./pics/params_searchparams_4.png" width="75%"/>](./pics/params_searchparams_4.png)

[<img src="./pics/params_searchparams_5.png" width="75%"/>](./pics/params_searchparams_5.png)

[<img src="./pics/params_searchparams_6.png" width="75%"/>](./pics/params_searchparams_6.png)

# Navigating Programmatically

- useRouter only works in client component.
- router.push and router.replace both are available. To replace the current page in the history stack instead of adding a new entry, for the we need to use router.replace rather than router.push.
- We can also use router.back to go back to the previous page and move forward to move forward in the history.
- We can also use `redirect` function.

[<img src="./pics/navigation_programmatically_1.png" width="75%"/>](./pics/navigation_programmatically_1.png)

[<img src="./pics/navigation_programmatically_2.png" width="75%"/>](./pics/navigation_programmatically_2.png)

[<img src="./pics/navigation_programmatically_3.png" width="75%"/>](./pics/navigation_programmatically_3.png)

[<img src="./pics/navigation_programmatically_4.png" width="75%"/>](./pics/navigation_programmatically_4.png)

[<img src="./pics/navigation_programmatically_5.png" width="75%"/>](./pics/navigation_programmatically_5.png)

[<img src="./pics/navigation_programmatically_6.png" width="75%"/>](./pics/navigation_programmatically_6.png)

# Templates

- Layout only mounts new page content while keeping the common elements intact. They don't remount the shared components which lead to better performance.
- Sometimes you might need the layout to create a fresh instance for each child component during navigation. This could be useful for scenarios like implemening enter or exit animations or running useEffect hooks when routes change. This is where template files come in handy as an alternative to layout files.
- We can actually use both layout.tsx and template.tsx together. In this case the layout renders first, the its children are replace by template components output

[<img src="./pics/templates_1.png" width="75%"/>](./pics/templates_1.png)

[<img src="./pics/templates_2.png" width="75%"/>](./pics/templates_2.png)

[<img src="./pics/templates_3.png" width="75%"/>](./pics/templates_3.png)

[<img src="./pics/templates_4.png" width="75%"/>](./pics/templates_4.png)

[<img src="./pics/templates_5.png" width="75%"/>](./pics/templates_5.png)

[<img src="./pics/templates_6.png" width="75%"/>](./pics/templates_6.png)

[<img src="./pics/templates_7.png" width="75%"/>](./pics/templates_7.png)

[<img src="./pics/templates_8.png" width="75%"/>](./pics/templates_8.png)

[<img src="./pics/templates_demo_1.png" width="75%"/>](./pics/templates_demo_1.png)

[<img src="./pics/templates_demo_2.png" width="75%"/>](./pics/templates_demo_2.png)

# Loading UI

- This loading.tsx file automatically wraps the page.tsx file and its nested children within a react suspense boundary

[<img src="./pics/loading_1.png" width="75%"/>](./pics/loading_1.png)

[<img src="./pics/loading_2.png" width="75%"/>](./pics/loading_2.png)

[<img src="./pics/loading_3.png" width="75%"/>](./pics/loading_3.png)

[<img src="./pics/loading_4.png" width="75%"/>](./pics/loading_4.png)

[<img src="./pics/loading_5.png" width="75%"/>](./pics/loading_5.png)

[<img src="./pics/loading_6.png" width="75%"/>](./pics/loading_6.png)

[<img src="./pics/loading_7.png" width="75%"/>](./pics/loading_7.png)

# Error handling

- Error boundaries must be client component.
- ErrorBoundary component receive the error as a prop.

[<img src="./pics/error_handling_1.png" width="75%"/>](./pics/error_handling_1.png)

[<img src="./pics/error_handling_2.png" width="75%"/>](./pics/error_handling_2.png)

[<img src="./pics/error_handling_9.png" width="75%"/>](./pics/error_handling_9.png)

[<img src="./pics/error_handling_3.png" width="75%"/>](./pics/error_handling_3.png)

[<img src="./pics/error_handling_4.png" width="75%"/>](./pics/error_handling_4.png)

[<img src="./pics/error_handling_5.png" width="75%"/>](./pics/error_handling_5.png)

[<img src="./pics/error_handling_6.png" width="75%"/>](./pics/error_handling_6.png)

[<img src="./pics/error_handling_7.png" width="75%"/>](./pics/error_handling_7.png)

[<img src="./pics/error_handling_8.png" width="75%"/>](./pics/error_handling_8.png)

# Recovering from Errors

- Apart from the error prop, the error boundary in error.tsx provides us with another useful prop, the reset function. reset function helps to retry rendering the component in page.tsx.
- If we keep hitting the `try again` button, we will keep hitting the error again and again. This is because the retry function will attempt to re render client side, but converting the `reviewId` component to client side just to handle error will be a overkill
- To attempt server side recovery, we will need to rely on startTransition from react and useRouter from nextjs.
- reload function ensures that the refresh is deferred until the next render phase allowing react to handle any pending state updates before proceeding.

[<img src="./pics/recovering_from_error_1.png" width="75%"/>](./pics/recovering_from_error_1.png)

[<img src="./pics/recovering_from_error_2.png" width="75%"/>](./pics/recovering_from_error_2.png)

[<img src="./pics/recovering_from_error_3.png" width="75%"/>](./pics/recovering_from_error_3.png)

# Handling Errors in Nested Routes

[<img src="./pics/error_nested_routes_1.png" width="75%"/>](./pics/error_nested_routes_1.png)

[<img src="./pics/error_nested_routes_2.png" width="75%"/>](./pics/error_nested_routes_2.png)

[<img src="./pics/error_nested_routes_3.png" width="75%"/>](./pics/error_nested_routes_3.png)

[<img src="./pics/error_nested_routes_4.png" width="75%"/>](./pics/error_nested_routes_4.png)

[<img src="./pics/error_nested_routes_5.png" width="75%"/>](./pics/error_nested_routes_5.png)

[<img src="./pics/error_nested_routes_6.png" width="75%"/>](./pics/error_nested_routes_6.png)

# Handling Errors in Layouts

- error.tsx won't handle errors from a layout.tsx file in the same segment. The solution can be to move the error.tsx file up to the layout.tsx parent segment.

[<img src="./pics/error_in_layout_1.png" width="75%"/>](./pics/error_in_layout_1.png)

[<img src="./pics/error_in_layout_2.png" width="75%"/>](./pics/error_in_layout_2.png)

[<img src="./pics/error_in_layout_3.png" width="75%"/>](./pics/error_in_layout_3.png)

[<img src="./pics/error_in_layout_4.png" width="75%"/>](./pics/error_in_layout_4.png)

[<img src="./pics/error_in_layout_5.png" width="75%"/>](./pics/error_in_layout_5.png)

# Handling Global Errors

- global-error.tsx should export a react component that will be rendered when an error is encountered in the root layout or any of its nested route in the absence of a error boundary.
- We don't see global error layout in dev run, we can only see that in action in production environment.
- global-error.tsx needs to includes its own html and body tags because when this error boundary kicks in, it completely replaces your root layout

[<img src="./pics/global_error_1.png" width="75%"/>](./pics/global_error_1.png)

[<img src="./pics/global_error_2.png" width="75%"/>](./pics/global_error_2.png)

[<img src="./pics/global_error_3.png" width="75%"/>](./pics/global_error_3.png)

[<img src="./pics/global_error_4.png" width="75%"/>](./pics/global_error_4.png)

# Parallel Routes

- slots are not route segment and don't affect your url structure
- A children prop is actually an implicit slot that doesn't needs its own folder. `complex-dashboard/page.tsx` is same as `complex-dashboard/@children/page.tsx`

[<img src="./pics/parallel_routes_1.png" width="75%"/>](./pics/parallel_routes_1.png)

[<img src="./pics/parallel_routes_2.png" width="75%"/>](./pics/parallel_routes_2.png)

[<img src="./pics/parallel_routes_3.png" width="75%"/>](./pics/parallel_routes_3.png)

[<img src="./pics/parallel_routes_4.png" width="75%"/>](./pics/parallel_routes_4.png)

[<img src="./pics/parallel_routes_5.png" width="75%"/>](./pics/parallel_routes_5.png)

[<img src="./pics/parallel_routes_6.png" width="75%"/>](./pics/parallel_routes_6.png)

[<img src="./pics/parallel_routes_7.png" width="75%"/>](./pics/parallel_routes_7.png)

[<img src="./pics/parallel_routes_8.png" width="75%"/>](./pics/parallel_routes_8.png)

[<img src="./pics/parallel_routes_9.png" width="75%"/>](./pics/parallel_routes_9.png)

[<img src="./pics/parallel_routes_10.png" width="75%"/>](./pics/parallel_routes_10.png)

[<img src="./pics/parallel_routes_11.png" width="75%"/>](./pics/parallel_routes_11.png)

[<img src="./pics/parallel_routes_12.png" width="75%"/>](./pics/parallel_routes_12.png)

[<img src="./pics/parallel_routes_13.png" width="75%"/>](./pics/parallel_routes_13.png)

[<img src="./pics/parallel_routes_14.png" width="75%"/>](./pics/parallel_routes_14.png)

# Unmatched Routes

- archived is a regular route folder not a slot.
- complex-dashboard has 4 slots children, users, revenue and notifications.
- when we visit `http://localhost:3000/complex-dashboard` all slots how their respective content. But when we visit `http://localhost:3000/complex-dashboard/archived`, only notifications slot has matching content. The other three slots children, user and revenue become unmatched.
- When we move between default and archived notifications, the other three slots children, users and revenue remain exactly how they were and they are not influenced by the shift in the url path.

[<img src="./pics/unmatched_routes_1.png" width="75%"/>](./pics/unmatched_routes_1.png)

[<img src="./pics/unmatched_routes_2.png" width="75%"/>](./pics/unmatched_routes_2.png)

[<img src="./pics/unmatched_routes_3.png" width="75%"/>](./pics/unmatched_routes_3.png)

[<img src="./pics/unmatched_routes_4.png" width="75%"/>](./pics/unmatched_routes_4.png)

[<img src="./pics/unmatched_routes_5.png" width="75%"/>](./pics/unmatched_routes_5.png)

[<img src="./pics/unmatched_routes_6.png" width="75%"/>](./pics/unmatched_routes_6.png)

# Conditional routes

[<img src="./pics/conditional_routes_1.png" width="75%"/>](./pics/conditional_routes_1.png)

[<img src="./pics/conditional_routes_2.png" width="75%"/>](./pics/conditional_routes_2.png)

[<img src="./pics/conditional_routes_3.png" width="75%"/>](./pics/conditional_routes_3.png)

# Intercepting Routes

- It lets you show alternative UI while preserving context but defaults to the standard UI on direct page load.

[<img src="./pics/intercepting_routes_1.png" width="75%"/>](./pics/intercepting_routes_1.png)

[<img src="./pics/intercepting_routes_2.png" width="75%"/>](./pics/intercepting_routes_2.png)

[<img src="./pics/intercepting_routes_3.png" width="75%"/>](./pics/intercepting_routes_3.png)

[<img src="./pics/intercepting_routes_4.png" width="75%"/>](./pics/intercepting_routes_4.png)

[<img src="./pics/intercepting_routes_5.png" width="75%"/>](./pics/intercepting_routes_5.png)

[<img src="./pics/intercepting_routes_6.png" width="75%"/>](./pics/intercepting_routes_6.png)

[<img src="./pics/intercepting_routes_7.png" width="75%"/>](./pics/intercepting_routes_7.png)

[<img src="./pics/intercepting_routes_8.png" width="75%"/>](./pics/intercepting_routes_8.png)

[<img src="./pics/intercepting_routes_9.png" width="75%"/>](./pics/intercepting_routes_9.png)

[<img src="./pics/intercepting_routes_10.png" width="75%"/>](./pics/intercepting_routes_10.png)

[<img src="./pics/intercepting_routes_11.png" width="75%"/>](./pics/intercepting_routes_11.png)

[<img src="./pics/intercepting_routes_12.png" width="75%"/>](./pics/intercepting_routes_12.png)

[<img src="./pics/intercepting_routes_13.png" width="75%"/>](./pics/intercepting_routes_13.png)

[<img src="./pics/intercepting_routes_14.png" width="75%"/>](./pics/intercepting_routes_14.png)

[<img src="./pics/intercepting_routes_15.png" width="75%"/>](./pics/intercepting_routes_15.png)

[<img src="./pics/intercepting_routes_16.png" width="75%"/>](./pics/intercepting_routes_16.png)

[<img src="./pics/intercepting_routes_17.png" width="75%"/>](./pics/intercepting_routes_17.png)

[<img src="./pics/intercepting_routes_18.png" width="75%"/>](./pics/intercepting_routes_18.png)

[<img src="./pics/intercepting_routes_19.png" width="75%"/>](./pics/intercepting_routes_19.png)

[<img src="./pics/intercepting_routes_20.png" width="75%"/>](./pics/intercepting_routes_20.png)

# Parallel Intercepting Routes

- photo-feed folder has an implementation

# Route handler

- We need to watch out for conflicts between page routes and route handlers. In this case route.ts will take over by default.
- Route handler allows you to create custom request handlers for a given route. They are defined in a `route.js` or `route.ts`
- route.ts file at the same route level as page.tsx will resolve in a conflict and page will not be served. Route handler will handle the request.

[<img src="./pics/route_handler_1.png" width="75%"/>](./pics/route_handler_1.png)

[<img src="./pics/route_handler_2.png" width="75%"/>](./pics/route_handler_2.png)

[<img src="./pics/route_handler_3.png" width="75%"/>](./pics/route_handler_3.png)

[<img src="./pics/route_handler_4.png" width="75%"/>](./pics/route_handler_4.png)

[<img src="./pics/route_handler_5.png" width="75%"/>](./pics/route_handler_5.png)

[<img src="./pics/route_handler_6.png" width="75%"/>](./pics/route_handler_6.png)

[<img src="./pics/route_handler_7.png" width="75%"/>](./pics/route_handler_7.png)

[<img src="./pics/route_handler_8.png" width="75%"/>](./pics/route_handler_8.png)

[<img src="./pics/route_handler_9.png" width="75%"/>](./pics/route_handler_9.png)

[<img src="./pics/route_handler_10.png" width="75%"/>](./pics/route_handler_10.png)

[<img src="./pics/route_handler_11.png" width="75%"/>](./pics/route_handler_11.png)

[<img src="./pics/route_handler_12.png" width="75%"/>](./pics/route_handler_12.png)

[<img src="./pics/route_handler_13.png" width="75%"/>](./pics/route_handler_13.png)

# Handling GET Requests

[<img src="./pics/get_request_1.png" width="75%"/>](./pics/get_request_1.png)

[<img src="./pics/get_request_2.png" width="75%"/>](./pics/get_request_2.png)

[<img src="./pics/get_request_3.png" width="75%"/>](./pics/get_request_3.png)

[<img src="./pics/get_request_4.png" width="75%"/>](./pics/get_request_4.png)

[<img src="./pics/get_request_5.png" width="75%"/>](./pics/get_request_5.png)

[<img src="./pics/get_request_6.png" width="75%"/>](./pics/get_request_6.png)

# Dynamic Route Handlers

[<img src="./pics/dynamic_route_handler_1.png" width="75%"/>](./pics/dynamic_route_handler_1.png)

[<img src="./pics/dynamic_route_handler_2.png" width="75%"/>](./pics/dynamic_route_handler_2.png)

# patch Request

[<img src="./pics/patch_request.png" width="75%"/>](./pics/patch_request.png)

# Delete Request

[<img src="./pics/delete_request.png" width="75%"/>](./pics/delete_request.png)

# URL Query Parameters

- Although we are using standard request API. In the context of Nextjs, the type we are dealing with NextRequest

[<img src="./pics/query_parameters_1.png" width="75%"/>](./pics/query_parameters_1.png)

[<img src="./pics/query_parameters_2.png" width="75%"/>](./pics/query_parameters_2.png)

[<img src="./pics/query_parameters_3.png" width="75%"/>](./pics/query_parameters_3.png)

[<img src="./pics/query_parameters_4.png" width="75%"/>](./pics/query_parameters_4.png)

# Headers in Route Handlers

- headers returned from `headers() `function are readonly. To set new headers you will need to set a new response with custom headers.

[<img src="./pics/header_route_handlers_1.png" width="75%"/>](./pics/header_route_handlers_1.png)

[<img src="./pics/header_route_handlers_2.png" width="75%"/>](./pics/header_route_handlers_2.png)

[<img src="./pics/header_route_handlers_3.png" width="75%"/>](./pics/header_route_handlers_3.png)

[<img src="./pics/header_route_handlers_4.png" width="75%"/>](./pics/header_route_handlers_4.png)

[<img src="./pics/header_route_handlers_5.png" width="75%"/>](./pics/header_route_handlers_5.png)

[<img src="./pics/header_route_handlers_6.png" width="75%"/>](./pics/header_route_handlers_6.png)

[<img src="./pics/header_route_handlers_7.png" width="75%"/>](./pics/header_route_handlers_7.png)

[<img src="./pics/header_route_handlers_8.png" width="75%"/>](./pics/header_route_handlers_8.png)

[<img src="./pics/header_route_handlers_9.png" width="75%"/>](./pics/header_route_handlers_9.png)

[<img src="./pics/header_route_handlers_10.png" width="75%"/>](./pics/header_route_handlers_10.png)

# Cookies in Route Handlers

- The first approach is to return a new response with the setCookie header. To read this cookie in our route handler we can use the request parameter.
- For the second approach nextjs provides a built in cookies function.

[<img src="./pics/cookie_route_handlers_6.png" width="75%"/>](./pics/cookie_route_handlers_6.png)

[<img src="./pics/cookie_route_handlers_1.png" width="75%"/>](./pics/cookie_route_handlers_1.png)

[<img src="./pics/cookie_route_handlers_2.png" width="75%"/>](./pics/cookie_route_handlers_2.png)

[<img src="./pics/cookie_route_handlers_3.png" width="75%"/>](./pics/cookie_route_handlers_3.png)

[<img src="./pics/cookie_route_handlers_4.png" width="75%"/>](./pics/cookie_route_handlers_4.png)

[<img src="./pics/cookie_route_handlers_5.png" width="75%"/>](./pics/cookie_route_handlers_5.png)

# Redirects in route handlers

- Lets suppose `http://localhost:3000/api/v2/users` is a significant improvement over `http://localhost:3000/api/v1/users`. To move clients to this new endpoint we can setup a redirect in v1.
- SO in browser when users hit `http://localhost:3000/api/v1/users`, they will receive temporary redirect to `http://localhost:3000/api/v2/users`

[<img src="./pics/redirect_in_route_handlers_1.png" width="75%"/>](./pics/redirect_in_route_handlers_1.png)

[<img src="./pics/redirect_in_route_handlers_2.png" width="75%"/>](./pics/redirect_in_route_handlers_2.png)

[<img src="./pics/redirect_in_route_handlers_3.png" width="75%"/>](./pics/redirect_in_route_handlers_3.png)

[<img src="./pics/redirect_in_route_handlers_4.png" width="75%"/>](./pics/redirect_in_route_handlers_4.png)

# Caching in Route Handlers

- Each page reload will show you the latest time because there is no caching by default.
- We have hardcoded the categories data for simplicity but in the real world scenario, this data will typically come from a database. Since this data rarely change, every request to this endpoint will trigger a database query which is in efficient. To avoid this we can use caching.
- `export const dynamic = "force-static";` This ensures that the response is cached and served instantly to the all users.
- Caching won't work in dev mode. Time will only change when the application is re-built.
- If we want to update our without rebuilding the entire application, we can revalidate the cache data using incremental static regeneration.
- `export const revalidate = 10;` this will revalidate the data every 10 seconds. When we build this application, the time route handler code will be generated with the time of the build. After you run `npm run start`, all request made to `/time` are cached and instant. After 10 seconds, new version of the code is generated with the latest timestamp. This process will repeat.

[<img src="./pics/caching_in_route_handlers_1.png" width="75%"/>](./pics/caching_in_route_handlers_1.png)

[<img src="./pics/caching_in_route_handlers_2.png" width="75%"/>](./pics/caching_in_route_handlers_2.png)

[<img src="./pics/caching_in_route_handlers_3.png" width="75%"/>](./pics/caching_in_route_handlers_3.png)

[<img src="./pics/caching_in_route_handlers_4.png" width="75%"/>](./pics/caching_in_route_handlers_4.png)

[<img src="./pics/caching_in_route_handlers_5.png" width="75%"/>](./pics/caching_in_route_handlers_5.png)

[<img src="./pics/caching_in_route_handlers_6.png" width="75%"/>](./pics/caching_in_route_handlers_6.png)

[<img src="./pics/caching_in_route_handlers_7.png" width="75%"/>](./pics/caching_in_route_handlers_7.png)

# Middleware

- Beyond redirect middleware also supports URL rewrites, a feature perfect for handling legacy URLs or improving SEO. We can use rewrite to keep the URL in the browser unchanged while serving different content.
- Custom headers are useful for passing extra information which can be used by client side scripts or for debugging.
- As we can see that middleware can be effectively used to manipulate cookies and headers.
- In summary middleware in nextjs allows you to effectively control and intercept the request response cycle, enabling redirects, URL rewrites and the manipulation of headers and cookies.

[<img src="./pics/middleware_1.png" width="75%"/>](./pics/middleware_1.png)

[<img src="./pics/middleware_2.png" width="75%"/>](./pics/middleware_2.png)

[<img src="./pics/middleware_3.png" width="75%"/>](./pics/middleware_3.png)

[<img src="./pics/middleware_4.png" width="75%"/>](./pics/middleware_4.png)

[<img src="./pics/middleware_5.png" width="75%"/>](./pics/middleware_5.png)

# Rendering

[<img src="./pics/rendering_1.png" width="75%"/>](./pics/rendering_1.png)

# Client-side Rendering (CSR)

- When client visited your website, the server would send back a single HTML page, this page was pretty bare bones just a simple div and a link to a javascript file. This bundle.js is a real powerhouse which contains everything: the react library, the application code everything needed to run your application.
- Browser would download this file as soon as the HTML was processed. Once all the javascript is downloaded, it would get to work generating all the HTML right there on your computer injecting it into DOM under the root div element and that is when you finally see your user interface.

[<img src="./pics/client_side_rendering_1.png" width="75%"/>](./pics/client_side_rendering_1.png)

[<img src="./pics/client_side_rendering_2.png" width="75%"/>](./pics/client_side_rendering_2.png)

[<img src="./pics/client_side_rendering_3.png" width="75%"/>](./pics/client_side_rendering_3.png)

[<img src="./pics/client_side_rendering_4.png" width="75%"/>](./pics/client_side_rendering_4.png)

[<img src="./pics/client_side_rendering_5.png" width="75%"/>](./pics/client_side_rendering_5.png)

[<img src="./pics/client_side_rendering_6.png" width="75%"/>](./pics/client_side_rendering_6.png)

[<img src="./pics/client_side_rendering_7.png" width="75%"/>](./pics/client_side_rendering_7.png)

# Server-side Rendering (SSR)

- To overcome these drawbacks of client side rendering, modern react frameworks like gatsby and nextjs move towards server side solutions.
- When a request comes in then instead of sending a bare HTML file that needs client side javascript to build the page, the server now handles rendering the complete HTML. This fully formed HTML document goes straight to the browser. Since the HTML is already generated on the server, the browser can quickly parse and display it, giving us faster initial page load times.
- While SSR makes content visible faster it introduces its own complexity around interactivity. The page can't become fully interactive until the javascript bundle comprising both react itself and your application code has finished downloading and executing in the browser. This important phase is known as hydration is where the static HTML page initially served by the server is brought to life.

[<img src="./pics/server_side_rendering_1.png" width="75%"/>](./pics/server_side_rendering_1.png)

[<img src="./pics/server_side_rendering_2.png" width="75%"/>](./pics/server_side_rendering_2.png)

[<img src="./pics/server_side_rendering_3.png" width="75%"/>](./pics/server_side_rendering_3.png)

[<img src="./pics/server_side_rendering_4.png" width="75%"/>](./pics/server_side_rendering_4.png)

[<img src="./pics/server_side_rendering_5.png" width="75%"/>](./pics/server_side_rendering_5.png)

[<img src="./pics/server_side_rendering_6.png" width="75%"/>](./pics/server_side_rendering_6.png)

[<img src="./pics/server_side_rendering_7.png" width="75%"/>](./pics/server_side_rendering_7.png)

[<img src="./pics/server_side_rendering_8.png" width="75%"/>](./pics/server_side_rendering_8.png)

[<img src="./pics/server_side_rendering_9.png" width="75%"/>](./pics/server_side_rendering_9.png)

# Suspense SSR

- To address these performance drawbacks of SSR, React 18 introduced the suspense SSR architecture.
- When you wrap something like your main content area in a Suspense component, you are telling React to not to wait for this part and start streaming the rest of the page. React will show a loading spinner for that wrapped section while it works for the rest of the page. When the server finally has the data ready for that main section, React streams the additional HTML through the ongoing stream along with a tiny bit of javascript that knows exactly where to position that HTML. The cool part, users can see the main section's content even before react itself finishes loading on their browser.
- This solves our first problem you don't have to fetch everything before you can show anything. If a particular section is slow and could potentially delay the initial HTML then no problem it can seamlessly integrated into the stream later when its ready.
- This is the essence of how suspense facilitates server side HTML streaming.
- Lets say user is about to hydrate side nav but the user clicks on the main content area. React will immediately switch gears and hydrate the clicked component during the click events capture phase. This means the component is ready to respond right away. The side nav will get hydrated later.
- Despite all these improvements there are still some challenges to think about.

[<img src="./pics/suspense_ssr_1.png" width="75%"/>](./pics/suspense_ssr_1.png)

[<img src="./pics/suspense_ssr_2.png" width="75%"/>](./pics/suspense_ssr_2.png)

[<img src="./pics/suspense_ssr_3.png" width="75%"/>](./pics/suspense_ssr_3.png)

[<img src="./pics/suspense_ssr_4.png" width="75%"/>](./pics/suspense_ssr_4.png)

[<img src="./pics/suspense_ssr_5.png" width="75%"/>](./pics/suspense_ssr_5.png)

[<img src="./pics/suspense_ssr_6.png" width="75%"/>](./pics/suspense_ssr_6.png)

[<img src="./pics/suspense_ssr_7.png" width="75%"/>](./pics/suspense_ssr_7.png)

[<img src="./pics/suspense_ssr_8.png" width="75%"/>](./pics/suspense_ssr_8.png)

[<img src="./pics/suspense_ssr_9.png" width="75%"/>](./pics/suspense_ssr_9.png)

[<img src="./pics/suspense_ssr_10.png" width="75%"/>](./pics/suspense_ssr_10.png)

[<img src="./pics/suspense_ssr_11.png" width="75%"/>](./pics/suspense_ssr_11.png)

[<img src="./pics/suspense_ssr_12.png" width="75%"/>](./pics/suspense_ssr_12.png)

[<img src="./pics/suspense_ssr_13.png" width="75%"/>](./pics/suspense_ssr_13.png)

[<img src="./pics/suspense_ssr_14.png" width="75%"/>](./pics/suspense_ssr_14.png)

# React server components

[<img src="./pics/react_server_component_1.png" width="75%"/>](./pics/react_server_component_1.png)

[<img src="./pics/react_server_component_2.png" width="75%"/>](./pics/react_server_component_2.png)

[<img src="./pics/react_server_component_3.png" width="75%"/>](./pics/react_server_component_3.png)

[<img src="./pics/react_server_component_4.png" width="75%"/>](./pics/react_server_component_4.png)

[<img src="./pics/react_server_component_5.png" width="75%"/>](./pics/react_server_component_5.png)

[<img src="./pics/react_server_component_6.png" width="75%"/>](./pics/react_server_component_6.png)

[<img src="./pics/react_server_component_7.png" width="75%"/>](./pics/react_server_component_7.png)

[<img src="./pics/react_server_component_8.png" width="75%"/>](./pics/react_server_component_8.png)

[<img src="./pics/react_server_component_9.png" width="75%"/>](./pics/react_server_component_9.png)

[<img src="./pics/react_server_component_10.png" width="75%"/>](./pics/react_server_component_10.png)

[<img src="./pics/react_server_component_11.png" width="75%"/>](./pics/react_server_component_11.png)

[<img src="./pics/react_server_component_12.png" width="75%"/>](./pics/react_server_component_12.png)

[<img src="./pics/react_server_component_13.png" width="75%"/>](./pics/react_server_component_13.png)

[<img src="./pics/react_server_component_14.png" width="75%"/>](./pics/react_server_component_14.png)

[<img src="./pics/react_server_component_15.png" width="75%"/>](./pics/react_server_component_15.png)

[<img src="./pics/react_server_component_16.png" width="75%"/>](./pics/react_server_component_16.png)

[<img src="./pics/react_server_component_17.png" width="75%"/>](./pics/react_server_component_17.png)

# Server and Client Components

- Every component in nextjs app defaults to being a server component, this includes the built in root layout.tsx
- About page is a server component by default.
- console.log in about component logs in browser console with a special server tag and also in terminal console. This confirms that our component is a server component.
- Server components can't interact with the browser APIs or handle user interactions. Is we try to use `useState` hook, we will get an error because useState requires a client component environment.
- Currently about page is a server component. Server components can't maintain state because they run on the server where browser based state management doesn't exist. This reinforces the fact that Nextjs treats every component as a server component by default unless explicitly specified otherwise.
- To convert a server component to a client component, at the top of the file, we must include a directive "use client". It signals to nextjs that this dashboard component along with any components it imports is intended for client side execution. As a result the component gets gains full access to browser APIs and the ability to handle interactivity.
- When we click on the dashboard link for the home page we can see the console.log appears in the browser console without the server tag, but we don't the see the log in terminal.
- But if we reload the page in the browser we can see the log in terminal and browser both. This happens because when we navigate using the link component the dashboard component is only rendered in the client side and we see the message in the browser console but if we reload the page, the dashboard component is rendered once on the server to allow the user to immediately see the HTML content rather than a blank screen and then again on the client side during hydration that is why we see the message in the browser console and terminal both.

[<img src="./pics/server_and_client_component_1.png" width="75%"/>](./pics/server_and_client_component_1.png)

[<img src="./pics/server_and_client_component_2.png" width="75%"/>](./pics/server_and_client_component_2.png)

[<img src="./pics/server_and_client_component_3.png" width="75%"/>](./pics/server_and_client_component_3.png)

[<img src="./pics/server_and_client_component_4.png" width="75%"/>](./pics/server_and_client_component_4.png)

[<img src="./pics/server_and_client_component_5.png" width="75%"/>](./pics/server_and_client_component_5.png)

[<img src="./pics/server_and_client_component_6.png" width="75%"/>](./pics/server_and_client_component_6.png)

[<img src="./pics/server_and_client_component_7.png" width="75%"/>](./pics/server_and_client_component_7.png)

[<img src="./pics/server_and_client_component_8.png" width="75%"/>](./pics/server_and_client_component_8.png)

[<img src="./pics/server_and_client_component_9.png" width="75%"/>](./pics/server_and_client_component_9.png)

[<img src="./pics/server_and_client_component_10.png" width="75%"/>](./pics/server_and_client_component_10.png)

# RSC Rendering Lifecycle

- When the browser requests a page the nextjs app router matches the requested URL to a server component. Nextjs then instructs react to render that server component. React renders the server component and any child components that are also server components converting them into a special JSON format known as the RSC payload.
- During this process if any server component suspends, React pauses rendering of that subtree and sends a placeholder value instead.
- While all this is happening React is also preparing instructions for the client components that we will need later.
- Nextjs takes both the RSC payload and the client component instructions to generate HTML on the server. This HTML streams to your browser right away giving you a quick non interactive preview of the route. At the same time Nextjs also streams the RSC payload as React renders each piece of UI.
- Once this reaches the browser, nextjs processes everything that was streamed over. React uses the RSC payload and client component instructions to progressively render the UI.
- Once all the client components and the server components output has been loaded, the final UI state is presented to the user. Client components undergo hydration transforming our application from a static display into an interactive experience.
- This is the initial loading sequence for our RSCs. Now lets look at the update sequence for refreshing parts of our application.
- The browser requests a refetch of a specific UI such a full route. Nextjs processes the request and matches it to the requested server component. Nextjs instructs react to render the component tree. React renders the component similar to what happened during the initial loading but here is how it is different, we don't generate new HTML for updates instead nextjs progressively streams the response data straight back to the client.
- On receiving the stream response nextjs triggers a re-render of the route using the new content. React then carefully reconciles or merges the new rendered output with the existing components on the screen because we are using a special json format instead of HTML, React can update everything while keeping the UI states intact things like where you have clicked. This is the RSC update sequence.
- In Nextjs there are 3 different ways in which rendering can happen on the server: static, dynamic and rendering.

[<img src="./pics/rsc_rendering_lifecycler_1.png" width="75%"/>](./pics/rsc_rendering_lifecycler_1.png)

[<img src="./pics/rsc_rendering_lifecycler_2.png" width="75%"/>](./pics/rsc_rendering_lifecycler_2.png)

[<img src="./pics/rsc_rendering_lifecycler_3.png" width="75%"/>](./pics/rsc_rendering_lifecycler_3.png)

[<img src="./pics/rsc_rendering_lifecycler_4.png" width="75%"/>](./pics/rsc_rendering_lifecycler_4.png)

[<img src="./pics/rsc_rendering_lifecycler_5.png" width="75%"/>](./pics/rsc_rendering_lifecycler_5.png)

# Static Rendering

- Visit the homepage, it is pre-rendered and served. Refresh pre-rendered and served. This ensures you always see your latest code changes in every request.
- Nextjs also displays a static route indicator during development to help you identify which routes are static.
- I will say though that don't worry too much about static generation during development, what really matters is understanding how it works when you build your app for production.
- Remove `.next` folder. `npm run build` creates a optimized production build of our application. The output goes into `.next` folder again, but the contents will be quite different which we see after running `npm run dev`.
- You will notice 3 columns showing information about each route, size and first load JS. Size shows how much data needs to be downloaded when navigating to the corresponding route client side in the browser. First load JS tells us how much gets downloaded when initially loading the page from the server.
- There is shared bundle that all routes use, it includes your global css, runtime code, framework code, vendor code like react for example and some route related code. This shared bundle comes in around 1005kb.
- Looking at individual routes a root page from page.tsx in the app folder in 8.4 kb, however when someone visits the home page, they will download both this and the shared bundle totalling 114 kb. Nextjs also automatically generates not found page, it is tiny at 979bytes but needs 106 kb with the shared bundle.s
- Next to each route you will see some symbols and at the bottom is the nextjs legends showing how each route is rendered.
- Our root route has a hollow circle indicating static rendering, same goes for other routes also. They all are pre-rendered at build time as static HTML.
- Nextjs puts everything in the `.next` folder which has all the files needed to serve our application to the browser.
- In the server folder there is an app folder that matches our application route structure. We can find `index.html` in the app folder. We can also find `not-found.html` on the app folder. We have also got about.html and also dashboard.html. You might wonder why do we see HTML for client components, that is because even client components are pre-rendered as an optimization step.
- Each route also gets an RSC payload. about.rsc for about server component and dashboard.rsc for dashboard child component. These files with a special JSON format are generated by react for each route and represent your virtual DOM in a super compact way using abbreviation and internal references.
- For server components this payload include the actual rendered result like the h1 tag with the about page text in it.
- Client components payload has placeholders showing where the client components should go plus references to their javascript files.
- Our dashboard route payload points to where its component code lives.
- localhost request is coming as a Document type. This is the index.html we saw in the app folder.
- dashboard and about RSC is also downloaded. These are essential for build the UI on the client side when we navigate to /about or /dashboard using the links.
- There is also the dashboard component code `page-dd2332432423.js` that has been downloaded.
- If we click on the about and dashboard components link, we can see that they render instantly without hitting the server that is because the initial load included everything for client side navigation. So we already have everything we need right in the browser.
- But how did nextjs know to send us the about and dashboard component stuff before even we clicked anything that is thanks to a feature called pre-fetching, a clever technique that preloads routes in the background.
- When you type directly in the browser the url or hit refresh then only the HTML documents link about.html and dashboard.html gets downloaded.
- For `/dashboard` we also get the component code for hydration.
- Timestamp for about page remains same irrespective of how much we refresh the page that is because it was locked in when we build the application.

[<img src="./pics/static_rendering_1.png" width="75%"/>](./pics/static_rendering_1.png)

[<img src="./pics/static_rendering_2.png" width="75%"/>](./pics/static_rendering_2.png)

[<img src="./pics/static_rendering_3.png" width="75%"/>](./pics/static_rendering_3.png)

[<img src="./pics/static_rendering_4.png" width="75%"/>](./pics/static_rendering_4.png)

[<img src="./pics/static_rendering_5.png" width="75%"/>](./pics/static_rendering_5.png)

[<img src="./pics/static_rendering_6.png" width="75%"/>](./pics/static_rendering_6.png)

[<img src="./pics/static_rendering_7.png" width="75%"/>](./pics/static_rendering_7.png)

[<img src="./pics/static_rendering_8.png" width="75%"/>](./pics/static_rendering_8.png)

[<img src="./pics/static_rendering_9.png" width="75%"/>](./pics/static_rendering_9.png)

[<img src="./pics/static_rendering_10.png" width="75%"/>](./pics/static_rendering_10.png)

[<img src="./pics/static_rendering_11.png" width="75%"/>](./pics/static_rendering_11.png)

[<img src="./pics/static_rendering_12.png" width="75%"/>](./pics/static_rendering_12.png)

[<img src="./pics/static_rendering_13.png" width="75%"/>](./pics/static_rendering_13.png)

[<img src="./pics/static_rendering_14.png" width="75%"/>](./pics/static_rendering_14.png)

[<img src="./pics/static_rendering_15.png" width="75%"/>](./pics/static_rendering_15.png)

[<img src="./pics/static_rendering_16.png" width="75%"/>](./pics/static_rendering_16.png)

[<img src="./pics/static_rendering_17.png" width="75%"/>](./pics/static_rendering_17.png)

[<img src="./pics/static_rendering_18.png" width="75%"/>](./pics/static_rendering_18.png)

[<img src="./pics/static_rendering_19.png" width="75%"/>](./pics/static_rendering_19.png)

[<img src="./pics/static_rendering_20.png" width="75%"/>](./pics/static_rendering_20.png)

[<img src="./pics/static_rendering_21.png" width="75%"/>](./pics/static_rendering_21.png)

# Dynamic rendering

- for /about2 route f symbol is there which means dynamic rendering.
- Dynamically rendered pages are not generated during build times. If we inspect .next/server/app we won't see html page for about2 page.
- Each we refresh /about2 we get latest time.
- Since we are generating a new page for each request, there is simply no need to store it.

[<img src="./pics/dynamic_rendering_1.png" width="75%"/>](./pics/dynamic_rendering_1.png)

[<img src="./pics/dynamic_rendering_2.png" width="75%"/>](./pics/dynamic_rendering_2.png)

[<img src="./pics/dynamic_rendering_3.png" width="75%"/>](./pics/dynamic_rendering_3.png)

[<img src="./pics/dynamic_rendering_4.png" width="75%"/>](./pics/dynamic_rendering_4.png)

[<img src="./pics/dynamic_rendering_5.png" width="75%"/>](./pics/dynamic_rendering_5.png)

# generateStaticParams

- Nextjs handles the product list page and product details page differently, the product list page gets static rendering while the product details page is setup for dynamic rendering. In `.next/server/app` we can see products.html for product list page but we don't find anything for the product details page.
- If we visit `/products/1` we see the exact new time each time we refresh the page because product details page is rendered on demand at request time.
- From our previous learning we know that static rendering gives us better performance, wouldn't it be great if we could tell nextjs to pre-render our featured product details pages. This is what `generateStaticParams` helps us do.
- After generateStaticParams when we rebuild the project, you will see nextjs pre-render the product details pages for all three featured products.
- In `.next/server/app/products` you will find HTML files `1.html`, `2.html` and `3.html`
- If we visit `/products/1` we will see the same exact time each time we refresh the page as it is serving now a pre-rendered HTML file now.
- `generateStaticParams` is a powerful feature in nextjs that lets you pre-render static routes for dynamic segments. It runs at build time, handles multiple dynamic segments and can really boost your application's performance by ensuring that frequently accessed pages are pre-rendered and ready to serve immediately.

[<img src="./pics/generate_static_params_1.png" width="75%"/>](./pics/generate_static_params_1.png)

[<img src="./pics/generate_static_params_2.png" width="75%"/>](./pics/generate_static_params_2.png)

[<img src="./pics/generate_static_params_3.png" width="75%"/>](./pics/generate_static_params_3.png)

[<img src="./pics/generate_static_params_4.png" width="75%"/>](./pics/generate_static_params_4.png)

[<img src="./pics/generate_static_params_5.png" width="75%"/>](./pics/generate_static_params_5.png)

[<img src="./pics/generate_static_params_6.png" width="75%"/>](./pics/generate_static_params_6.png)

[<img src="./pics/generate_static_params_7.png" width="75%"/>](./pics/generate_static_params_7.png)

[<img src="./pics/generate_static_params_8.png" width="75%"/>](./pics/generate_static_params_8.png)

# dynamicParams

- What happens when someone tries to access a product page page with an id that is not in our `generateStaticParams` function list like products with id 4,5,6 and so on. Nextjs will still render those pages just not in advance, instead it statically renders them at runtime.
- When we navigate to `http://localhost:3000/products/4` product id page still works and if we inspect our build folder `.next/server/app/products`, we now see 4.html. This file was generated at runtime when we visited `http://localhost:3000/products/4` and since the page is statically rendered, the timestamp will not change each time we refresh the page.
- If we visit `http://localhost:3000/products/5` this will generate a new html file with current time and you see the file in the build folder.
- We can control this behavior through a setting called `dynamicParams`. By default dynamicParams is set to true. Which means Nextjs will statically render pages on demand for any dynamic segments not included in `generateStaticParams`.
- We can set it to false which tells Nextjs to return a 404 error for any dynamic segments not included in our pre-rendered list.
- Now if we visit `http://localhost:3000/products/4` we get 404 error.

[<img src="./pics/dynamic_params_1.png" width="75%"/>](./pics/dynamic_params_1.png)

[<img src="./pics/dynamic_params_2.png" width="75%"/>](./pics/dynamic_params_2.png)

[<img src="./pics/dynamic_params_3.png" width="75%"/>](./pics/dynamic_params_3.png)

[<img src="./pics/dynamic_params_4.png" width="75%"/>](./pics/dynamic_params_4.png)

# streaming

- If we visit `http://localhost:3000/product-reviews`, it will take a while to show anything, even just the h1 element.
- You can see the server response time showing around 6 seconds for `http://localhost:3000/product-reviews`, because it is fetching everything before sending anything. We can improve this using the streaming strategy supported by the app router. It is super simple, just wrap our slower components with `suspense` and nextjs will handle the rest.
- Now if we reload the `http://localhost:3000/product-reviews` page, the heading appears instantly followed by the product details after 2 seconds and finally the reviews after 4 seconds.
- This is progressive HTML rendering in action from the server to the client.

[<img src="./pics/streaming_1.png" width="75%"/>](./pics/streaming_1.png)

[<img src="./pics/streaming_2.png" width="75%"/>](./pics/streaming_2.png)

[<img src="./pics/streaming_3.png" width="75%"/>](./pics/streaming_3.png)

[<img src="./pics/streaming_4.png" width="75%"/>](./pics/streaming_4.png)

[<img src="./pics/streaming_5.png" width="75%"/>](./pics/streaming_5.png)

[<img src="./pics/streaming_6.png" width="75%"/>](./pics/streaming_6.png)

[<img src="./pics/streaming_7.png" width="75%"/>](./pics/streaming_7.png)

[<img src="./pics/streaming_8.png" width="75%"/>](./pics/streaming_8.png)

[<img src="./pics/streaming_9.png" width="75%"/>](./pics/streaming_9.png)

[<img src="./pics/streaming_10.png" width="75%"/>](./pics/streaming_10.png)

# Server and Client Composition Patterns

[<img src="./pics/server_client_composition_1.png" width="75%"/>](./pics/server_client_composition_1.png)

[<img src="./pics/server_client_composition_2.png" width="75%"/>](./pics/server_client_composition_2.png)

# Server-only Code

- If a server only code ends up in the client bundle you are looking at potential performance issues from large bundle sizes and heavy computations, security risks from exposed sensitive logic and possible function errors when server specific code tries to run in the browser.
- here server-only package comes to the rescue.
- After adding `import "server-only";` the top of `ServerSideFunction`, if anyone tries to import this module into a client component then the build will fail immediately preventing any potential issues related to exposing server side code to the client. Its like having a security guard that stops server code sneaking into the client bundle.
- In summary keeping server only code separate from client code isn't just good practice, it is essential for security performance and reliability.

[<img src="./pics/server_only_code_1.png" width="75%"/>](./pics/server_only_code_1.png)

[<img src="./pics/server_only_code_2.png" width="75%"/>](./pics/server_only_code_2.png)

[<img src="./pics/server_only_code_3.png" width="75%"/>](./pics/server_only_code_3.png)

[<img src="./pics/server_only_code_4.png" width="75%"/>](./pics/server_only_code_4.png)

[<img src="./pics/server_only_code_5.png" width="75%"/>](./pics/server_only_code_5.png)

[<img src="./pics/server_only_code_6.png" width="75%"/>](./pics/server_only_code_6.png)

[<img src="./pics/server_only_code_7.png" width="75%"/>](./pics/server_only_code_7.png)

[<img src="./pics/server_only_code_8.png" width="75%"/>](./pics/server_only_code_8.png)

[<img src="./pics/server_only_code_9.png" width="75%"/>](./pics/server_only_code_9.png)

[<img src="./pics/server_only_code_10.png" width="75%"/>](./pics/server_only_code_10.png)

# Third Party Packages

- In Browser if we visit `http://localhost:3000/client-route` we should see perfectly working carousel.
- When we visit `http://localhost:3000/server-route` we get a problem. While slider component using client side features but the library itself doesn't include the client side directive. We could add "use client" directive to our server route, but that is not the optimal solution.
- To resolve this we can encapsulate third party components that depend on client only features within your own client components.
- Now our server component can be cleaned up to use the ImageSlider component
- So we still have a server component with one component behaving as a client component. When we visit `http://localhost:3000/server-route` now it works fine.
- In summary third party packages in the React ecosystem are in a transitional phase where numerous packages from npm packages have not yet adopted the "use client" directive. Wrapping such components in our own client components will allow use to leverage the ecosystem of third party packages while adhering to the new server components model.

[<img src="./pics/third_party_package_1.png" width="75%"/>](./pics/third_party_package_1.png)

[<img src="./pics/third_party_package_2.png" width="75%"/>](./pics/third_party_package_2.png)

[<img src="./pics/third_party_package_3.png" width="75%"/>](./pics/third_party_package_3.png)

[<img src="./pics/third_party_package_4.png" width="75%"/>](./pics/third_party_package_4.png)

# Context Providers

- Even though we are wrapping our application in a client component which is a theme provider, server components further down the tree stay as server components.

[<img src="./pics/context_providers_1.png" width="75%"/>](./pics/context_providers_1.png)

[<img src="./pics/context_providers_2.png" width="75%"/>](./pics/context_providers_2.png)

[<img src="./pics/context_providers_3.png" width="75%"/>](./pics/context_providers_3.png)

[<img src="./pics/context_providers_4.png" width="75%"/>](./pics/context_providers_4.png)

[<img src="./pics/context_providers_5.png" width="75%"/>](./pics/context_providers_5.png)

[<img src="./pics/context_providers_6.png" width="75%"/>](./pics/context_providers_6.png)

# Client-only Code

- When we import "client-only" in a module, it creates a safety net if someone tries to use this code in the server side, it will fail at build time.
- Instead of running into problems when your application is running, you will catch these issues early during development.
- In summary just as server only code needs isolation, client only code needs to stay on the client side where it can properly use browser features, the client only package acts as a safety net making sure our client code stays where it belongs which makes our app more reliable and easier to maintain.

[<img src="./pics/client_only_code_1.png" width="75%"/>](./pics/client_only_code_1.png)

[<img src="./pics/client_only_code_2.png" width="75%"/>](./pics/client_only_code_2.png)

[<img src="./pics/client_only_code_3.png" width="75%"/>](./pics/client_only_code_3.png)

[<img src="./pics/client_only_code_4.png" width="75%"/>](./pics/client_only_code_4.png)

[<img src="./pics/client_only_code_5.png" width="75%"/>](./pics/client_only_code_5.png)

[<img src="./pics/client_only_code_6.png" width="75%"/>](./pics/client_only_code_6.png)

[<img src="./pics/client_only_code_7.png" width="75%"/>](./pics/client_only_code_7.png)

[<img src="./pics/client_only_code_8i.png" width="75%"/>](./pics/client_only_code_8.png)

# Client Component Placement

- If "use client" is declared in the Navbar component shouldn't that be the only component running client side. Well this is a common misconception. When you mark a component with "used client" directive, it doesn't just affects that component, but also affects every child component in the component tree below it. On our case Navlink and Navsearch become client component as well.
- If you convert a high level component to a a client component just to add some interactivity, you are accidentally making its entire subtree run on the client too.
- This is why we need to push client component as far down the tree as possible.
- Instead of making Navbar the client component nav search to a client component as it is the only one that actually needs state.

[<img src="./pics/client_component_placement_1.png" width="75%"/>](./pics/client_component_placement_1.png)

[<img src="./pics/client_component_placement_2.png" width="75%"/>](./pics/client_component_placement_2.png)

[<img src="./pics/client_component_placement_3.png" width="75%"/>](./pics/client_component_placement_3.png)

[<img src="./pics/client_component_placement_4.png" width="75%"/>](./pics/client_component_placement_4.png)

[<img src="./pics/client_component_placement_5.png" width="75%"/>](./pics/client_component_placement_5.png)

[<img src="./pics/client_component_placement_6.png" width="75%"/>](./pics/client_component_placement_6.png)

[<img src="./pics/client_component_placement_7.png" width="75%"/>](./pics/client_component_placement_7.png)

[<img src="./pics/client_component_placement_8.png" width="75%"/>](./pics/client_component_placement_8.png)

[<img src="./pics/client_component_placement_9.png" width="75%"/>](./pics/client_component_placement_9.png)

[<img src="./pics/client_component_placement_10.png" width="75%"/>](./pics/client_component_placement_10.png)

[<img src="./pics/client_component_placement_11.png" width="75%"/>](./pics/client_component_placement_11.png)

[<img src="./pics/client_component_placement_12.png" width="75%"/>](./pics/client_component_placement_12.png)

[<img src="./pics/client_component_placement_13.png" width="75%"/>](./pics/client_component_placement_13.png)

[<img src="./pics/client_component_placement_14.png" width="75%"/>](./pics/client_component_placement_14.png)

# Interleaving Server and Client Components

- Any component nested inside a client component automatically becomes a client component too. Since client component render after server component you can't import a server component directly into a client component. Even though ServerComponentOne is defined as server component, when it is nested inside a client component it transforms into a client component which is executed client side. And in the client side environment there is not filesystem module and hence the error.
- So it is important to remember that importing a server component into a client component is a pattern not supported in nextjs
- Work around can to pass to pass server component as a prop to the client component which is a common approach in using react's children prop to create what is called a slot.
- Client component inside a client component is supported.
- Server component inside a server component is supported.
- Client component inside a server component is supported.
- Server component inside a client component is not supported.

[<img src="./pics/interleaving_server_client_component_1.png" width="75%"/>](./pics/interleaving_server_client_component_1.png)

[<img src="./pics/interleaving_server_client_component_2.png" width="75%"/>](./pics/interleaving_server_client_component_2.png)

[<img src="./pics/interleaving_server_client_component_3.png" width="75%"/>](./pics/interleaving_server_client_component_3.png)

[<img src="./pics/interleaving_server_client_component_4.png" width="75%"/>](./pics/interleaving_server_client_component_4.png)

[<img src="./pics/interleaving_server_client_component_5.png" width="75%"/>](./pics/interleaving_server_client_component_5.png)

[<img src="./pics/interleaving_server_client_component_6.png" width="75%"/>](./pics/interleaving_server_client_component_6.png)

[<img src="./pics/interleaving_server_client_component_7.png" width="75%"/>](./pics/interleaving_server_client_component_7.png)

[<img src="./pics/interleaving_server_client_component_8.png" width="75%"/>](./pics/interleaving_server_client_component_8.png)

[<img src="./pics/interleaving_server_client_component_9.png" width="75%"/>](./pics/interleaving_server_client_component_9.png)

[<img src="./pics/interleaving_server_client_component_10.png" width="75%"/>](./pics/interleaving_server_client_component_10.png)

[<img src="./pics/interleaving_server_client_component_11.png" width="75%"/>](./pics/interleaving_server_client_component_11.png)

[<img src="./pics/interleaving_server_client_component_12.png" width="75%"/>](./pics/interleaving_server_client_component_12.png)

[<img src="./pics/interleaving_server_client_component_13.png" width="75%"/>](./pics/interleaving_server_client_component_13.png)

[<img src="./pics/interleaving_server_client_component_14.png" width="75%"/>](./pics/interleaving_server_client_component_14.png)

[<img src="./pics/interleaving_server_client_component_15.png" width="75%"/>](./pics/interleaving_server_client_component_15.png)

[<img src="./pics/interleaving_server_client_component_16.png" width="75%"/>](./pics/interleaving_server_client_component_16.png)

[<img src="./pics/interleaving_server_client_component_17.png" width="75%"/>](./pics/interleaving_server_client_component_17.png)

[<img src="./pics/interleaving_server_client_component_18.png" width="75%"/>](./pics/interleaving_server_client_component_18.png)

[<img src="./pics/interleaving_server_client_component_19.png" width="75%"/>](./pics/interleaving_server_client_component_19.png)

[<img src="./pics/interleaving_server_client_component_20.png" width="75%"/>](./pics/interleaving_server_client_component_20.png)

[<img src="./pics/interleaving_server_client_component_21.png" width="75%"/>](./pics/interleaving_server_client_component_21.png)

[<img src="./pics/interleaving_server_client_component_22.png" width="75%"/>](./pics/interleaving_server_client_component_22.png)

# data fetching in client components

- We should really use client components for data fetching when you absolutely need to, like when you need real time updates or when yours data depends on client side interactions that you can't predict on the server side.
- For everything else the recommended way to fetch data is through server components.

[<img src="./pics/fetch_data_client_components_1.png" width="75%"/>](./pics/fetch_data_client_components_1.png)

[<img src="./pics/fetch_data_client_components_2.png" width="75%"/>](./pics/fetch_data_client_components_2.png)

[<img src="./pics/fetch_data_client_components_3.png" width="75%"/>](./pics/fetch_data_client_components_3.png)

[<img src="./pics/fetch_data_client_components_4.png" width="75%"/>](./pics/fetch_data_client_components_4.png)

[<img src="./pics/fetch_data_client_components_5.png" width="75%"/>](./pics/fetch_data_client_components_5.png)

# data fetching in server components

- When building nextjs applications, you will often end up fetching the same data at multiple places, like how request B appears across 6 different components in our tree to load a single route, you might think that this would trigger multiple network requests for the same data but React cleverly handles this through a feature called Request memoization.
- React will de duplicate fetch requests with the same URL and options. This means you can fetch data where ever you need in your component tree without worrying about duplicate network requests.
- React will only make the actual fetch once and reuse the result for subsequent calls during the same render pass.

[<img src="./pics/fetch_data_server_components_1.png" width="75%"/>](./pics/fetch_data_server_components_1.png)

[<img src="./pics/fetch_data_server_components_2.png" width="75%"/>](./pics/fetch_data_server_components_2.png)

[<img src="./pics/fetch_data_server_components_3.png" width="75%"/>](./pics/fetch_data_server_components_3.png)

[<img src="./pics/fetch_data_server_components_4.png" width="75%"/>](./pics/fetch_data_server_components_4.png)

[<img src="./pics/fetch_data_server_components_5.png" width="75%"/>](./pics/fetch_data_server_components_5.png)

[<img src="./pics/fetch_data_server_components_6.png" width="75%"/>](./pics/fetch_data_server_components_6.png)

# Loading and Error States

- Error handling component needs to be client component, so we have to use `use client`ssss directive at the top.

[<img src="./pics/loading_error_states_1.png" width="75%"/>](./pics/loading_error_states_1.png)

[<img src="./pics/loading_error_states_2.png" width="75%"/>](./pics/loading_error_states_2.png)

[<img src="./pics/loading_error_states_3.png" width="75%"/>](./pics/loading_error_states_3.png)

[<img src="./pics/loading_error_states_4.png" width="75%"/>](./pics/loading_error_states_4.png)

[<img src="./pics/loading_error_states_5.png" width="75%"/>](./pics/loading_error_states_5.png)

[<img src="./pics/loading_error_states_6.png" width="75%"/>](./pics/loading_error_states_6.png)

[<img src="./pics/loading_error_states_7.png" width="75%"/>](./pics/loading_error_states_7.png)

[<img src="./pics/loading_error_states_8.png" width="75%"/>](./pics/loading_error_states_8.png)

# Sequential Data Fetching

- First we fetch all posts from all /posts API, then for each post we render we make another fetch request to fetch its author details.
- Each author request has to wait for each post request to complete because we the userid from each individual post.
- This works fine but we can improve this by not blocking the UI while we are fetching the author details. We can show the post first and stream the author in the background. We can do this by wrapping the author component in a suspense boundary.
- Now if we reload the `http://localhost:3000/posts-sequential` we snhould see the posts displayed with the loading author text and after a short delay the author name should be streamed in.

[<img src="./pics/sequential_data_fetching_1.png" width="75%"/>](./pics/sequential_data_fetching_1.png)

[<img src="./pics/sequential_data_fetching_2.png" width="75%"/>](./pics/sequential_data_fetching_2.png)

[<img src="./pics/sequential_data_fetching_3.png" width="75%"/>](./pics/sequential_data_fetching_3.png)

[<img src="./pics/sequential_data_fetching_4.png" width="75%"/>](./pics/sequential_data_fetching_4.png)

[<img src="./pics/sequential_data_fetching_5.png" width="75%"/>](./pics/sequential_data_fetching_5.png)

[<img src="./pics/sequential_data_fetching_6.png" width="75%"/>](./pics/sequential_data_fetching_6.png)

[<img src="./pics/sequential_data_fetching_7.png" width="75%"/>](./pics/sequential_data_fetching_7.png)

[<img src="./pics/sequential_data_fetching_8.png" width="75%"/>](./pics/sequential_data_fetching_8.png)

# Parallel Data Fetching

[<img src="./pics/parallel_data_fetching_1.png" width="75%"/>](./pics/parallel_data_fetching_1.png)

[<img src="./pics/parallel_data_fetching_2.png" width="75%"/>](./pics/parallel_data_fetching_2.png)

[<img src="./pics/parallel_data_fetching_3.png" width="75%"/>](./pics/parallel_data_fetching_3.png)

[<img src="./pics/parallel_data_fetching_4.png" width="75%"/>](./pics/parallel_data_fetching_4.png)

# Fetching from a Database

- Here server component is directly accessing database. No API layer required.

[<img src="./pics/fetching_from_database_1.png" width="75%"/>](./pics/fetching_from_database_1.png)

[<img src="./pics/fetching_from_database_2.png" width="75%"/>](./pics/fetching_from_database_2.png)

[<img src="./pics/fetching_from_database_3.png" width="75%"/>](./pics/fetching_from_database_3.png)

[<img src="./pics/fetching_from_database_4.png" width="75%"/>](./pics/fetching_from_database_4.png)

[<img src="./pics/fetching_from_database_5.png" width="75%"/>](./pics/fetching_from_database_5.png)

[<img src="./pics/fetching_from_database_6.png" width="75%"/>](./pics/fetching_from_database_6.png)

[<img src="./pics/fetching_from_database_7.png" width="75%"/>](./pics/fetching_from_database_7.png)

[<img src="./pics/fetching_from_database_8.png" width="75%"/>](./pics/fetching_from_database_8.png)

[<img src="./pics/fetching_from_database_9.png" width="75%"/>](./pics/fetching_from_database_9.png)

# Data Mutations

- First we will check how we would do it with react.
- form is created in `react-form/page.tsx`. We add onSubmit event listener to your form, that triggers a submit handler function when the form is submitted.
- For security reasons client side code can't directly interact with the database, that is why you or your backend team has to setup an API route to handle the create request.
- In our example we using a nextjs api route `/react-form/api`, but you can think of this this as a backend end point. This actually does the heavy lifting of actually interacting with the database, taking the form data and creating a new product record using the add product function.
- As we can see there is quite a lot going on here. we are managing form state, handling submissions, interacting with API route, dealing with loading states and handling redirects.

[<img src="./pics/data_mutations_react_form_1.png" width="75%"/>](./pics/data_mutations_react_form_1.png)

[<img src="./pics/data_mutations_react_form_2.png" width="75%"/>](./pics/data_mutations_react_form_2.png)

[<img src="./pics/data_mutations_react_form_3.png" width="75%"/>](./pics/data_mutations_react_form_3.png)

[<img src="./pics/data_mutations_react_form_4.png" width="75%"/>](./pics/data_mutations_react_form_4.png)

[<img src="./pics/data_mutations_react_form_5.png" width="75%"/>](./pics/data_mutations_react_form_5.png)

[<img src="./pics/data_mutations_react_form_6.png" width="75%"/>](./pics/data_mutations_react_form_6.png)

# Forms with Server Actions

- state and event handlers don't work in server components
- When someone submits the form, the createProduct function automatically receives the form data as argument.
- Because we are using a server action in a server component, we can talk directly to the database. This code never reaches the client browser. Its like building a Api endpoint right into your component.
- server actions are asynchronous functions that are executed on the server. They allow us to perform data mutations without server API routes. We implement these using the "use server" directive and they simply our code improve security and support progressive enhancement.

[<img src="./pics/form_with_server_actions_1.png" width="75%"/>](./pics/form_with_server_actions_1.png)

[<img src="./pics/form_with_server_actions_2.png" width="75%"/>](./pics/form_with_server_actions_2.png)

[<img src="./pics/form_with_server_actions_3.png" width="75%"/>](./pics/form_with_server_actions_3.png)

[<img src="./pics/form_with_server_actions_4.png" width="75%"/>](./pics/form_with_server_actions_4.png)

[<img src="./pics/form_with_server_actions_5.png" width="75%"/>](./pics/form_with_server_actions_5.png)

[<img src="./pics/form_with_server_actions_6.png" width="75%"/>](./pics/form_with_server_actions_6.png)

[<img src="./pics/form_with_server_actions_7.png" width="75%"/>](./pics/form_with_server_actions_7.png)

[<img src="./pics/form_with_server_actions_8.png" width="75%"/>](./pics/form_with_server_actions_8.png)

[<img src="./pics/form_with_server_actions_9.png" width="75%"/>](./pics/form_with_server_actions_9.png)

[<img src="./pics/form_with_server_actions_10.png" width="75%"/>](./pics/form_with_server_actions_10.png)

[<img src="./pics/form_with_server_actions_11.png" width="75%"/>](./pics/form_with_server_actions_11.png)

[<img src="./pics/form_with_server_actions_12.png" width="75%"/>](./pics/form_with_server_actions_12.png)

[<img src="./pics/form_with_server_actions_13.png" width="75%"/>](./pics/form_with_server_actions_13.png)

[<img src="./pics/form_with_server_actions_14.png" width="75%"/>](./pics/form_with_server_actions_14.png)

[<img src="./pics/form_with_server_actions_15.png" width="75%"/>](./pics/form_with_server_actions_15.png)

# Pending State with useFormStatus

- We can use the `useFormStatus` hook from the react-dom to manage state from the active form submissions by extracting just the submit button into a client component, we can get best of both worlds. Server component benefits from our main component and dynamic client side updates from our form submission state.

[<img src="./pics/pending_state_with_useformstatus_1.png" width="75%"/>](./pics/pending_state_with_useformstatus_1.png)

[<img src="./pics/pending_state_with_useformstatus_2.png" width="75%"/>](./pics/pending_state_with_useformstatus_2.png)

[<img src="./pics/pending_state_with_useformstatus_3.png" width="75%"/>](./pics/pending_state_with_useformstatus_3.png)

[<img src="./pics/pending_state_with_useformstatus_4.png" width="75%"/>](./pics/pending_state_with_useformstatus_4.png)

[<img src="./pics/pending_state_with_useformstatus_5.png" width="75%"/>](./pics/pending_state_with_useformstatus_5.png)

# Form Validation with useActionState & Separating Server Actions

- `isPending` value is optional we are already using `useFormStatus`.
- using `useActionState` in a server component will throw an error.
- "use client" at the top will throw a different error. It is not allowed define inline "use server" annotated server actions in client components.
- The trick is to separate server action into its own file keeping our server side logic cleanly separated from our client side components.

[<img src="./pics/useActionState_1.png" width="75%"/>](./pics/useActionState_1.png)

[<img src="./pics/useActionState_2.png" width="75%"/>](./pics/useActionState_2.png)

[<img src="./pics/useActionState_3.png" width="75%"/>](./pics/useActionState_3.png)

[<img src="./pics/useActionState_4.png" width="75%"/>](./pics/useActionState_4.png)

[<img src="./pics/useActionState_5.png" width="75%"/>](./pics/useActionState_5.png)

[<img src="./pics/useActionState_6.png" width="75%"/>](./pics/useActionState_6.png)

[<img src="./pics/useActionState_7.png" width="75%"/>](./pics/useActionState_7.png)

[<img src="./pics/useActionState_8.png" width="75%"/>](./pics/useActionState_8.png)

[<img src="./pics/useActionState_9.png" width="75%"/>](./pics/useActionState_9.png)

[<img src="./pics/useActionState_10.png" width="75%"/>](./pics/useActionState_10.png)

# useFormStatus vs useActionState

[<img src="./pics/useFormStatus_vs_useActionState_1.png" width="75%"/>](./pics/useFormStatus_vs_useActionState_1.png)

# Update Server Action

- We can not use the await keyword as client components can't be async components.
- We solve this async issue we split data fetching into a server component and form logic into a client component.
- From the server component we passed product details as prop to the client component.
- The database function required the product id which was not available in the formData, we used the bind method to pass the id argument without exposing it the HTML.

[<img src="./pics/update_server_action_1.png" width="75%"/>](./pics/update_server_action_1.png)

[<img src="./pics/update_server_action_2.png" width="75%"/>](./pics/update_server_action_2.png)

[<img src="./pics/update_server_action_3.png" width="75%"/>](./pics/update_server_action_3.png)

[<img src="./pics/update_server_action_4.png" width="75%"/>](./pics/update_server_action_4.png)

[<img src="./pics/update_server_action_5.png" width="75%"/>](./pics/update_server_action_5.png)

[<img src="./pics/update_server_action_6.png" width="75%"/>](./pics/update_server_action_6.png)

[<img src="./pics/update_server_action_7.png" width="75%"/>](./pics/update_server_action_7.png)

[<img src="./pics/update_server_action_8.png" width="75%"/>](./pics/update_server_action_8.png)

[<img src="./pics/update_server_action_9.png" width="75%"/>](./pics/update_server_action_9.png)

[<img src="./pics/update_server_action_10.png" width="75%"/>](./pics/update_server_action_10.png)

[<img src="./pics/update_server_action_11.png" width="75%"/>](./pics/update_server_action_11.png)

[<img src="./pics/update_server_action_12.png" width="75%"/>](./pics/update_server_action_12.png)

[<img src="./pics/update_server_action_13.png" width="75%"/>](./pics/update_server_action_13.png)

[<img src="./pics/update_server_action_14.png" width="75%"/>](./pics/update_server_action_14.png)

# Delete Server Action

- If we add onclick function to delete button to call our server action then it would make our server action `/products-db` client component.
- The solution is to wrap our component in a form element.
- After deleting a product we need to refresh our `/products-db` route. By using `revalidatePath` we are telling nextjs to refetch data for `/products-db` path after deletion

[<img src="./pics/delete_server_action_1.png" width="75%"/>](./pics/delete_server_action_1.png)

[<img src="./pics/delete_server_action_2.png" width="75%"/>](./pics/delete_server_action_2.png)

[<img src="./pics/delete_server_action_3.png" width="75%"/>](./pics/delete_server_action_3.png)

[<img src="./pics/delete_server_action_4.png" width="75%"/>](./pics/delete_server_action_4.png)

# Optimistic Updates

- For our example when user clicks on delete button, instead of the 1.5 seconds delay to show the deletion we will remove the product right away from the list.
- useOptimistic hook returns two things, first is the resulting optimistic state. second is a function to trigger optimistic update.
- As we will get the error for using hook in the server component, the solution is to separate our data fetching from our data mutation logic.

[<img src="./pics/optimistic_update_1.png" width="75%"/>](./pics/optimistic_update_1.png)

[<img src="./pics/optimistic_update_2.png" width="75%"/>](./pics/optimistic_update_2.png)

[<img src="./pics/optimistic_update_3.png" width="75%"/>](./pics/optimistic_update_3.png)

[<img src="./pics/optimistic_update_4.png" width="75%"/>](./pics/optimistic_update_4.png)

[<img src="./pics/optimistic_update_5.png" width="75%"/>](./pics/optimistic_update_5.png)

[<img src="./pics/optimistic_update_6.png" width="75%"/>](./pics/optimistic_update_6.png)

[<img src="./pics/optimistic_update_7.png" width="75%"/>](./pics/optimistic_update_7.png)

[<img src="./pics/optimistic_update_8.png" width="75%"/>](./pics/optimistic_update_8.png)

[<img src="./pics/optimistic_update_9.png" width="75%"/>](./pics/optimistic_update_9.png)

[<img src="./pics/optimistic_update_10.png" width="75%"/>](./pics/optimistic_update_10.png)
