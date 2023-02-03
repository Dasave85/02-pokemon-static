import { useEffect, useState } from "react";
import { FavoritePokemons } from "../../../components/pokemon";
import { Layout } from "components/layouts";
import { NoFavorites } from "../../../components/ui";
import { localFavorites } from "../../../utils";
const FavoritesPage = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorites.pokemons());
  }, []);

  return (
    <Layout>
      {favoritesPokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritesPokemon={favoritesPokemon} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
