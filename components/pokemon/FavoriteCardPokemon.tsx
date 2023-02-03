import { Grid, Card } from "@nextui-org/react";
import React, { FC } from "react";
import { useRouter } from "next/router";
interface Props {
  id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const router = useRouter();
  const onPressFav = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card onPress={onPressFav} isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
