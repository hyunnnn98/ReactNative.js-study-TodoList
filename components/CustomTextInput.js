import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

export default function CustomTextInput() {
    const [text, setText] = useState('');

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                placeholder="Type here to translate!"
                onChangeText={
                    text => setText(text)
                }
                defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 20 }}>
                {text.split(' ').map(
                    (inputValue) => inputValue && '🍕').join(' ')
                }
            </Text>
        </View>
    )
}
