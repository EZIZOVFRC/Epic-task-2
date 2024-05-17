
    import { Helmet } from 'react-helmet'
import SimpleSlider from './Slider/Slider';
import Cards from '../Cards/Cards';
    
    const Home = () => {
  
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <SimpleSlider/>
                <Cards/>
        </>
        )
    }
    
    export default Home
        