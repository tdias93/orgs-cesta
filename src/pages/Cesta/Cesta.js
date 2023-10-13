import { FlatList ,StyleSheet, View } from "react-native"

import Texto from "../../components/Texto"

import Topo from "./components/Topo"
import Detalhes from "./components/Detalhes"
import Item from "./components/Item"


export function Cesta({ topo, detalhes, itens}) {
    return <>

        <FlatList 
            data={itens.lista} 
            renderItem={Item} 
            keyExtractor={( nomes ) => nomes }
            ListHeaderComponent={() => {
                return <>

                    <Topo {...topo}></Topo>

                    <View style={estilos.cesta}>

                        <Detalhes {...detalhes}></Detalhes>
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>

                    </View>

                </>
            }}

        
        />

        {/* <Topo {...topo}></Topo>

        <View style={estilos.cesta}>

            <Detalhes {...detalhes}></Detalhes>

        </View> */}
    </>
    
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    titulo: {
        color: '#464646',
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
})