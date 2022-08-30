import React from 'react'

const Accompaniments = ({command, onChange}) => {
  return (
    <div>
        <div className='command__accomp'>
            <p>Choix des accompagnements</p>
            <p>Vous pouvez en choisir maximum 4 !</p>

            <div className='options__accomp'>
                <input type="checkbox" name="accomp" value="Bacon"></input>
                <label htmlFor='accomp'>Bacon</label>
                <input type="checkbox" name="accomp" value="Cheddar"></input>
                <label htmlFor='accomp'>Cheddar</label>
                <input type="checkbox" name="accomp" value="Gruyère"></input>
                <label htmlFor='accomp'>Gruyère</label>
                <input type="checkbox" name="accomp" value="Jambon de Bayonne"></input>
                <label htmlFor='accomp'>Jambon de Bayonne</label>
                <input type="checkbox" name="accomp" value="Jambon blanc"></input>
                <label htmlFor='accomp'>Jambon blanc</label>
                <input type="checkbox" name="accomp" value="Lardons"></input>
                <label htmlFor='accomp'>Lardons</label>
                <input type="checkbox" name="accomp" value="Oignons"></input>
                <label htmlFor='accomp'>Oignons</label>
                <input type="checkbox" name="accomp" value="Pâtes"></input>
                <label htmlFor='accomp'>Pâtes</label>
                <input type="checkbox" name="accomp" value="Salade"></input>
                <label htmlFor='accomp'>Salade</label>
                <input type="checkbox" name="accomp" value="Salami"></input>
                <label htmlFor='accomp'>Salami</label>
                <input type="checkbox" name="accomp" value="Saucisson"></input>
                <label htmlFor='accomp'>Saucisson</label>
                <input type="checkbox" name="accomp" value="Tomate"></input>
                <label htmlFor='accomp'>Tomate</label>
            </div>
        </div>
    </div>
  )
}

export default Accompaniments