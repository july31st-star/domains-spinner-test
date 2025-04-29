import {
  Page,
  Text,
  Box,
  BlockStack,
  InlineStack,
  Button,
  Badge,
  Link,
  Card,
  Icon,
  Spinner,
} from "@shopify/polaris";
import {
  ArrowLeftIcon,
  GlobeIcon,
  CheckIcon,
  CheckCircleIcon,
} from "@shopify/polaris-icons";
import Player from "lottie-react";
import lottieSpinner from "./lottie-spinner.json";

export default function App() {
  return (
    <Page
      backAction={{ content: "Settings", icon: ArrowLeftIcon }}
      title="custom-storefronts.com"
      titleMetadata={<Badge tone="success">Live</Badge>}
      secondaryActions={[{ content: "View", variant: "tertiary" }]}
    >
      <BlockStack gap="500">
        <Text tone="subdued" as="p">
          Managed by Hostinger · Connected on Nov 1, 2024
        </Text>

        <Card>
          <BlockStack gap="400">
            <div
              style={{
                maxWidth: "100%",
                height: "200px",
                background: "#6AB09A",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "20px",
                  bottom: "-40px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "#5A9B86",
                }}
              />
            </div>

            <BlockStack gap="300">
              <InlineStack gap="200" align="start">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Player
                    autoplay
                    loop
                    animationData={lottieSpinner}
                    style={{ width: 16, height: 16 }}
                    aria-label="Loading DNS status"
                  />
                </div>
                <Text as="p">DNS records are pointing to Shopify</Text>
              </InlineStack>

              <InlineStack gap="200" align="start">
                <div style={{ maxWidth: "20px" }}>
                  <Icon source={CheckCircleIcon} tone="success" />
                </div>
                <Text as="p">Domain is live in all regions globally</Text>
              </InlineStack>

              <InlineStack gap="200" align="start">
                <div style={{ maxWidth: "20px" }}>
                  <Icon source={CheckCircleIcon} tone="success" />
                </div>
                <Text as="p">
                  TLS certificate provisioned for secure connections
                </Text>
              </InlineStack>
            </BlockStack>
          </BlockStack>
        </Card>

        <Card>
          <BlockStack gap="400">
            <Text variant="headingSm" as="h3">
              Settings
            </Text>

            <BlockStack gap="400">
              <Box
                paddingBlockEnd="400"
                borderBlockEndWidth="025"
                borderColor="border"
              >
                <InlineStack align="space-between">
                  <BlockStack gap="100">
                    <Text as="h3" variant="headingSm">
                      Target
                    </Text>
                    <Text as="p">Online Store</Text>
                  </BlockStack>
                  <Button variant="secondary">Change</Button>
                </InlineStack>
              </Box>

              <InlineStack align="space-between">
                <BlockStack gap="100">
                  <Text as="h3" variant="headingSm">
                    Domain type
                  </Text>
                  <Text as="p">Primary domain</Text>
                </BlockStack>
                <Button variant="secondary">Change</Button>
              </InlineStack>
            </BlockStack>
          </BlockStack>
        </Card>

        <InlineStack align="space-between">
          <Text as="p">
            Learn more about <Link url="#">domains</Link>
          </Text>
          <Button tone="critical" variant="tertiary">
            Remove domain
          </Button>
        </InlineStack>
      </BlockStack>
    </Page>
  );
}
