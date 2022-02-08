import CreateProduct from "@/components/CreateProduct"
import ProductDetails from "@/components/ProductDetails"
import Products from "@/components/Products"
import UpdateProduct from "@/components/UpdateProduct"

export const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/product",
    name: "ProductDetails",
    component: ProductDetails,
  
  },
  {
    path: "/create/",
    name: "CreateProduct",
    component: CreateProduct,
    
  },
  {
    path: "/update/:id",
    name: "UpdateProduct",
    component: UpdateProduct,
    
  },
]
