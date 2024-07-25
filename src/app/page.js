import CategoryList from "@/Components/CategoryList";
import NewProducts from "@/Components/NewProducts";
import ProductList from "@/Components/ProductList";
import Slider from "@/Components/Slider";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <ProductList />
      <CategoryList />
      <NewProducts/>
    </div>
  );
}
