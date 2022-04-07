import {
  Anchor,
  HStack,
  ListItem,
  Switch,
  SwitchControl,
  SwitchLabel,
  Text,
  UnorderedList,
  VStack,
} from "@hope-ui/solid";
import Prism from "prismjs";
import { Link } from "solid-app-router";
import { onMount } from "solid-js";

import Code from "@/components/Code";
import CodeSnippet from "@/components/CodeSnippet";
import { ContextualNavLink } from "@/components/ContextualNav";
import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import { Preview } from "@/components/Preview";
import { PropsTable, PropsTableItem } from "@/components/PropsTable";
import SectionSubtitle from "@/components/SectionSubtitle";
import SectionTitle from "@/components/SectionTitle";

import { snippets } from "./snippets";

export default function SwitchDoc() {
  const previousLink: ContextualNavLink = {
    href: "/docs/data-entry/select",
    label: "Select",
  };

  const nextLink: ContextualNavLink = {
    href: "/docs/data-entry/textarea",
    label: "Textarea",
  };

  const contextualNavLinks: ContextualNavLink[] = [
    { href: "#import", label: "Import" },
    { href: "#usage", label: "Usage" },
    { href: "#colors", label: "Switch colors", indent: true },
    { href: "#sizes", label: "Switch sizes", indent: true },
    { href: "#variants", label: "Switch variants", indent: true },
    { href: "#disabled", label: "Disabled state", indent: true },
    { href: "#invalid", label: "Invalid state", indent: true },
    { href: "#composition", label: "Composition" },
    { href: "#theming", label: "Theming" },
    { href: "#props", label: "Props" },
    { href: "#switch-props", label: "Switch props", indent: true },
    { href: "#other-components-props", label: "Other components props", indent: true },
  ];

  const propItems: PropsTableItem[] = [
    {
      name: "variant",
      description: "The visual style of the switch control.",
      type: '"outline" | "filled"',
      defaultValue: '"outline"',
    },
    {
      name: "colorScheme",
      description: "The color of the switch control.",
      type: '"primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger"',
      defaultValue: '"primary"',
    },
    {
      name: "size",
      description: "The size of the switch control.",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
    },
    {
      name: "id",
      description: "The id to be passed to the internal <input> tag.",
      type: "string",
    },
    {
      name: "name",
      description: "The name to be passed to the internal <input> tag.",
      type: "string",
    },
    {
      name: "value",
      description:
        "The value to be used in the switch input. This is the value that will be returned on form submission.",
      type: "string | number",
    },
    {
      name: "checked",
      description:
        "If `true`, the switch will be checked. You'll need to pass `onChange` to update its value (since it is now controlled).",
      type: "boolean",
    },
    {
      name: "defaultChecked",
      description: "If `true`, the switch will be initially checked.",
      type: "boolean",
    },
    {
      name: "required",
      description: "If `true`, the switch is marked as required, and `required` attribute will be added",
      type: "boolean",
    },
    {
      name: "disabled",
      description: "If `true`, the switch will be disabled.",
      type: "boolean",
    },
    {
      name: "invalid",
      description: "If `true`, the switch will have `aria-invalid` set to `true`.",
      type: "boolean",
    },
    {
      name: "readOnly",
      description: "If `true`, the switch will be readonly.",
      type: "boolean",
    },
    {
      name: "children",
      description: "The children of the switch. If used as a render props, the `checked` state will be passed.",
      type: "JSX.Element | (props: { checked: boolean }) => JSX.Element",
    },
    {
      name: "onChange",
      description: "The callback invoked when the checked state of the `Switch` changes.",
      type: "JSX.EventHandlerUnion<HTMLInputElement, Event>",
    },
    {
      name: "onFocus",
      description: "The callback invoked when the switch is focused.",
      type: "JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>",
    },
    {
      name: "onBlur",
      description: "The callback invoked when the switch is blurred (loses focus).",
      type: "JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>",
    },
  ];

  onMount(() => {
    Prism.highlightAll();
  });

  return (
    <PageLayout previousLink={previousLink} nextLink={nextLink} contextualNavLinks={contextualNavLinks}>
      <PageTitle>Switch</PageTitle>
      <Text mb="$5">
        The <Code>Switch</Code> component is used as an alternative for the{" "}
        <Anchor as={Link} href="/docs/data-entry/checkbox" color="$primary11" fontWeight="$semibold">
          Checkbox
        </Anchor>{" "}
        component. You can switch between enabled or disabled states.
      </Text>
      <SectionTitle id="import">Import</SectionTitle>
      <CodeSnippet snippet={snippets.importComponent} mb="$6" />
      <UnorderedList spacing="$2" mb="$12">
        <ListItem>
          <strong>Switch:</strong> Provides context for all its children. It renders a <Code>label</Code> and a visualy
          hidden <Code>input</Code> with type set to <Code>checkbox</Code> and role set to <Code>switch</Code>.
        </ListItem>
        <ListItem>
          <strong>SwitchControl:</strong> The component that visualy represents a switch. It's not visible by screen
          readers.
        </ListItem>
        <ListItem>
          <strong>SwitchLabel:</strong> The label of the switch.
        </ListItem>
      </UnorderedList>
      <SectionTitle id="usage">Usage</SectionTitle>
      <Text mb="$5"></Text>
      <Preview snippet={snippets.basicUsage} mb="$12">
        <Switch defaultChecked>
          <SwitchLabel>Switch</SwitchLabel>
          <SwitchControl />
        </Switch>
      </Preview>
      <SectionSubtitle id="colors">Switch colors</SectionSubtitle>
      <Text mb="$5">
        Use the <Code>colorScheme</Code> prop to change the color of the Switch. You can set the value to{" "}
        <Code>primary</Code>, <Code>accent</Code>, <Code>neutral</Code>, <Code>success</Code>, <Code>info</Code>,{" "}
        <Code>warning</Code> or <Code>danger</Code>.
      </Text>
      <Preview snippet={snippets.switchColors} mb="$10">
        <HStack spacing="$4">
          <Switch defaultChecked colorScheme="primary">
            <SwitchControl />
          </Switch>
          <Switch defaultChecked colorScheme="accent">
            <SwitchControl />
          </Switch>
          <Switch defaultChecked colorScheme="neutral">
            <SwitchControl />
          </Switch>
          <Switch defaultChecked colorScheme="success">
            <SwitchControl />
          </Switch>
          <Switch defaultChecked colorScheme="info">
            <SwitchControl />
          </Switch>
          <Switch defaultChecked colorScheme="warning">
            <SwitchControl />
          </Switch>
          <Switch defaultChecked colorScheme="danger">
            <SwitchControl />
          </Switch>
        </HStack>
      </Preview>
      <SectionSubtitle id="sizes">Switch sizes</SectionSubtitle>
      <Text mb="$5">
        Use the <Code>size</Code> prop to change the size of the Switch. You can set the value to <Code>sm</Code>,{" "}
        <Code>md</Code> or <Code>lg</Code>.
      </Text>
      <Preview snippet={snippets.switchSizes} mb="$10">
        <HStack spacing="$4">
          <Switch defaultChecked size="sm">
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
          <Switch defaultChecked size="md">
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
          <Switch defaultChecked size="lg">
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
        </HStack>
      </Preview>
      <SectionSubtitle id="variants">Switch variants</SectionSubtitle>
      <Text mb="$5">
        Use the <Code>variant</Code> prop to change the visual style of the Switch. You can set the value to{" "}
        <Code>outline</Code> or <Code>filled</Code>.
      </Text>
      <Preview snippet={snippets.switchVariants} mb="$10">
        <HStack spacing="$4">
          <Switch variant="filled">
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
          <Switch variant="outline">
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
        </HStack>
      </Preview>
      <SectionSubtitle id="disabled">Disabled state</SectionSubtitle>
      <Text mb="$5">
        Use the <Code>disabled</Code> prop to disable the Switch.
      </Text>
      <Preview snippet={snippets.switchDisabled} mb="$10">
        <HStack spacing="$4">
          <Switch disabled>
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
          <Switch variant="outline" disabled>
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
          <Switch defaultChecked disabled>
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
        </HStack>
      </Preview>
      <SectionSubtitle id="invalid">Invalid state</SectionSubtitle>
      <Text mb="$5">
        Use the <Code>invalid</Code> prop to mark the Switch as invalid.
      </Text>
      <Preview snippet={snippets.switchInvalid} mb="$12">
        <HStack spacing="$4">
          <Switch invalid>
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
          <Switch variant="outline" invalid>
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
          <Switch defaultChecked invalid>
            <SwitchLabel>Switch</SwitchLabel>
            <SwitchControl />
          </Switch>
        </HStack>
      </Preview>
      <SectionTitle id="composition">Composition</SectionTitle>
      <Text mb="$5">
        <Code>Switch</Code> is made up of several components that you can customize to achieve your desired design.
      </Text>
      <Preview snippet={snippets.composition} mb="$12">
        <Switch
          border="1px solid $neutral7"
          rounded="$sm"
          px="$5"
          py="$3"
          w="$full"
          transition="box-shadow 250ms"
          _focus={{
            borderColor: "$primary7",
            shadow: "0 0 0 3px $colors$primary5",
          }}
        >
          <SwitchLabel w="$full">
            <VStack alignItems="flex-start">
              <Text size="sm" fontWeight="$semibold">
                Annual billing
              </Text>
              <Text size="xs" color="$neutral11">
                Save 10%
              </Text>
            </VStack>
          </SwitchLabel>
          <SwitchControl
            _focus={{
              borderColor: "$neutral7",
              shadow: "$none",
            }}
          />
        </Switch>
      </Preview>
      <SectionTitle id="theming">Theming</SectionTitle>
      <Text mb="$5">
        <Code>Switch</Code> base styles and default props can be overridden in the Hope UI theme configuration like
        below:
      </Text>
      <CodeSnippet lang="js" snippet={snippets.theming} mb="$12" />
      <SectionTitle id="props">Props</SectionTitle>
      <SectionSubtitle id="switch-props">Switch props</SectionSubtitle>
      <PropsTable items={propItems} mb="$10" />
      <SectionSubtitle id="other-components-props">Other components props</SectionSubtitle>
      <Text>
        <Code>SwitchControl</Code> and <Code>SwitchLabel</Code> composes{" "}
        <Anchor as={Link} href="/docs/layout/box" color="$primary11" fontWeight="$semibold">
          Box
        </Anchor>
        .
      </Text>
    </PageLayout>
  );
}
