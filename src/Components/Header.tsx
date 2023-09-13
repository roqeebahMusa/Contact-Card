import styled from "@emotion/styled"
import {BiMenu} from "react-icons/bi"


const Container = styled.header`
    width: 100%;
    height: 50px;
    background-color: #123456;
    display: flex;
    justify-content: space-between;
    font-size: larger;
    color: white;
    padding-top: 25px;
    font-weight: bold;
`

const Logo = styled.div`
   margin-left: 30px;
   font-weight: bold;
   font-size: 25px;
`

const Icon = styled.div`
    margin-right: 30px;
    font-size: 30px;
`





const Header = () => {
  return (
    <Container>
        <Logo>
            KODE10X - (PhoneBooks)
            </Logo>
            <Icon>
                <BiMenu/>
            </Icon>

    </Container>
  )
}

export default Header