import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Sandwich} from "../model/Sandwich";

type CreateSandwichProps = {
    addSandwich: (description: Sandwich) => void
}

export default function CreateSandwich(props: CreateSandwichProps) {

    const emptySandwichPlaceholder: Sandwich = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        grilled: false,
        extraWishes: ""
    }

    const [sandwich, setSandwich] = useState(emptySandwichPlaceholder)


    useEffect(()=>{
        console.log(sandwich)
    }, [sandwich])

    /*
    * TODO: Aufgabe 3 -> Erstelle eine handleSubmit(event: FormEvent<HTMLFormElement>) Funktion,
    *  die props.addSandwich aufruft und das neue Sandwich-Objekt als Parameter übergibt
    **/

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.addSandwich(sandwich)
        setSandwich(emptySandwichPlaceholder)
    }

    /*
   * TODO: Aufgabe 2 -> Erstelle eine handleChange(event: ChangeEvent<HTMLInputElement>) Funktion,
   * die Änderungen an der Form übernimmt und den Sandwich-State aktualisiert
   **/


    function handleChange(event: ChangeEvent<HTMLInputElement>){
        const fieldName = event.target.name
        const fieldType = event.target.type
        const fieldValue = fieldType !== "checkbox" ? event.target.value: event.target.checked

        setSandwich(prevSandwich => ({
            ...prevSandwich,[fieldName]: fieldValue}))
    }


    /*
    * TODO: Aufgabe 1 -> Erstelle eine <form> mit der man alle Daten eines Burgers angeben kann
    **/
    return (
        <div>
            <form onSubmit={handleSubmit}>
{/*                <label>
                    ID:
                    <input type={"text"}
                           value={sandwich.id}
                           onChange={handleChange}
                           name={"ID"}/>
                </label>
                <br/>*/}
                <label>
                    Name:
                    <input type={"text"}
                           value={sandwich.name}
                           onChange={handleChange}
                           name={"name"}/>
                </label>
                <br/>
                <label>
                    Bulette:
                    <input type={"text"}
                    value={sandwich.patty}
                    onChange={handleChange}
                    name={"patty"}/>
                </label>
                <br/>
                <label>
                    Anzahl der Buletten:
                    <input type={"number"}
                           value={sandwich.numberOfPatties}
                           onChange={handleChange}
                           name={"numberOfPatties"}/>
                </label>
                <br/>
                <label>
                    Brot gegrillt::
                    <input type={"checkbox"}
                           checked={sandwich.grilled}
                           onChange={handleChange}
                           name={"grilled"}/>
                </label>
                <br/>
                <label>
                    Extrawünsche:
                    <input type={"text"}
                           value={sandwich.extraWishes}
                           onChange={handleChange}
                           name={"extraWishes"}/>
                </label>
                <br/>
                {/* TODO: onClick hier entfernen und props.addSandwich in handleSubmit verschieben */}
                <button type={"submit"}>Bestellung hinzufügen</button>
            </form>
        </div>
    )

    /* TODO: Bonusaufgabe 1 -> Füge dem Projekt Routing hinzu (click auf ein Sandwich, öffnet die Sandwich-Details wie bei Rick&Morty)  */
    /* TODO: Bonusaufgabe 2 -> Style das Projekt nach deinen Wünschen  */
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}