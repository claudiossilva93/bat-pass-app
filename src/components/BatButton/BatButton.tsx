import React, {useState} from 'react';
import { Pressable, Text, ToastAndroid } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInputStyles';
import generatePass from '../../services/passwordService';

export function BatButton() {
    const [pass, setPass] = useState('');

    function handleGenerateButton(){
        let generateToken = generatePass();
        setPass(generateToken);
    }

    async function handleCopyButton(){
        await Clipboard.setStringAsync(pass);
        ToastAndroid.show('Password copiado com sucesso.', ToastAndroid.CENTER)
    }

    return (
        <>
            <BatTextInput pass={pass}/>
            <Pressable
                style={styles.button}
                onPress={handleGenerateButton}
            >
                <Text style={styles.text}>Generate</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={handleCopyButton}
            >
                <Text style={styles.text}>⚡Copy</Text>
            </Pressable>
        </>
    );
}