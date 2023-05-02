import { View,Dimensions } from "react-native";

const {width,height}=Dimensions.get("window")

export function ModalOp(){
    return(
        <View>
            <View>
                <View>
                    <View>
                        {/* header */}
                    </View>
                    <View>
                        {/* list */}
                    </View>
                    <View>
                        {/* footer */}
                    </View>
                </View>
                <View>
                    {/* icon */}
                </View>
            </View>
        </View>
    )
}