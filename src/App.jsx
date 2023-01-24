import './index.css';
import clsx from "clsx";

const content =
    {
        item1 :
            {
                title:"Sedans",
                content:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            },
        item2 :
            {
                title: "SUVs",
                content:"  Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            },
        item3 : {
            title: "Luxury",
            content : "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        }
}

function App() {

  return (
    <div className="App min-h-screen" >
        <div className={"flex items-baseline justify-center m-2"} >
            <div className={"min-h-screen box-border w-auto rounded overflow-hidden flex flex-col items-center justify-center lg:flex-row lg:items-baseline"}>
                <Card item={content.item1} color={"orange"} image={"icon-sedans.svg"}/>
                <Card item={content.item2} color={"blue"} image={"icon-suvs.svg"}/>
                <Card item={content.item3} color={"green"} textColor={"green-900"} image={"icon-luxury.svg"}/>
            </div>
        </div>
    </div>
  )
}

const Card = ({color, image, item}) => {

    return (
        <CardContainer color={color}>
            <img src={`/src/assets/${image}`} alt={image}/>
            <h2 className="text-3xl text-white uppercase my-4">{item.title}</h2>
            <p className="text-white text-md opacity-75 my-4">{item.content}</p>
            <CardButton color={color}/>
        </CardContainer>
    )
}

const CardButton = ({color}) => {
    const buttonStyle = clsx({
        "box-border bg-white py-2 px-6 text-sm rounded-3xl border-white border-2 hover:text-white  hover:border-white"  : true,
        "text-orange-400 hover:bg-orange-400" : color ==="orange",
        "text-cyan-800 hover:bg-cyan-800" : color ==="blue",
        "text-teal-900 hover:bg-teal-900" : color ==="green",
    })
    return (
        <button className={buttonStyle}>Learn More</button>

    )
}

const CardContainer = ({children, color}) => {

    const containerStyle = clsx({
        "p-8 w-72 box-border " : true,
        "bg-orange-400" : color === "orange",
        "bg-cyan-800" : color === "blue",
        "bg-teal-900" : color === "green",
    })
    return (
    <div className={containerStyle}>
        {children}
    </div>
    )
}

export default App
