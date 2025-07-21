import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import NavbarDyanamic from './components/NavbarDyanamic';
import TextForm from './components/TextForm';
import About from './components/About';

import {
    BrowserRouter,
    Switch,
    Route,
    // Link
} from "react-router-dom";

function App() {
    document.title = "Update title";
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        console.log('test');

        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Alert alert={alert} />
                <Navbar />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route exact path="/">
                        <TextForm heading="Enter the text to analyze below" alert={showAlert} />
                    </Route>
                </Switch>
            </BrowserRouter>
            
            {/* <NavbarDyanamic title="Testing4" aboutText={9}/> */}
            {/* <NavbarDyanamic /> */}
            
            {/* <About /> */}
            {/* <TextForm heading="Enter the text to analyze below" alert={showAlert} /> */}
        </div>
    );
}

export default App;
