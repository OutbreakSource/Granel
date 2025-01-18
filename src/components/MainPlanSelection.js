import {View} from "react-native";

const MainPlanSelection = ({navigation, setSelectedItems, selectedItems}) => {

    const onSelectedItemsChange = (newSelectedItems) => {
        setSelectedItems(newSelectedItems);
    };

    const createViews = () => {
        return routines.map((group, index) => (
            <View style={styles.viewBlock} key={index}>
                <View>
                    <Text style={styles.textStyle}>{group}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        key={index}
                        source={{ uri: `${imageUrls[index]}&timestamp=${Date.now()}` }}
                        style={{ width: '100%', height: '100%', borderRadius: 25, resizeMode: "contain"}}
                    />
                </View>
            </View>

        ));
    };

    return (
        <View>{createViews()}</View>
    )


}

export default MainPlanSelection;
