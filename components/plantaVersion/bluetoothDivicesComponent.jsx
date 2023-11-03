import React, {  useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
// import BleManager from 'react-native-ble-plx';
import {BleManager} from 'react-native-ble-plx';

 export function BluetoothComponent(){
     const [devices,setDevices]=useState([]);
     useEffect(()=>{
        const manager = new BleManager();
        // startScan();
    });
    // const startScan=()=>{
    //     manager.startDeviceScan(null, null, (error, device) => {
    //         if (error) {
    //           console.error(error);
    //           return;
    //         }
    //         if (!devices.some((prevDevice) => prevDevice.id === device.id)) {
    //           console.log(devices);
    //         }
    //       })
    // }
    return(  
    <View>
        <Text>Dispositivos Bluetooth cercanos:</Text>
        <FlatList
          data={devices}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.name || 'Dispositivo sin nombre'}</Text>}
        />
      </View>)
}

