import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const QuemSomos = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.textContainer}>
                <Text style={[styles.title, styles.bold, { fontSize: 24 }]}>Historia</Text>
                <Text style={styles.box}>
                    Com o auge dos jogos Pokémon Red e Pokémon Green, lançados no ano de 1996 no Japão, não demorou muito para que sua versão animada fosse lançada e aumentada ainda mais a febre da franquia dos monstrinhos de bolso pelo mundo.
                    {'\n'}{'\n'}
                    Estreado em 1997, a série de anime Pocket Monsters (ou Pokémon: A Série, no ocidente) atualmente conta com mais de mil episódios divididos em 23 temporadas e 7 séries principais: Pokémon, Geração Avançada, Diamante e Pérola, Preto e Branco (Best Whishes, no Japão), XY, Sol e Lua, e Jornadas (chamada simplesmente de Pocket Monsters, no Japão). Durante todos esses anos a história segue o garoto de 10 anos, Ash Ketchum, e seu parceiro Pikachu na sua jornada para se tornar um Mestre Pokémon.
                    {'\n'}{'\n'}
                    Nascido e criado na cidade de Pallet, em Kanto, Ash vive com sua mãe e, ao completar 10 anos de idade, finalmente ganha a oportunidade de pode escolher seu Pokémon inicial no laboratório do Professor Carvalho para dar início ao seu sonho pelo título de Mestre Pokémon. No entanto, devido ao seu entusiasmo na noite anterior que não o permitiu dormir, o garoto se atrasa para o seu grande dia e perde a chance de escolher entre os três Pokémon iniciais de Kanto: Bulbasaur, Squirtle ou Charmander. A sorte, contudo, é que o Professor tinha capturado um Pikachu um tanto quanto rebelde que se junta a Ash e, juntos, iniciam sua longa aventura.
                    {'\n'}{'\n'}
                    Porém, em toda aventura sempre haverá aqueles que estarão no caminho do herói para impedir seu grande objetivo. A Equipe Rocket é uma organização maligna liderada pelo misterioso Giovanni que planeja a dominação mundial através do roubo de todos os Pokémon. Ash e Pikachu sempre acabam impedindo os planos da Equipe Rocket, especialmente de três recrutas que não perdem a oportunidade de roubar seu Pokémon Elétrico, sendo eles: a esquentada Jessie, o sensível James, e o Pokémon falante que anda sobre duas patas Meowth.
                    A aventura de Ash e Pikachu pelas regiões do mundo Pokémon é compartilhada com amigos que ele faz pelo caminho: inicialmente, Ash é acompanhado por Misty, a líder de ginásio de Cerulean do tipo Água, e Brock, o líder de ginásio do tipo Pedra de Pewter e Criador Pokémon; na sua curta passagem pelas Ilhas Laranja, além da Misty, o desenhista Tracey o acompanha; ao chegar na região de Hoenn, Ash, Pikachu e Brock conhecem a coordenadora Pokémon May e seu pequeno irmão Max; em Sinnoh, o trio de Kanto segue em jornada com a enérgica, e também coordenadora Pokémon, Dawn e seu Piplup.
                    {'\n'}{'\n'}
                    Na saga Black e White, na distante região de Unova, Ash e Pikachu seguem na companhia da treinadora dos Pokémon do tipo Dragão Iris e o líder de ginásio Cilan; ao chegar em Kalos, a antiga amiga de infância do Ash e competidora das Performances Pokémon, Serena, Clemont, líder de ginásio dos Pokémon tipo Elétrico da cidade de Lumiose, e sua irmã Bonnie se juntam ao time; no arquipélago de Alola, Ash começa a frequentar a Escola Pokémon junto com os amigos Kiawe, Cris, Vitória, Lulú e Lilian, e passar a morar na casa do Professor Nogueira; e, por fim, na série Jornadas, Ash e Pikachu retornam a Kanto e se unem ao Goh, um garoto da cidade de Vermillion que tem por objetivo capturar todos os Pokémon do mundo até chegar ao Mew.
                    {'\n'}{'\n'}
                    Durante sua estadia nas regiões, Ash enfrenta os Líderes de Ginásio a fim de obter as Insígnias de Ginásio e participar da Liga Pokémon, um evento de batalha que reúne os melhores treinadores de toda a região para decidir o seu Campeão. Após a Liga Pokémon de Hoenn, Ash enfrenta os cérebros da Batalha da Fronteira e entra para o Hall da Fama, obtendo o título de Mestre da Fronteira. Em Alola, Ash passa a enfrentar os desafios dos Kahunas das quatro ilhas que compõem o arquipélago e, ao final, vence uma Liga Pokémon pela primeira vez, ressalvada a Liga Laranja.
                    {'\n'}{'\n'}
                    Já na série Jornadas Pokémon, Ash decide participar do Campeonato da Coroação Mundial, um sistema que ranqueia vários treinadores ao redor de todo o mundo. Os treinadores capazes de chegar ao topo do ranking têm a chance de batalhar contra o Monarca Leon, que também é o Campeão da região de Galar, para disputar o seu título.
                    {'\n'}{'\n'}
                    A partir de Jornadas Pokémon, o anime passa a ter um co-protagonista. Goh é um garoto de 10 anos que vive na cidade de Vermillion, em Kanto, com seus pais. Desde muito novo, ele tem o sonho de capturar o Pokémon Mítico Mew, que, segundo as lendas, detém o gene primordial de todos os Pokémon. Para chamar a atenção do Mew, Goh decide capturar todos os Pokémon do mundo e parte em jornada com Ash e Pikachu como bolsistas do Instituto de Pesquisa do Professor Cerejeira, que trabalha na observação do comportamento dos Pokémon. Além de Goh, Ash também conhece a filha do Professor Cerejeira, Chloe, que, inicialmente, não entende o entusiasmo dos meninos pelos Pokémon, mas, ao decorrer da série, passa a ter interesse por eles.
                    {'\n'}{'\n'}
                    Por mais de vinte anos, Ash e Pikachu têm enfrentado diversas batalhas, conhecido diversos amigos e rivais e compreendido cada vez mais o quão vasto é o Mundo Pokémon. O seu grande objetivo continua sendo se tornar um Mestre Pokémon. E, como o próprio encerramento de cada episódio do anime diz: a jornada continua!
                </Text>
            </ScrollView>
            <ScrollView style={styles.textContainer}>
                <Text style={[styles.title, styles.bold, { fontSize: 24 }]}>Sobre Api Utulizada</Text>
                <Text style={styles.box}>
                    Sobre
                    O que é isso?
                    Este site fornece uma interface API RESTful para objetos altamente detalhados construídos a partir de milhares de linhas de dados relacionados a Pokémon . Cobrimos especificamente a franquia de videogame. Usando este site, você pode consumir informações sobre Pokémon, seus movimentos, habilidades, tipos, grupos de ovos e muito, muito mais.
                    {'\n'}{'\n'}
                    O que é uma API?
                    Uma API (Application Programming Interface) é um contrato que permite aos desenvolvedores interagir com um aplicativo por meio de um conjunto de interfaces. Nesse caso, o aplicativo é um banco de dados de milhares de objetos relacionados a Pokémon e as interfaces são links de URL.
                    {'\n'}{'\n'}
                    Uma API RESTful é uma API que está em conformidade com um conjunto de convenções flexíveis baseadas em verbos HTTP, erros e hiperlinks.
                    {'\n'}{'\n'}
                    Já não existem 101 outros sites Pokémon?
                    Sim e esse é exatamente o problema!
                    {'\n'}{'\n'}
                    101 instâncias do mesmo site significam 101 instâncias dos mesmos dados .
                    {'\n'}{'\n'}
                    Nosso objetivo é fornecer uma fonte única de dados que qualquer número de outros sites possa consumir e usar.
                    {'\n'}{'\n'}
                    Freqüentemente, e especialmente quando novos jogos ou atualizações de Pokémon são lançados, esses mais de 101 sites levam semanas para serem atualizados, pois as pessoas precisam inserir as mesmas informações em todos esses lugares diferentes.
                    {'\n'}{'\n'}
                    Isso resolve esse problema. Se todos esses sites consumissem seus dados daqui, eles teriam exatamente as mesmas informações que são atualizadas exatamente ao mesmo tempo, sem erros entre cada site. O benefício geral é uma melhor colaboração e consistência em todos os diferentes sites e aplicativos Pokémon. É bom para todos!
                    {'\n'}{'\n'}
                    Quanta informação é armazenada aqui?
                    Bastante.
                    {'\n'}{'\n'}
                    Atualmente temos dezenas de milhares de itens individuais em nosso banco de dados, incluindo:
                    {'\n'}{'\n'}
                    Movimentos
                    Habilidades
                    Pokémon (incluindo várias formas)
                    Tipos
                    Grupos de ovos
                    Versões do jogo
                    Unid
                    Pokédexes
                    Cadeias de evolução Pokémon
                    E isso é apenas arranhar a superfície! Para ver todos os diferentes tipos de dados que temos, confira a documentação .
                    {'\n'}{'\n'}
                    A API está faltando alguma coisa!
                    Nós sabemos! Sinta-se à vontade para contribuir com questões abertas no GitHub .
                    {'\n'}{'\n'}
                    Tem ideias para novos recursos? Estamos no Slack! Inscreva -se aqui e visite nossa equipe do Slack .
                    {'\n'}{'\n'}
                    Então, quem construiu isso?
                    O PokéAPI V1 foi criado por Paul Hallett como um projeto de fim de semana, mas rapidamente se tornou mais do que um trabalho de fim de semana. Em dezembro de 2014, Paul descontinuou a V1 em favor de trabalhar na V2.
                    {'\n'}{'\n'}
                    Foi aqui que Zane Adickes entrou em ação. Zane achou o projeto original uma ideia fantástica e queria ajudá-lo a crescer. Com orientação de Paul, Zane criou a API V2 usando um espelho exato dos dados da Veekun relacionados à série principal de jogos.
                    {'\n'}{'\n'}
                    Durante o verão de 2018, Paul decidiu entregar o projeto à comunidade. Foi aqui que Tim Malone, Mark Tse, Sargun Vohra, Charles Marttinen, Alessandro Pezzé, Alberto Oliveira da Silva e Lucio Merotta se reuniram e começaram a planejar como mudar a infraestrutura para melhorar o desempenho e reduzir custos de hospedagem. Um passo importante foi converter a API para servir arquivos JSON estáticos, o que foi possível graças a Sargun e sua excelente ferramenta PokeAPI/idem . O site frontend também foi reconstruído por Charles ao mesmo tempo. Todo o processo foi concluído em outubro de 2018.
                    {'\n'}{'\n'}
                    Após esse grande redesenho, o PokéAPI conquistou muitos novos consumidores devido ao seu novo desempenho extremamente rápido. Para dar uma referência rápida, o carregamento do infame recurso Pokémon Magikarp passou de segundos para ~ 80ms. Um marco importante para o projeto PokéAPI aconteceu pouco depois, no verão de 2020, quando seu repositório GitHub alcançou 2.000 observadores de estrelas e em um único mês atendeu 100 milhões de chamadas de API.
                    {'\n'}{'\n'}
                    Em agosto de 2020, a comunidade PokéAPI decidiu bifurcar temporariamente veekun/pokedex , que era a principal e única fonte de dados. Esta operação foi planejada para adicionar novos dados da geração 8, que faltavam em Veekun. As seguintes pessoas contribuíram para buscar e formatar dados da geração 8 e mais recentes: Alessandro Pezzé , Hoang Quoc Trung , Chandler Mahkorn , André Sousa , Alexander Whan , Austin Jones , tomi-912 , Eric Donders , Gaël Dottel , Parnassius e Anh Thang .
                    {'\n'}{'\n'}
                    Em janeiro de 2023, bitomic , Kohki Miki , Paul-Émile e Tillfox coletaram dados da geração 9 da web e os adicionaram aqui.
                    {'\n'}{'\n'}
                    Os atuais proprietários do projeto PokéAPI são Paul Hallet , Tim Malone e Alessandro Pezzé . Ao lado deles, outros mantenedores principais incluem Charles Marttinen e Sargun Vohra .
                    {'\n'}{'\n'}
                    Também temos uma organização de contribuidores no GitHub da qual você pode participar!
                    {'\n'}{'\n'}
                    Onde você conseguiu todos esses dados?
                    Reunimos as informações neste site de vários recursos:
                    {'\n'}{'\n'}
                    Veekun tem um Pokedex fantástico , que também é um projeto de código aberto que contém uma tonelada de dados CSV. Usamos isso para dar corpo ao banco de dados que alimenta o Pokéapi.
                    Os dados da Geração 8 são extraídos de diferentes recursos considerados confiáveis. Posteriormente os dados foram integrados aos oficiais divulgados pela Veekun.
                    Gostaríamos também de agradecer:
                    {'\n'}{'\n'}
                    Laven Pillay, que reuniu a maioria dos sprites usados ​​no site.
                    Alessandro Pezzé , que trabalhou incansavelmente para adicionar as atualizações Sol/Lua.
                    Qual é a pilha de tecnologia?
                    Até novembro de 2018, a API e o site foram construídos juntos em um único projeto Python usando a estrutura Django e emparelhados com um banco de dados PostgreSQL para armazenar os dados. Django REST Framework foi usado para expor os dados através de uma API RESTful. Toda a pilha foi implantada na DigitalOcean , inicialmente paga por Paul e depois patrocinada diretamente pela própria DigitalOcean.
                    {'\n'}{'\n'}
                    Em outubro de 2018, a API foi convertida para servir arquivos JSON estáticos de maneira totalmente compatível com versões anteriores. Isso permitiu que a PokéAPI mudasse sua hospedagem para uma solução de hospedagem estática barata ( Firebase Hosting + Cloudflare Caching), o que aumentou o desempenho e a estabilidade por uma margem enorme.
                    {'\n'}{'\n'}
                    A mudança para hospedagem estática foi resolvida com a introdução de uma etapa de construção antes da implantação realizada pelo CircleCI , nosso sistema de construção. Esta etapa de construção inicia uma cópia local do Django de PokeAPI/pokeapi e salva cada endpoint possível como um arquivo JSON usando PokeAPI/ditto . Todos esses arquivos JSON são então carregados no Firebase e veiculados ao público por meio de uma função do Firebase acionada pelo CircleCI.
                    {'\n'}{'\n'}
                    Este site agora usa React Static e o código reside em seu próprio projeto GitHub em PokeAPI/pokeapi.co . Novamente, o CircleCI se encarrega de implantá-lo no Firebase como arquivos estáticos.
                    {'\n'}{'\n'}
                    Criado por Paul Hallett e outros colaboradores da PokéAPI em todo o mundo. Pokémon e nomes de personagens Pokémon são marcas registradas da Nintendo.
                    
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        marginVertical: 10,
        
    },
    title: {
        fontWeight: "bold",
        alignItems: "center",
        display:"flex",
        justifyContent: "center",
      
    },
    box: {
        textAlign: "center",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 10,
    },
    bold: {
        fontSize: 24,
    },
});

export default QuemSomos;
