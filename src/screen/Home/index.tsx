import { Alert, FlatList, Text} from "react-native";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../dto/ProductDTO";
import { useNavigation } from "@react-navigation/native";
import { AppError } from "../../utils/AppError";
import { HomeItemComponent } from "../../components/HomeItemComponent";


export function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    const [products, setProducts] = useState<ProductDTO[]>([]);
async function  fetchProducts() {
    
    // try{
    //     setIsLoading(true);
    //     const response = await api.get('/products/allProducts');
    //     console.log(response.data);
    //     setProducts(response.data);
        
    // }catch(error){
    //     const isAppError = error instanceof AppError;
    //     const title = isAppError ? error.message : 'Não foi possível carregar os produtos';
    //     Alert.alert(title);
    // }finally {
        setIsLoading(false);
// }
    
}
useEffect(() => {
    fetchProducts();
  },[])
//   function handleOpenExerciseDetails(productName: string) {
//     navigation.navigate('product', { productName });
//   }

    return(
        <Container>
            {/* <FlatList 
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <HomeItemComponent
          
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
      /> */}
        </Container>
    )
}