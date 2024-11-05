import { Box, Grid2 } from "@mui/material";
import { products } from "./data/products";
import ProductCard from "./compnents/product-card/product-card";
import Header from "./compnents/header/header";

function App() {
  return (
    <Box>
      <Header />
      <Box maxWidth="1280px" margin="auto">
        <Grid2 paddingTop={4} container gap={2}>
          {products.map((product) => (
            <Grid2 gridColumn={4} key={product.id}>
              <ProductCard {...product} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}

export default App;
