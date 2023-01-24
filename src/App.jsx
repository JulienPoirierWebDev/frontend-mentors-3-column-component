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
    <div className="App">
        <div className={"w-auto rounded m-2 overflow-hidden flex flex-col md:flex-row items-center justify-center"}>
            <Card item={content.item1} color={"orange"} image={"icon-sedans.svg"}/>
            <Card item={content.item2} color={"blue"} image={"icon-suvs.svg"}/>
            <Card item={content.item3} color={"green"} textColor={"green-900"} image={"icon-luxury.svg"}/>
        </div>
    </div>
  )
}

const Card = ({color, image, item}) => {
    const buttonStyle = clsx({
        "bg-white py-2 px-6 text-sm rounded-3xl hover:text-white" : true,
        "text-orange-400 hover:bg-orange-400" : color ==="orange",
        "text-sky-800 hover:bg-sky-800" : color ==="blue",
        "text-green-900 hover:bg-emerald-900" : color ==="green",
    })

    const containerStyle = clsx({
        "p-8 w-72" : true,
        "bg-orange-400" : color === "orange",
        "bg-sky-800" : color === "blue",
        "bg-emerald-900" : color === "green",
    })

    return (
        <div className={containerStyle }>
            <img src={`/src/assets/${image}`} alt={image}/>
            <h2 className="text-3xl text-white uppercase my-4">{item.title}</h2>
            <p className="text-white text-md opacity-75 my-4">{item.content}</p>
            <button className={buttonStyle}>Learn More</button>
        </div>
    )
}

export default App
