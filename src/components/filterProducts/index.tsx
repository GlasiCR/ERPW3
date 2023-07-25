import * as S from './styles'

type Props = {
    children: React.ReactNode,
    button: React.ReactNode,
}

export default function FilterProducts({ children, button}: Props) {
    return (
        <S.MainFilter>
            <S.Title>Filtrar por:</S.Title>
            <S.Subtitle>Status</S.Subtitle>
            
            <S.DivFilter>
                <S.DivCheckBox>
                    {children}
                </S.DivCheckBox>
            </S.DivFilter>
            {button}
        </S.MainFilter>
    )
}