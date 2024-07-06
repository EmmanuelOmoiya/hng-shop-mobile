import { Product, Checkout } from '@/components/ui/icons';
import { Text, View } from 'react-native'

const Products = ({ focused }:{ focused: boolean }) => {
    return(
        <View>
            {
                focused !== true ?
                <View className="w-[35] rounded-full">
                    <Product />
                </View>
                :
                <Text className="font-mregular text-[#e66945] text-md">Products</Text>
            }
        </View>
    )
};
export default Products;