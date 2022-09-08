import React, { useState } from 'react'
import "../../styles/drink.css";

const Drink = ({ command, onChange }) => {

    const [drink, setDrink] = useState(command.Boisson ? [...command.Boisson] : []);

    const handleChangeDrink = (e) => {
        const tempDrink = [...drink];

        if (tempDrink.includes(e.target.value)) {
            tempDrink.splice(
                tempDrink.findIndex((drink) => drink === e.target.value), 1
            )
        } else {
            if (tempDrink.length === 1) return
            tempDrink.push(e.target.value)
        }

        setDrink(tempDrink);
        onChange({ ...command, Boisson: tempDrink })
    }
    return (
        <div className='wrapper'>
            <div className='command__drink'>
            <p>Choix de la boisson : </p>
            <p>Vous pouvez choisir qu'une seule boisson</p>
                <div className='options__drink'>
                    <input type="checkbox" name="drink" id="drink" value="7up" onChange={handleChangeDrink} checked={drink.includes('7up')}></input>
                    <label htmlFor='drink'>7up</label>
                </div>
                <div className='options__drink'>
                    <input type="checkbox" name="drink" id="drink" value="Coca-Cola" onChange={handleChangeDrink} checked={drink.includes('Coca-Cola')}></input>
                    <label htmlFor='drink'>Coca-Cola</label>
                </div>
                <div className='options__drink'>
                    <input type="checkbox" name="drink" id="drink" value="Fanta" onChange={handleChangeDrink} checked={drink.includes('Fanta')}></input>
                    <label htmlFor='drink'>Fanta</label>
                </div>
                <div className='options__drink'>
                    <input type="checkbox" name="drink" id="drink" value="Ice-tea" onChange={handleChangeDrink} checked={drink.includes('Ice-tea')}></input>
                    <label htmlFor='drink'>Ice-tea</label>
                </div>
                <div className='options__drink'>
                    <input type="checkbox" name="drink" id="drink" value="Oasis" onChange={handleChangeDrink} checked={drink.includes('Oasis')}></input>
                    <label htmlFor='drink'>Oasis</label>
                </div>
                <div className='options__drink'>
                    <input type="checkbox" name="drink" id="drink" value="Orangina" onChange={handleChangeDrink} checked={drink.includes('Orangina')}></input>
                    <label htmlFor='drink'>Orangina</label>
                </div>
                <div className='options__drink'>
                    <input type="checkbox" name="drink" id="drink" value="Pepsi" onChange={handleChangeDrink} checked={drink.includes('Pepsi')}></input>
                    <label htmlFor='drink'>Pepsi</label>
                </div>
                <div className='options__drink'>
                    <input type="checkbox" name="drink" id="drink" value="Sprite" onChange={handleChangeDrink} checked={drink.includes('Sprite')}></input>
                    <label htmlFor='drink'>Sprite</label>
                </div>
                <div className='options__drink'>
                    <input type="checkbox" name="drink" id="drink" value="Tropico" onChange={handleChangeDrink} checked={drink.includes('Tropico')}></input>
                    <label htmlFor='drink'>Tropico</label>
                </div>
            </div>
        </div>
    )
}

export default Drink;
