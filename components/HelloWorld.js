import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';

const SubComponent = (props) => {
    return (
        <View>
            <Text>Hello, I am {props.name}!</Text>
        </View>
    );
}

const HelloWorld = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map(
        // 기본적으로 반복문을 선언할 때 리엑트에서는 key 값을 넣어주는것을 원칙으로 하고있다.
        (name, index) => (<SubComponent name={name} key={index} />)
    );

    return (
        // 시작은 스크롤 뷰로 시작.
        <ScrollView>
            {/* 모든 텍스트는 Text 컴포넌트로 바인딩해야한다. */}
            <Text>Hello World</Text>
            {/* 새로운 섹션 (=영역) 을 설정할때는 View 컴포넌트로 생성. ( HTML 의 div 와 같은 존재 ) */}
            <View>
                <Text>Some more text</Text>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            {/* Input Tag => TextInput */}
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue='여기에 타이핑 해주세요. !!! 실시간 반영 가능??'
            />
            {
                names.map((value, index) => (<SubComponent name={value} key={index} />))
            }
            <CustomButton />
            <CustomTextInput />
        </ScrollView>
    )
}

export default HelloWorld;