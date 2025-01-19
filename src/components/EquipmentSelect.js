import Icon from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import React from "react";

const EquipmentSelect = ({setSelectedItems, selectedItems}) => {

    const items = [
        {
            name: 'Equipment',
            id: 0,
            children: [
                {id: 'Barbell', name: 'Barbell'},
                {id: 'Body Only', name: 'Body Only'},
                {id: 'Cable', name: 'Cable'},
                {id: 'Dumbbell', name: 'Dumbbell'},
                {id: 'Kettlebells', name: 'Kettlebells'},
                {id: 'Machine', name: 'Machine'}
            ],
        },
    ];

    const onSelectedItemsChange = (newSelectedItems) => {
        setSelectedItems(newSelectedItems);
    };

    return (
        <SectionedMultiSelect
            IconRenderer={Icon}
            items={items}
            uniqueKey="id"
            subKey="children"
            selectText="Equipment"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            hideSearch={true}
            expandDropDowns={true}
            styles={{

                container: {
                    flex: 1,
                    padding: 8,
                    maxHeight: 500,
                    marginTop: '50%'
                },
                item: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#80bcff',
                    padding: 8
                },
                subItem: {
                    backgroundColor: '#e3e3e3',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    padding: 8
                },
                selectedItem: {
                    backgroundColor: '#568ee1',
                    color: '000000'
                },
                subItemText: {
                    color: '#000000',
                    fontSize: 30,
                },
                separator: {
                    height: 1,
                    backgroundColor: '#00e4ff',
                },
                selectToggle: {
                    padding: 8,
                },
                button: {
                    backgroundColor: '#568ee1',
                },
                confirmText: {
                    color: 'black',
                    padding: 8
                },
                scrollView: {
                    maxHeight: 600
                },
                selectToggleText: {
                    fontSize: 30,
                    flex: 1,
                    justifyContent: "center"
                }
            }}/>);
}


export default EquipmentSelect;
