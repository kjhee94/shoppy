import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, addNewProduct } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation({
    mutationFn: ({ product, url }) => addNewProduct(product, url),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return {productsQuery, addProduct} 
}
