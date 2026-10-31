import milanCathedral from "./assets/travel.png"
import mtFuji from "./assets/mtfuji.png"
import greatChina from "./assets/the-great-wall-of-china.png"
const travelData = [
    {
        id: 1,
        img : {
            src: milanCathedral,
            alt: "milan"
        },
        title: "Milan Cathedral",
        country:"Italy",
        googleMapLink:"https://www.google.com/",
        dates: "12 Jan, 2021 - 24 Jan, 2021",
        text : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam nemo aliquid incidunt eligendi beatae est quae,
         quod dignissimos ab eveniet quisquam eum, ad quasi. 
        Ut porro minus dolore sunt atque.`
    },
    {
        id:2,
        img : {
            src:mtFuji,
            alt: "Mt Fuji"
        },
        title: "Mt Fuji",
        country: "Japan",
        googleMapLink:"https://www.google.com/",
        dates: "2 Feb, 2021 - 15 Feb, 2021 ",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam nemo aliquid incidunt eligendi beatae est quae,
         quod dignissimos ab eveniet quisquam eum, ad quasi. 
        Ut porro minus dolore sunt atque.`
    },
    {
        id:3,
        img : {
            src:greatChina,
            alt: "The Great Wall of China "
        },
        title: "The Great Wall of China",
        country: "China",
        googleMapLink:"https://www.google.com/",
        dates: "20 Feb, 2021 - 12 Mar, 2021 ",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam nemo aliquid incidunt eligendi beatae est quae,
         quod dignissimos ab eveniet quisquam eum, ad quasi. 
        Ut porro minus dolore sunt atque.`
    }

]
export default travelData