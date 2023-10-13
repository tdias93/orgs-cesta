import Texto from "../../../components/Texto";
import { View, Image, StyleSheet, FlatList } from "react-native";

export default function Itens({ item: { nome, imagem } }) {

    return <View style={estilos.item} key={nome}>

        <Image style={estilos.imagens} source={imagem}/>
        <Texto style={estilos.nome}>{nome}</Texto>
    
    </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    imagens: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: '#464646'
    }
})