export type StructuredDataPrimitive = string | number | boolean;

export type StructuredDataValue =
  StructuredDataPrimitive | StructuredDataObject | StructuredDataValue[];

export interface StructuredDataObject {
  [property: string]: StructuredDataValue | undefined;
}

export interface StructuredDataNode extends StructuredDataObject {
  "@type": string | string[];
  "@id"?: string;
}

export function createBreadcrumbList(
  homeUrl: string,
  currentUrl: string,
  currentName: string,
): StructuredDataNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentName,
        item: currentUrl,
      },
    ],
  };
}

export function serializeStructuredData(
  nodes: StructuredDataNode[],
): string | null {
  if (nodes.length === 0) return null;

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  }).replaceAll("<", "\\u003c");
}
