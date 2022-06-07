import React, {useState, useEffeact} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import AppLoading from 'expo0app-loading';
import {useFonts, Nunito_400Regular, Lato_400Regular, Inter_900Black} from '@expo-google-fonts/dev';


export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
  });

  if(!fontsLoaded){
    return  <AppLoading />;
  } else {

  }


  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
      <Text style={styles.titulo1}> Rede Social - Encontros do Senac</Text>
      <Text style={styles.titulo2}> Você tem um projeto Integrador?</Text>
      <Text style={styles.titulo2}> Quer envolver novas áreas?</Text>
      <Text style={styles.titulo2}> Então...Vamos encontrar os alunos aqui? ;)</Text>
      <FlatList
      data={pessoas}
      renderItem={({item})=>
    <View style={styles.container3}>
      <View style={styles.container2}>
        <Image style={styles.img} source={item.img}/>
        <Text style={styles.titulo3}>{item.nome}</Text>
      </View>

      <Text style={styles.titulo2}>Curso: {item.curso}</Text>
      <Text style={styles.titulo2}>Período: {item.periodo}</Text>
      <Text style={styles.titulo2}>Turma: {item.turma}</Text>
      <Text style={styles.titulo2}>Gosto: {item.gosto}</Text>
      <Text style={styles.titulo2}>Bio: {item.bio}</Text>
    </View>
    }
    />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#7BFBFF',
    alignItems: 'center',
    padding:0,
    justifyContent: 'center',
  },
  container2: {
    flexDirection:'row',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    marginTop:50
  },
  container3: {
    flex: 1,
    backgroundColor: '#6A5ACD',
    alignItems: 'center',
  },
  img: {
    width:50,
    height:50,
    borderRadius:150,
  },
  titulo1: {
    marginTop: 40,
    marginVertical: 10,
    fontSize: 30,
    
  },
  titulo2: {
    marginVertical: 10,
    fontSize: 15,
  },
  titulo3: {
    marginVertical: 10,
    fontSize: 15,
    marginHorizontal:100,
  },

});


const pessoas = [
  {
    uid:10,
    nome:'Mucilon Mazzucato',
    curso: 'Técncico de informática',
    periodo:'Manhã',
    turma: 'TI10',
    gosto:'Hardware, Front-end, Redes,PHP',
    bio:'Gosto de tocar guitarra, tenho preguiça de trocar idéia com garotas, e fumar paiero',
    img:require ('./assets/jogo1.jpg')
  },

  {
    uid:20,
    nome:'Caio elias',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware,Banco de dados,C#',
    bio:'garoto de programa junior',
    img:require ('./assets/jogo2.jpg')
  },

  {  
    uid:30,
    nome:'homem aranha',
    curso:'escalada',
    periodo:'manhã',
    turma:'ti19',
    gosto:'subir parede',
    bio:'dormir acordar trabalhar banho e comer e dps tudo de novo',
    img:require ('./assets/jogo1.jpg')
  },

  {
    uid:40,
    nome:'Adriano Silva',
    curso:'Técnico de Informática',
    periodo: 'Manhã',
    turma:'TI10',
    gosto:'Programação',
    bio: 'Engajando na empresa da Microsolft',
    img:require ('./assets/jogo2.jpg')
  },

  {
    uid:50,
    nome:'Galvez',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'C#',
    bio:'Narguile',
    img:require('./assets/jogo1.jpg')
  },
  ];