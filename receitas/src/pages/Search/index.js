import {View, Text, StyleSheet, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useState, useEffect } from 'react'

import api from '../../services/api'
import { FoodList } from '../../components/foodList'


export function Search() {

    const route = useRoute();
    const [receipes, setReceipes] = useState([])


    useEffect(() => {
        async function fetchReceipes(){
            const response = await api.get(`/foods?name_like=${route.params?.name}`)
            setReceipes(response.data);
        }

        fetchReceipes();
    }, [route.params?.name])

    return(
        <View style={styles.container}>
           <FlatList 
                showsVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={receipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
                ListEmptyComponent={() => <Text style={styles.text}>Desculpe, não encontramos o que está buscando...</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    }, 
    text:{
        fontWeight: 500
    }
})