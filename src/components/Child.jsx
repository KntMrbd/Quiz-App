

function UI(props){
    return(
        <>
            <header className="text-4xl my-2 font-bold text-center">Static Quiz App</header>

            <p className="text-2xl font-semibold text-center">Project Name: {props.title}</p>

            <div className="bg-gray-50 my-2 mb-4 pb-3 pt-1 box-border w-130 rounded-md place-self-center">
                <p className="font-bold text-lg mt-3 my-2 mx-4">What is the Capital of France?</p>
                <div className="p-2 text-xl bg-red-300 my-0.5 mx-4 rounded-md">{props.city1}</div>
                <div className="p-2 text-xl bg-red-300 my-0.5 mx-4 rounded-md">{props.city2}</div>
                <div className="p-2 text-xl bg-green-300 my-0.5 mx-4 rounded-md">{props.city3}</div>
                <div className="p-2 text-xl bg-red-300 my-0.5 mb-3 mx-4 rounded-md">{props.city4}</div>
            </div>

            <div className="bg-gray-50 my-2 mb-4 pb-3 pt-1 box-border w-130 rounded-md place-self-center">
                <p className="font-bold text-lg mt-3 my-2 mx-4">Who developed ReactJS?</p>
                <div className="p-2 text-xl bg-red-300 my-0.5 mx-4 rounded-md">{props.developer1}</div>
                <div className="p-2 text-xl bg-green-300 my-0.5 mx-4 rounded-md">{props.developer2}</div>
                <div className="p-2 text-xl bg-red-300 my-0.5 mx-4 rounded-md">{props.developer3}</div>
                <div className="p-2 text-xl bg-red-300 my-0.5 mb-3 mx-4 rounded-md">{props.developer4}</div>
            </div>

            <div className="bg-gray-50 my-2 mb-4 pb-3 pt-1 box-border w-130 rounded-md place-self-center">
                <p className="font-bold text-lg mt-3 my-2 mx-4">Which programming language is used for React?</p>
                <div className="p-2 text-xl bg-red-300 my-0.5 mx-4 rounded-md">{props.planguage1}</div>
                <div className="p-2 text-xl bg-red-300 my-0.5 mx-4 rounded-md">{props.planguage2}</div>
                <div className="p-2 text-xl bg-green-300 my-0.5 mx-4 rounded-md">{props.planguage3}</div>
                <div className="p-2 text-xl bg-red-300 my-0.5 mb-3 mx-4 rounded-md">{props.planguage4}</div>
            </div>
        </>
    )
}

export default UI