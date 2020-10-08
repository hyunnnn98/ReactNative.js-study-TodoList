import React, { useState } from 'react'
import { Button } from 'react-native'

export default function CustomButton() {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <>
            <Button
                onPress={() => {
                    setIsHungry(!isHungry)
                }}
                // disabled={!isHungry}
                title={isHungry ? "배고프다!!" : "뭔가 배부른걸..?"}
            />
        </>
    )
}
