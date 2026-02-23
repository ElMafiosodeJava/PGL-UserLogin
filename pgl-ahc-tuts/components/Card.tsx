import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type CardProps = {
    title: string,
    bodyText: string,
    imageSource: ImageSourcePropType
}

// rnfes
const Card: React.FC<CardProps> = (props: CardProps): React.ReactNode => {

    const { title, bodyText, imageSource } = props

    return (
        <View style={styles.cardContainer}>
            {/* <Image style={styles.image} source={{ uri: 'https://vignette1.wikia.nocookie.net/doblaje/images/b/b3/KRILINDB.png/revision/latest?cb=20151218023356&path-prefix=es' }} /> */}
            <View style={styles.cardHeader}>
                <Image style={styles.image} source={imageSource} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <Text style={styles.cardBodyText}>{bodyText}</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        margin: 8,
        padding: 8,
        backgroundColor: 'white'
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'yellow',
    },
    headerText: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold'
    },
    cardBodyText: { padding: 10, fontSize: 16 }
});