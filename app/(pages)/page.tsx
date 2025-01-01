import Image from "next/image";

export default async function Home() {
  return (
    <div>{new Date().toLocaleTimeString()}</div>
  );
}
