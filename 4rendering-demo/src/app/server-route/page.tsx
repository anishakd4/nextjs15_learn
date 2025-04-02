import { ImageSlider } from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";
import { ServerSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = ServerSideFunction();
  // const clientResult = clientSideFunction();
  return (
    <>
      <h1>Server Route {result}</h1>
      {/* <h1>Client result {clientResult}</h1> */}
      <ImageSlider />
    </>
  );
}
