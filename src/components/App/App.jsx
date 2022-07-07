import React from 'react';
import { useEffect, useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import { response } from 'express';

// see if they created a state array container?
const [shoppingList, setShoppingList] = useState([]);

const getShoppingList = () => {
    axios({
        method: 'GET',
        url: '/list'
    })
        .then((response) => {
            console.log('the client response is:', response);
            console.log('here is the data from response:', response.data);
            setShoppingList(response.data);
        })
        .catch(function (error) {
            console.log('ERROR ON GET', error);
        });
}



// POST goes here
const itemSubmit = (event) => {
    event.preventDefault();

    axios({
        method: 'POST',
        url: '/list',
        data: {
            name: newName,
            quantity: newQuantity,
            unit: newUnit,
        }
    })


}




useEffect(() => {
    console.log('get here');
} , [] )

function App() {

    
    return (
        <div className="App">
            <Header />
            <main>
                {/* needs prop!! */}
                <ShoppingForm />
                <p>Under Construction...</p>
            </main>
        </div>
    );
}



export default App;
