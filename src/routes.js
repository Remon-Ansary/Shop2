
import CreateProduct from "./components/CreateProduct"
import ProductDetails from "./components/ProductDetails"
import Products from "./components/Products"
import UpdateProduct from "./components/UpdateProduct"
export const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/create/",
    name: "CreateProduct",
    component: CreateProduct,
    props: true,
  },
  {
    path: "/update/:id",
    name: "UpdateProduct",
    component: UpdateProduct,
    props: true,
  },
]
