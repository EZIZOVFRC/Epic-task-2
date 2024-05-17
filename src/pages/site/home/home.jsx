
    import { Helmet } from 'react-helmet'
import SimpleSlider from './Slider/Slider';
import Cards from '../Cards/Cards';
import { useContext } from 'react';
import MainContext from '../../../context/context';
    
    const Home = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <SimpleSlider/>
                <Cards data={data}/>
        </>
        )
    }
    
    export default Home
        