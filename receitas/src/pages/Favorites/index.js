import {View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

import { getFavorites } from '../../utils/storage'

import { FoodList } from '../../components/foodList'

export function Favorites() {

    const [receipes, setReceipes] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {

        let isActive = true;

        async function getReceipes(){
            const result = await getFavorites('@appreceitas');
            if(isActive){
                setReceipes(result);
            }
        }

        if(isActive){
            getReceipes();
        }

        return () => {
            isActive = false;
        }

    }, [isFocused])


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>

            {receipes.length === 0 && (
                <Text style={styles.text}>Você ainda não tem nenhuma receita salva.</Text>
            )}

            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={receipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 36,
    },
    title:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
        paddingTop: 14
    },
    text:{
        paddingTop: 46,
        fontSize: 16,
    }
})