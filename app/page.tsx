import Image from "next/image";
import HomeHeader from "./components/HomeHeader";
import HomeSearch from "./components/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
          alt="Google logo"
        />
        <HomeSearch />
      </div>
    </>
  );
}
