import {View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, Modal} from 'react-native';
import React, { useState } from 'react';
import estilos from '../css/estilometas'

export default function Metas({navigation}) {

  const [backgroundImage, setBackgroundImage] = useState(require('../img/Rectangle.jpg'));
  const [fundoModalVisible, setFundoModalVisible] = useState(false);


  const closeFundoModal = () => {
      setFundoModalVisible(false);
    };

    const changeBackground1 = () => {
      setBackgroundImage(require('../img/MontanhaLaranja.jpeg'));
    };
    const changeBackground2 = () => {
      setBackgroundImage(require('../img/FlorestaLaranja.jpeg'));
    };
    const changeBackground3 = () => {
      setBackgroundImage(require('../img/Espaço.jpeg'));
    };
    const changeBackground4 = () => {
      setBackgroundImage(require('../img/Rectangle.jpg'));
    };
    const changeBackground5 = () => {
      setBackgroundImage(require('../img/oceano.jpeg'));
    };
    const changeBackground6 = () => {
      setBackgroundImage(require('../img/branco.jpg'));
    };

  return (
    
      <ImageBackground source={backgroundImage} style={{ flex: 1 }}>

      <View>

        
          <View style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginTop: 35,
          }}>

            <View style={estilos.area}>
              <Text style={estilos.titleArea}>Metas</Text>
            </View>

            <View style={estilos.areabotoes}>
                
            <TouchableOpacity
        style={estilos.trocarfundo}
        onPress={() => setFundoModalVisible(true)}>
            <Image
                source={require('../img/PaspelPasrede.png')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 8,
              }}/>
           </TouchableOpacity>
              </View>

            </View>
            
            <Modal
        animationType="slide"
        transparent={false}
        visible={fundoModalVisible}
        onRequestClose={closeFundoModal}>
        <View style={estilos.viewfundos}>
          
        <ImageBackground source={backgroundImage} style={{ flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
        }}>
          <View style={estilos.viewfundoss}>
          
        <TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground1}>
            <Image
                source={require('../img/MontanhaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                           
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground2}>
            <Image
                source={require('../img/FlorestaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                            
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground3}>
            <Image
                source={require('../img/Espaço.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                          
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground4}>
            <Image
                source={require('../img/Rectangle.jpg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                            
              }}/></TouchableOpacity>
              <TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground5}>
            <Image
                source={require('../img/oceano.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                           
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground6}>
            <Image
                source={require('../img/branco.jpg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                            
              }}/></TouchableOpacity>
              
</View>
          <TouchableOpacity onPress={closeFundoModal} style={estilos.closeButtonF}>
            <Text style={estilos.closeButtonTextF}>Close Modal</Text>
          </TouchableOpacity>
          </ImageBackground>
        </View>
      </Modal>
            <View style={estilos.arearea}>
            <ScrollView scrollEnabled>
            <View style={estilos.containersMetas}>
              <View>
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("F2")}>
                <Text style={estilos.numMeta}>
                  1
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Tipos De Cumprimentos</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View>
                
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("FeedBack")}>
                <Text style={estilos.numMeta}>
                  2
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Que tal um abraço?</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View>
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("F3")}>
                <Text style={estilos.numMeta}>
                  3
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Situações Sociais</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View>
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("F4")}>
                <Text style={estilos.numMeta}>
                  4
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Bora Comunicar?</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View>
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("F5")}>
                <Text style={estilos.numMeta}>
                  5
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Entendo Emoções!</Text>
                </View>
              </View>
            </View>
            </ScrollView>
            </View>
            
          
        
      </View>
      </ImageBackground>
    
  );
}
