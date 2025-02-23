import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const randomInt = getRandomInt(2);
  console.log({ randomInt });
  if (randomInt === 1) {
    throw new Error("Error loading product layout");
  }
  return (
    <>
      {children}
      <h2>Featured products</h2>
    </>
  );
}
