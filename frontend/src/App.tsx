import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import SandwichOverview from "./components/SandwichOverview";
import CreateSandwich from "./components/CreateSandwich";
import {Sandwich} from "./model/Sandwich";

function App() {
    // Creates a state "sandwiches" and gives us a method to change/set it
    const [sandwiches, setSandwiches] = useState([]);

    // Load Todos from backend
    useEffect(() => {
        loadSandwiches()

    }, []) // empty dependency array = execute only when website was rendered the first time

    const loadSandwiches = () => {
        axios.get("/api/sandwich/")
            .then((response) => response.data)
            .then((sandwiches) => setSandwiches(sandwiches))
    }

    const addSandwich = (newSandwich: Sandwich) => {
        console.log(newSandwich)

        // We use .then here to reload the sandwiches only when the get is done
        axios.post("/api/sandwich", newSandwich)
            .then(loadSandwiches) // reload sandwiches from backend
            .catch((errorFromBackend) => {
                console.log("ALARM", errorFromBackend)
            })
    }

    const deleteSandwich = (id: string) => {

        axios.delete("/api/sandwich/" + id)
            .then(loadSandwiches) // reload sandwiches from backend
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bestellungen</h1>

                {/*
            TODO: Füge Conditional Rendering hinzu!
            Wenn die sandwiches Liste leer ist, soll ein Text erscheinen
            der sagt "Bitte eine Bestellung hinzufügen"
        */}

                {sandwiches.length === 0
                    && <h3>Bitte eine Bestellung hinzufügen</h3>}

                <SandwichOverview sandwiches={sandwiches} deleteSandwich={deleteSandwich}/>
                <CreateSandwich addSandwich={addSandwich}/>

            </header>
        </div>
    );
}

export default App;
