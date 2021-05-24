import { Layout, Heading2, Heading3 } from "@stellar/design-system";

import { RouteLink } from "components/RouteLink";
import { componentDetails } from "constants/componentDetails";
import React from "react";
import { ComponentDetailsId, Routes } from "types/types.d";

const componentsDisplayOrder = [
  ComponentDetailsId.typography,
  ComponentDetailsId.branding,
  ComponentDetailsId.assets,
  ComponentDetailsId.identicons,
  ComponentDetailsId.loaders,
  ComponentDetailsId.infoBlocks,
  ComponentDetailsId.buttons,
  ComponentDetailsId.iconButtons,
  ComponentDetailsId.textLinks,
  ComponentDetailsId.inputs,
  ComponentDetailsId.selects,
  ComponentDetailsId.checkboxes,
  ComponentDetailsId.radioButtons,
  ComponentDetailsId.toggles,
  ComponentDetailsId.modals,
];

export const Landing = () => (
  <Layout.Inset>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero provident
      omnis eius nulla odit rerum ducimus impedit hic iusto, maiores repellendus
      officia vel illum, alias aspernatur molestiae minus ipsa officiis.
    </p>

    <Heading2>Getting started</Heading2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero provident
      omnis eius nulla odit rerum ducimus impedit hic iusto, maiores repellendus
      officia vel illum, alias aspernatur molestiae minus ipsa officiis.
    </p>

    <Heading3>Repos</Heading3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero provident
      omnis eius nulla odit rerum ducimus impedit hic iusto, maiores repellendus
      officia vel illum, alias aspernatur molestiae minus ipsa officiis.
    </p>

    <Heading3>Local development</Heading3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero provident
      omnis eius nulla odit rerum ducimus impedit hic iusto, maiores repellendus
      officia vel illum, alias aspernatur molestiae minus ipsa officiis.
    </p>

    <Heading2>Components</Heading2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero provident
      omnis eius nulla odit rerum ducimus impedit hic iusto, maiores repellendus
      officia vel illum, alias aspernatur molestiae minus ipsa officiis.
    </p>

    {componentsDisplayOrder.map((key, index) => {
      const comp = componentDetails[key];

      if (!comp) {
        return null;
      }

      return (
        <div key={key}>
          <Heading3>
            <RouteLink href={`./${Routes.component}/${comp.id}`}>
              {comp.title}
            </RouteLink>
          </Heading3>
          {comp.description}

          <div>
            {comp.displayExamples.map((example) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={`example-${comp.id}-${index}`}>
                {example}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    })}
  </Layout.Inset>
);
