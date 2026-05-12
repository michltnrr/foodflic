import {Text, Pressable, StyleSheet} from "react-native"
import {useFonts,BeVietnamPro_700Bold, BeVietnamPro_700Bold_Italic} from '@expo-google-fonts/be-vietnam-pro';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientButton({children, width = 305, onPress}) {
    return (
        <LinearGradient
            colors={['#9c3e00', '#ff7a31']}
            style={[styles.gradientButton, { width }]}
        >
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.buttonContent,
                    pressed && styles.buttonPressed
                ]}
            >
            {/* recall children is prop that causes react to pass whatever is nested between the opening & closing tags
            it doesnt always have to do w returning components exclusively it can return text, one/multiple componetns, icons, arrays etc */}
                {children}
            </Pressable>
        </LinearGradient>
    )
}

export function GradientButtonText({children, fontSize = 20}) {
    return (
        <Text
            style={[
                styles.buttonText,
                { fontSize }
            ]}
        >
            {children}
        </Text>
    )
}
/* using the 2 functions is called component composition. props = config data, children = nested UI passed to the component
Ex.  <GradientButton>
    <Text>Save</Text>
</GradientButton>

here <Text> is the nested UI component


look at this:   <GradientButtonText>
                    ANALYZE DISH 
                </GradientButtonText>
since we used {children} inside of GradientButtonText we dont have to wrap "ANALYZE DISH" inside of a text component
we alr did inside it via the children prop, so it means, whatever i put inside of the graidentbuttontext comp, wrap it in a text comp*/
const styles = StyleSheet.create({
        gradientButton: {
        borderRadius: 20,
        overflow: 'hidden'
    },

    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //gap prop adds equal spacing between items in a flex container (better than margins)
        gap: 10,
        paddingVertical: 14,
    },

    buttonPressed: {
        opacity: 0.5
    },

    buttonText: {
        fontFamily: 'BeVietnamPro_700Bold',
        color: 'white'
    }
})