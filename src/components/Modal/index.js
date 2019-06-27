import React from "react";
import { View, Text, Modal, StyleSheet,TouchableOpacity } from "react-native";
import { colors } from "../../utils";


const BModal = ({ isVisible, message, onPress }) => (
  <Modal isVisible={isVisible} transparent onRequestClose={onPress}>
    <View style = { styles.modalWrapper}>
        <View style={styles.modalBox}>
            <Text style={styles.modalMess}>{message}</Text>
            <TouchableOpacity onPress={onPress} style={styles.modalButton}>
                <Text style= {styles.modalMess}>OK</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  </Modal>
);
const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  modalBox:{
    backgroundColor:colors.whitePrimary,
    width:'90%',
    height:150,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  
},
modalMess:{
    fontSize:18,
    fontWeight:'600',
},
modalButton:{
    backgroundColor:colors.redPrimary,
    width: '50%',
    height:40,
    marginTop:20,
    padding:10,
    justifyContent:'center',
    alignItems:'center'


}

});
export default  BModal