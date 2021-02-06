import { DefaultTheme } from 'styled-components/native'

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string,
        secondaryColor: string,
        backgroundColor: string,
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: '#404040',
    secondaryColor: '#666',
    backgroundColor: '#fff',
}

export const darkTheme: DefaultTheme = {
    primaryColor: '#fff',
    secondaryColor: '#cacaca',
    backgroundColor: '#42445C',
}