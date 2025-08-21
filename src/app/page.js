import Image from "next/image";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="mt-16">
        <div className=" ">
          <Banner />
        </div>

        <ProductList />
      </div>
    </div>
  );
}
