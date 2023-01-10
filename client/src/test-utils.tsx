import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MockedProvider as ApolloProvider } from "@apollo/client/testing";
import { ChakraProvider } from "@chakra-ui/react";
import { WithModalContext } from "./HOC/WithModal";
import { WithSettingsContext } from "./HOC/WithSettings";

const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return (
    <ApolloProvider mocks={[]} addTypename={false}>
      <WithSettingsContext>
        <ChakraProvider>
          <WithModalContext>{children}</WithModalContext>
        </ChakraProvider>
      </WithSettingsContext>
    </ApolloProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
