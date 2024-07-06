import { Checkout as CheckoutIcon } from '@/components/ui/icons';
import { Text, View } from 'react-native'


const Checkout = ({ focused }:{ focused: boolean }) => {
    return(
        <View>
            {
                focused !== true ?
                <View className="w-[30] rounded-full">
                    <CheckoutIcon />
                </View>
                :
                <Text className="font-mregular text-[#e66945] text-md">Checkout </Text>
            }
        </View>
    )
};
export default Checkout;