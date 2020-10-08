import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'

const NUMBER_OF_LIMIT_RENDER_LIST = 11;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    list: {
        marginBottom: 10
    }
})

const renderItem = ({ item }) => {
    return (
        <View style={styles.list}>
            <View>
                <Text>User id : {item.userId}</Text>
            </View>
            <View>
                <Text>Id : {item.id}</Text>
            </View>
            <View>
                <Text>Title : {item.title}</Text>
            </View>
            <View>
                <Text>Body : {item.body}</Text>
            </View>
        </View>
    )
}

const CustomFlatList = () => {

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    const getData = () => {
        setLoading(true);
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            // .then((res) => setData(res))
            .then((res) => setData(data.concat(res.slice(offset, offset + NUMBER_OF_LIMIT_RENDER_LIST))))
            .then(() => {
                setOffset(offset + NUMBER_OF_LIMIT_RENDER_LIST);
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
                Alert.alert("에러가 났습니다.");
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const onEndReached = () => {
        if (loading) {
            return;
        } else {
            getData();
        }
    };

    const FlatListItemSeperator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.8}
                ListFooterComponent={loading && <ActivityIndicator />}
                // ItemSeparatorComponent={FlatListItemSeperator}
            />
        </SafeAreaView>
    )
}

export default CustomFlatList;