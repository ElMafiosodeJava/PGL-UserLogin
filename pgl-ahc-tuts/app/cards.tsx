import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CARD_ITEMS } from '../data/card-items'
import Card from '../components/Card'

const CardsScreen = () => {

    const [count, setCount] = useState<number>(0)
    const [name, setName] = useState<string>('Hola')

    const onClickButton = () => {
        setCount(count + 1)
        setName(name == 'Adiós' ? 'Hola' : 'Adiós')
    }
    return (
        <>
            {name && <Text style={{ fontSize: 24 }}>Saludación: {name}</Text>}
            <Text style={{ fontSize: 24 }}>Contador: {count}</Text>
            <Button title='Add' onPress={onClickButton}></Button>
            <ScrollView>
                {
                    (CARD_ITEMS.length > 0) ?
                        CARD_ITEMS.map((cardItem, index) =>
                            <Card
                                title={cardItem.title}
                                bodyText={cardItem.text}
                                imageSource={cardItem.imageSource}
                                key={cardItem.id}
                            />
                        )
                        :
                        <Text>No hay cards para mostrar.</Text>
                }
            </ScrollView>
        </>
    )
}

export default CardsScreen

const styles = StyleSheet.create({})