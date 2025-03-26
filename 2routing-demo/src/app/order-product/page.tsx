"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <>
      <p>Place order</p>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
