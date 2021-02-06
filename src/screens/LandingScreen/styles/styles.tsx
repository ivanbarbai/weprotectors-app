import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    backgroundColor:#3C4385;
    flex: 1;
    justifyContent: center;
    alignItems:stretch;
`

export const Header = styled.View`
    alignItems:center;
    alignContent:center;
    marginVertical:10px;
`

export const Title = styled.Text`
    fontSize:36;
    color:white;
    fontWeight:bold;
`

export const SubTitle = styled.Text`
    fontSize:28;
    color:white;
    fontWeight:bold;
    marginVertical:4px;
`

export const Main = styled.View`
    alignItems:center;
    alignContent:center;
    justifyContent:center;
    paddingVertical:10px;
    marginVertical:10px;
`
export const Logo = styled.View`
    width:320px;
    height:320px;
    backgroundColor:orange;
    border-radius:200px;
    marginVertical:30px;
`
export const MediumText = styled.Text`
    fontSize:28px;
    color:white;
    fontWeight:200;
`
export const PrimaryButton = styled.View`
    background:white;
    paddingHorizontal:50px;
    paddingVertical:12px;
    border-radius:10px;
`
export const Footer = styled.View`
    alignItems:center;
    alignContent:center;
    paddingVertical:40px;
`
export const ButtonText = styled.Text`
    color:#404040;
    fontWeight:bold;
    fontSize:18px;
`
export const LittleText = styled.Text`
    fontSize:14px;
    color:white;
    marginVertical:12px;
`