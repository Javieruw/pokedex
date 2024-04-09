import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { Card, Image, Text, Badge, Group } from "@mantine/core";
import "./PokemonModal.css";

function PokemonModal({ opened, close, pokemon }) {
  const [isLoading, setIsLoading] = useState(true);
  const primaryType = pokemon?.types[0].type.name;
  const secondaryType = pokemon?.types[1]?.type.name;
  /* async function fetchData() {
      console.log("FEtch Data");
      let ani = await fetch();
      let d = await ani.json();
      setPokemon(d);
      setIsLoading(false);
    }*/

  /*useEffect(() => {
      fetchData();
    }, []);
  */
  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <Card shadow="sm" padding="xl" component="a" target="_blank">
          <Card.Section>
            <Image
              className="img"
              src={pokemon?.sprites.front_default}
              height={160}
              alt={pokemon?.name}
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{pokemon?.name}</Text>
            <Badge color="pink">
              {pokemon?.types[1]?.type.name
                ? `${primaryType}/${secondaryType}`
                : primaryType}
            </Badge>
          </Group>

          <Text size="sm" c="dimmed">
            {pokemon?.stats.map((state) => (
              <div>
                {state.stat.name} : {state.base_stat}
              </div>
            ))}
          </Text>
        </Card>
      </Modal>
    </>
  );
}
PokemonModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  close: PropTypes.func,
  pokemon: PropTypes.object,
};
export default PokemonModal;
