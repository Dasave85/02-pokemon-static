import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
  favoritesPokemon: number[];
}

export const FavoritePokemons: FC<Props> = ({ favoritesPokemon }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemon.map((pokeid) => (
        <FavoriteCardPokemon key={pokeid} id={pokeid} />
      ))}
    </Grid.Container>
  );
};
