import React, { useState, useCallback, useRef } from "react";
import {Button, View, Alert, Text} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Video(props) {
    const [playing, setPlaying] = useState(true);

    const onStateChange = (event) => {
        console.warn("asd: ",event)
        if (event === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    };

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <View>
            <YoutubePlayer
                height={200}
                play={props?.item?.abc}
                videoId={"NJ2TkBrWA04"}
                 onChangeState={(event) => onStateChange(event)}

            />
        </View>
    );
}
