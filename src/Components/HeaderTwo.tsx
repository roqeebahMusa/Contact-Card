import styled from "@emotion/styled"
import {BiMenu} from "react-icons/bi"


const Container = styled.header`
    width: 100%;
    height: 70px;
    background-color: #123456;
    padding-top: 25px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-weight: bold;
`
const Logo = styled.div`
    margin-left: 30px;
    font-weight: bold;
    font-size: 30px;
`

const Icon = styled.div`
    font-size: 30px;
    margin-right: 30px;
`

const HeaderTwo = () => {
  return (
    <Container>
        <Logo>KODE10X - (PhoneBooks)</Logo>
        <Icon>
            <BiMenu />
        </Icon>
    </Container>
  )
}

export default HeaderTwo