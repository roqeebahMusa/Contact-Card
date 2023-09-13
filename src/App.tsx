import './App.css'
import GlobalStyles from './Components/GlobalStyles'
// import GlobalStylesTwo from './Components/GlobalStylesTwo'
// import HeaderTwo from './Components/HeaderTwo'
// import MainScreenTwo from './Components/MainScreenTwo'
import Header from './Components/Header'
import MainScreen from './Components/MainScreen'

function App() {

  return (

      <div className='App'>
        <Header />
          <GlobalStyles/>
          <MainScreen/>

          {/* <GlobalStylesTwo />
          <HeaderTwo/>
          <MainScreenTwo /> */}
      </div>
       
  )
}

export default App
