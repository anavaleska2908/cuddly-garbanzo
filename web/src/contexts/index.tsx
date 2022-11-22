import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AppProviderProps } from "../interfaces";

export const AppProvider = ({ children }: AppProviderProps) => (
	<ChakraProvider theme={theme}>{children}</ChakraProvider>
);
