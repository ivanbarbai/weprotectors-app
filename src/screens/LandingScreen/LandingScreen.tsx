import React from 'react'
import { Container, Header, Title, SubTitle, Main, Logo, MediumText, PrimaryButton, Footer, ButtonText, LittleText } from './styles/styles'
import { Text, TouchableOpacity, View, Linking } from 'react-native'


const LandingScreen = () => {
    return (
        <Container>
            <Header>
                <Title>We protect the world</Title>
            </Header>
            <Main>
                <Logo></Logo>
                <SubTitle>Protectors</SubTitle>
                <MediumText>0000000</MediumText>
            </Main>
            <Footer>
                <PrimaryButton>
                    <TouchableOpacity onPress={() => (Linking.openURL('https://google.com'))}>
                        <ButtonText>Become a Protector</ButtonText>
                    </TouchableOpacity>
                </PrimaryButton>
                    <LittleText>Visit us @ https://weprotectors.com</LittleText>
            </Footer>
        </Container>
    )
}

export default LandingScreen
