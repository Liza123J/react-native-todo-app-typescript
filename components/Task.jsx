import { Text,View } from 'react-native';
import styles from './styles';
import React from 'react';

const Task =(props)=> {
 return(
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View styles={styles.square}></View>
            <Text styles={styles.itemText}>{props.text}</Text>
        </View>
    </View>
 )
}
export default Task;