const importComponent = `import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  Button,
  Center
} from "@hope-ui/solid";`;

const basicUsage = `<Menu>
    {({ opened }) => (
        <>
            <MenuTrigger
              as={Button}
              variant="subtle"
              colorScheme="info">
              {opened() ? "Options" : "Option 1"}
            </MenuTrigger>
            <MenuContent>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </MenuContent>
          </>
        )}
</Menu>`;
export const snippets = { importComponent, basicUsage };
