import styled from "@emotion/styled"
// import {useState} from "react"
import {BsTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
// import Nigeria from "../assets/nigeria.png"
// import Ghana from "../assets/ghana.png"
// import USA from "../assets/usa.png"
import {AiFillDelete} from "react-icons/ai"



const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Form = styled.form`
    width: 600px;
    border: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin-top: 20px;
`

const Input = styled.input`
    height: 50px;
    width: 100%;
    border: 1px solid #123456;
    border-radius: 3px;
    padding-left: 10px;
    transition: all 350ms;
    outline-color: #aba5f5;
`

const Select = styled.select`
    width: 500px;
    height: 55px;
    border: 1px solid #123456;
    margin-bottom: 10px;
    outline-color: aliceblue;
`

const Button = styled.button`
    width: 350px;
    height: 65px;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #123456;
    border: 0;
    font-size: 18px;
`

const CardHold = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
 background-color: white;
 width: 350px;
 display: flex;
 flex-direction: column;
 border: 1px solid #123456;
 border-radius: 5px;
`

const Hold = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TName = styled.div``
const Name = styled.div`
    span {
        font-size: 15px;
    }
`

const Del = styled.div`
    color: red;
    /* margin-top: 10px; */
   margin-left: 5px;
`

const Wrapper = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    flex-direction: column;
`

// const Logo = styled.img`
//     height: 30px;
//     width: 30px;
//     background-color: silver;
//     border-radius: 50%;
// `
const Box = styled.div`
    color: gray;
    padding: 15px 5px 10px 5px;
    height: 10px;
    height: 35px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
    font-size: 15px;
`


const MainScreenTwo = () => {


  return (
    <Container>
        <Form>
            <h2>Add Contacts</h2>
            <Input
            required placeholder="Enter Your Full Name" type="text" />

            <br /> 

            <Input required placeholder="Enter Your Email" type="email" />

            <br />  

            <Input required placeholder="e.g 0905634847" type="number" />

            <br />  
            
            <Select>
                <option selected disabled>--Select Country--</option>
                <option value= "Nigeria">Nigeria</option>
                <option value= "USA">USA</option>
                <option value= "Ghana">Ghana</option>
            </Select>

            <Button value= "submit">Submit</Button>
        </Form>

        <br />  
        <br />  
        <br />  
        <br />  
        <br />  

        <h2>All Contacts Informations</h2>
         
         <CardHold>         
                    <Card>
                    <Hold>
                        <TName>
                            <Name></Name>
                            <span></span>
                            <span></span>
                        </TName>
                    </Hold>

                    <br />

                    <Wrapper>
                         <Box>
               <BsTelephoneFill />
        </Box>

        <Box>
            <MdEmail />

        </Box>

        <Del>
            <AiFillDelete />
        </Del>
    </Wrapper>
                </Card>
    
         </CardHold>

    </Container>
  )
}

export default MainScreenTwo