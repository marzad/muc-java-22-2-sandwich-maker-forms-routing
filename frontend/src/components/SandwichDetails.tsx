import "./SandwichDetails.css"
import {Sandwich} from "../model/Sandwich";

type SandwichDetailsProps = {
    sandwich: Sandwich;
    deleteSandwich: (id: string) => void; // Type ist: Eine Methode, die einen String als Parameter hat und void als return
}

export default function SandwichDetails(props: SandwichDetailsProps) {

    return (
        <div className={"sandwich-card"}>
            <button onClick={() => props.deleteSandwich(props.sandwich.id)}>X</button>
            <p className="name">{props.sandwich.name}</p>
            <p className="left-side">Bullete: <b className={"props"}>{props.sandwich.patty}</b></p>
            <p className="left-side">Anzahl von Bulleten:  <b className={"props"}>{props.sandwich.numberOfPatties}</b></p>
            <p className="left-side">Brot gegrillt:  <b className={"props"}>{String(props.sandwich.grilled)}</b></p>
            <p className="left-side">Extrawünsche: <b className={"props"}>{props.sandwich.extraWishes}</b> </p>
        </div>
    )
}