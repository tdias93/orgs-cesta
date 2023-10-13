import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
 
    let estilo = estilos.texto

    if (style?.fontWeight === 'bold') {
        estilo = estilo.textoNegrito
    }

    return <Text style={[style, estilos.texto]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular'
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    },
})