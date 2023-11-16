import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({



  fundopapel:{
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
container:{
  flex: 1,
  flexDirection: "column",
},
  area: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 20, 
    height:150,
    width: 180,
    marginTop: 25,
    marginLeft: 5, 
    padding: 10,
  },

  containerRow:{
    flexDirection:'row',
    marginTop: 10,
  },

  containersMetas: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 10, 
    height: 90,
    width: '85%',
    alignSelf: 'center',
    alignItems:'center',
    marginTop: 50,
  },

  boxnumMeta: {
    flexDirection:"row",
    backgroundColor: '#03d1ff',
    borderColor: 'black',
    borderRadius: 10, 
    height:70,
    width: 70,
    marginLeft: 10, 
  },

  numMeta: {
    fontSize: 50,
    marginLeft: 20,
    alignSelf: 'center',
    fontWeight:'bold'
    
  },

  containerBotao:{
    height:20,
    width:240,
  },

  botaoVolta:{
    marginLeft:210,
  },

   textoBotaoVolta:{
     fontSize:30,
     fontWeight:'bold',
     color:'red',
   },
   botaosom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex',
    backgroundColor:"#fff",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    height:35,
    width:35, 
    alignSelf: 'center',
    marginLeft: 20,
   },

   fotoBotoes: {
  
      alignSelf: 'center',
      height: 30, 
      width: 30,
   },
   
  containerColumn:{
    width:240,
    height:90,
  },

  textMeta:{
   marginLeft: 25,
   alignSelf: 'center',
   fontSize: 20
  },

  figura:{
    height: 150,
    width: 150,
    borderRadius:20,
    marginLeft: 30,

    marginTop: 10
  },

  titleArea:{

    alignSelf: 'center',
    fontSize: 15,

  },
  

   textoBotao:{
     fontSize:24,
     alignSelf:'center',
   }

  })

export default estilos;