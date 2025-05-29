// src/CustomerAccount.jsx
import React from "react";
import {
  reactExtension,
  Text,
  BlockStack,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension("customer-account.page.render", () => {
  return (
    <BlockStack>
      <Text size="large">Hello World from React!</Text>
    </BlockStack>
  );
});
