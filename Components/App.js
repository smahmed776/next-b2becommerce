import Footer from "./Footer/Footer";
import Main from "./Home/Main/Main";
import { RatingContextProvider } from "./GlobalContext/RatingContext";
import Header from "./Header/Header";



function App() {
    return (
        <div className="bg-light">

            <Header />
            <Main />
            <Footer />
          
        </div>
    );
}

export default App