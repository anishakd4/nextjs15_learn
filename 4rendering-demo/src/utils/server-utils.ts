import "server-only";
export const ServerSideFunction = () => {
  console.log(
    `use multiple libraries,
        use environment variables,
        interact with database,
        process confidential information`
  );
  return "Server result";
};
