import {
  MockedProvider as ApolloProvider,
  MockedResponse,
} from "@apollo/client/testing";
import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { WithModalContext } from "./HOC/WithModal";
import { WithSettingsContext } from "./HOC/WithSettings";

const getAllTheProviders = (mocks?: MockedResponse<Record<string, any>>[]) => {
  return ({ children }: { children: ReactElement }) => {
    return (
      <div id="root">
        <ApolloProvider mocks={mocks} addTypename={false}>
          <WithSettingsContext>
            <ChakraProvider>
              <WithModalContext>{children}</WithModalContext>
            </ChakraProvider>
          </WithSettingsContext>
        </ApolloProvider>
      </div>
    );
  };
};

const customRender = (
  ui: ReactElement,
  mocks?: MockedResponse<Record<string, any>>[]
) => {
  return render(ui, { wrapper: getAllTheProviders(mocks) });
};

export * from "@testing-library/react";
export { customRender as render };
