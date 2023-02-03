import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
  const router = useRouter();

  const onPress = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card onPress={onPress} isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} alt={name} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text># {id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
