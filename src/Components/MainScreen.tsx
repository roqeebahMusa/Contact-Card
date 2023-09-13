import styled from "@emotion/styled"
import {useState} from 'react'
import Nigeria from "../assets/nigeria.png"
import Ghana from "../assets/ghana.png"
import USA from "../assets/usa.png"
import {AiFillDelete} from 'react-icons/ai'
import {BsTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

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
    padding: 40px;
`
const Input = styled.input`
    height: 55px;
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #6f6565;
    transition: all 350ms;
    outline-color: #aba5f5;
    padding-left: 10px;

`

const Button = styled.button`
    width: 300px;
    height: 60px;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    background-color: #123456;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    border-radius: 5px;
`

const Select = styled.select`
    height: 55px;
    width: 500px;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #dcdce9;
    transition: all 350ms;
    outline-color: #aba5f5;
    padding-left: 10px;
`

const Card = styled.div`
    width: 350px;
    display: flex;
    background-color: white;
    padding: 10px;
    border: 1px solid #123456;
    border-radius: 5px;
    flex-direction: column;

    span {
        font-size: 11px;
    }

`
const Hold = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TName = styled.div``;
const Name = styled.div`
    font-weight: bold;
`;

const Logo = styled.img`
    height: 30px;
    width: 30px;
    background-color: silver;
    border-radius: 50%;
`
const Box = styled.div`
    color: gray;
    padding: 15px 5px 10px 5px;
    height: 10px;
    width: 100%;
    /* height: 35px;s */
    /* background-color: red; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
    font-size: 17px;
`

const Wrapper = styled.div`
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const CardHold = styled.div`
display: flex;
flex-wrap: wrap;
`
const Del = styled.div`
   color: red;
   position: absolute;
   left: 39%;
   bottom: 10%;
   top: 880px;
`

interface UDATA {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    country: string;
}



const MainScreen = () => {

    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string> ("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [data, setData] = useState <Array<UDATA>> ([])
    const [country, setCountry] = useState<string> ("");
    const [show, setShow] = useState<boolean> ();
    const [editFullName, setEditFullName] = useState<string> ("");
    const [editEmail, setEditEmail] = useState<string> ("");
    const [editPhoneNumber, setEditPhoneNumber] = useState<string> ("");
    const [editCountry, setEditCountry] = useState<string> ("");
    const [toggleValue, setToggleValue] = useState<UDATA> ();

    const SubmitData = () => {
        setData((prev) => [
            ...prev,
            {
                fullName,
                email,

                phoneNumber,
                country,
                id: `${Math.random ()* 4000000}`
            }
        ])
    };

            const RemoveUser = (id: string) => {
                const deleting = data.filter((el) => el.id !== id);

                setData(deleting);
            }

            const toggle = (props:UDATA) => {
                setShow(!show);
                setToggleValue(props);
            };

            const EditContact = () => {
                const iterate = data.map((el) => {
                    return el.id === toggleValue?.id
                    
                     ? {
                        fullName: editFullName === "" ? toggleValue?.fullName : editFullName,
 
                        email: editEmail === "" ? toggleValue?.email : editEmail,

                        phoneNumber: editPhoneNumber === "" ? toggleValue?.phoneNumber : editPhoneNumber,

                        country: editCountry === "" ? toggleValue?.country : editCountry,

                        id: toggleValue.id,
                    }

                    : el;
                });

                setData(iterate);
            }



  return (
    <Container>
         <Form 
         onSubmit={(e) => {
            e.preventDefault();
            SubmitData();
         }}>
           <h2>Add Contact</h2>
           <Input 
           onChange={(e) => {
            setFullName(e.target.value);
     }}
           required placeholder="Enter Your Full Name" type="text"
            />
           <Input
            onChange={(e) => {
                setEmail(e.target.value);
         }}
         required placeholder="Email" type="email" />
           <Input 
            onChange={(e) => {
                setPhoneNumber(e.target.value);
         }}
         required placeholder="e.g 0905737689" type="number"/>

           <Select 
           onChange={(e) =>{
            setCountry(e.target.value)
           }}>
            <option selected disabled>--select country--</option>
            <option value= "USA">USA</option>
            <option value= "Nigeria">NIGERIA</option>
            <option value= "Ghana">GHANA</option>
           </Select>
           <Button type="submit">Submit</Button>
        </Form>
        <br/>
        <br/>
        <br/>
        <br/> 

        <h2>All Contacts</h2>

        <CardHold>
        {
            data?.map((props) => (
                <Card>
            <Hold>
                <TName>
                    <Name>{props.fullName}</Name>
                    <span>Alfred o</span>
                    <span>{props.country}</span>
                </TName>
                {
                    props.country === "Nigeria" ? <Logo src={Nigeria}/> : null
                }

                {
                    props.country === "Ghana" ? <Logo src={Ghana}/> : null
                }

                {
                    props.country === "USA" ? <Logo src={USA}/> : null
                }
                
            </Hold>
            <br />

        <Wrapper>
        <Box>
                <BsTelephoneFill /> {props.phoneNumber}
            </Box>

            <Box>
                <MdEmail /> {props.email}
            </Box>

            <Del onClick={() => {
                RemoveUser(props.id)
            }}>
                {" "}
                
                <AiFillDelete />
            </Del>

            <button onClick={() => {
                toggle(props);
            }}>Edit</button>

            <br />

            {show && toggleValue!.id === props.id ? (
                <div>
                    <input onChange={(e) => {
                        setEditFullName(e.target.value);
                    }} 
               defaultValue={toggleValue?.fullName} placeholder="edit name"  />

                    <input onChange={(e) => {
                        setEditEmail(e.target.value);
                    }} 
               defaultValue={toggleValue?.email} placeholder="edit email"  />

                    <input onChange={(e) => {
                        setEditPhoneNumber(e.target.value);
                    }} 
               defaultValue={toggleValue?.phoneNumber} placeholder="edit number"  />

               <select 
           onChange={(e) =>{
            setEditCountry(e.target.value)
           }} defaultValue={toggleValue?.country} >
            <option selected disabled>--select country--</option>
            <option value= "USA">USA</option>
            <option value= "Nigeria">NIGERIA</option>
            <option value= "Ghana">GHANA</option>
           </select>

                </div>
            ) : null}
                

         
            <div>            
            <button className="save" onClick={EditContact}>Save</button>
            </div>
        </Wrapper>

        </Card>
            ))
        }
     
        </CardHold>
       
    </Container>
  )
}

export default MainScreen