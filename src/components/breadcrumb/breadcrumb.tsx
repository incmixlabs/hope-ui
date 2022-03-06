import { children, For, JSX, mergeProps, Show, splitProps } from "solid-js";

import { SystemStyleObject } from "@/styled-system/types";
import { useComponentStyleConfigs } from "@/theme/provider";
import { isArray } from "@/utils/assertion";
import { classNames, createClassSelector } from "@/utils/css";

import { Box } from "../box/box";
import { ElementType, HTMLHopeProps } from "../types";
import { breadcrumbListStyles, breadcrumbStyles } from "./breadcrumb.styles";
import { BreadcrumbItem } from "./breadcrumb-item";
import { BreadcrumbSeparator, BreadcrumbSeparatorOptions } from "./breadcrumb-separator";
import { BreadcrumbLink } from "./breadcrumb-link";

export interface BreadcrumbStyleConfig {
  baseStyle?: {
    root?: SystemStyleObject;
    item?: SystemStyleObject;
    link?: SystemStyleObject;
    separator?: SystemStyleObject;
  };
  defaultProps?: {
    root?: Pick<BreadcrumbOptions, "separator" | "spacing">;
  };
}

export interface BreadcrumbOptions extends BreadcrumbSeparatorOptions {
  /**
   * The visual separator between each breadcrumb item
   */
  separator?: string | JSX.Element;
}

export type BreadcrumbProps<C extends ElementType = "nav"> = HTMLHopeProps<C, BreadcrumbOptions>;

const hopeBreadcrumbClass = "hope-breadcrumb";
const hopeBreadcrumbListClass = "hope-breadcrumb__list";

/**
 * Breadcrumb is used to render a breadcrumb navigation landmark.
 * It renders a `nav` element with `aria-label` set to `breadcrumb`
 */
export function Breadcrumb<C extends ElementType = "nav">(props: BreadcrumbProps<C>) {
  const theme = useComponentStyleConfigs().Breadcrumb;

  const defaultProps: BreadcrumbProps<"nav"> = {
    as: "nav",
    separator: theme?.defaultProps?.root?.separator ?? "/",
    spacing: theme?.defaultProps?.root?.spacing ?? "0.5rem",
  };

  const propsWithDefault: BreadcrumbProps<"nav"> = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "children", "separator", "spacing"]);

  const rootClasses = () => classNames(local.class, hopeBreadcrumbClass, breadcrumbStyles());

  const listClasses = () => classNames(hopeBreadcrumbListClass, breadcrumbListStyles());

  const links = () => {
    const items = children(() => local.children)();
    return isArray(items) ? items : [items];
  };

  const isLastLink = (index: number) => {
    return index + 1 === links().length;
  };

  return (
    <Box as="nav" aria-label="breadcrumb" class={rootClasses()} __baseStyle={theme?.baseStyle?.root} {...others}>
      <Box as="ol" class={listClasses()}>
        <For each={links()}>
          {(link, index) => (
            <BreadcrumbItem>
              {link}
              <Show when={!isLastLink(index())}>
                <BreadcrumbSeparator spacing={local.spacing}>{local.separator}</BreadcrumbSeparator>
              </Show>
            </BreadcrumbItem>
          )}
        </For>
      </Box>
    </Box>
  );
}

Breadcrumb.toString = () => createClassSelector(hopeBreadcrumbClass);

Breadcrumb.Link = BreadcrumbLink;
//Breadcrumb.Item = BreadcrumbItem;
//Breadcrumb.Separator = BreadcrumbSeparator;
