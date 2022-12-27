import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SettingsContext } from "../../HOC/WithSettings";

const ProfilPanel = () => {
  const settingsContext = useContext(SettingsContext);

  const { colorMode, toggleColorMode } = useColorMode();

  //TODO: use react debouncing
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    settingsContext.setUsername(value);
  };

  return (
    <Flex pt="4rem" height="100%" flexDir="column">
      <Heading textAlign="center" size="lg">
        Profile
      </Heading>
      <Stack align="center" justify="center" spacing="2">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            value={settingsContext.username}
            name="username"
            onChange={handleInputChange}
          />
        </FormControl>
        <Stack align="center" direction="row">
          <Text>Light</Text>
          <Switch
            size="lg"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
          <Text>Dark</Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ProfilPanel;
