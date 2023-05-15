import {useContext} from 'react'
import { Context } from "../Context";
import Card from '../Components/Card';


const Favourites = () => {
    const { favourites } = useContext(Context);;
    console.log(favourites)

    const favouriteProducts = favourites.map((product) => (
      <Card key={product.id} {...product} />
    ));
    return (
      <main className="bg-background min-h-[90vh]">
        {favouriteProducts}
      </main>
    );
}

export default Favourites
