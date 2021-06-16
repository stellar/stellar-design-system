import {
  Layout,
  Heading2,
  Heading1,
  InfoBlock,
  TextLink,
} from "@stellar/design-system";
import { ComponentsList } from "components/ComponentsList";
import { useSideNavEnabled } from "hooks/useSideNavEnabled";

export const Landing = ({ sideNavEnabled }: { sideNavEnabled?: boolean }) => {
  useSideNavEnabled(Boolean(sideNavEnabled));

  return (
    <Layout.Inset>
      <Heading1>Stellar Design System</Heading1>

      <div className="Section">
        <div className="Section__content">
          <p>
            Stellar Design System (SDS) is an opinionated React component
            library (we hope it will grow into a full-featured design system in
            the future) used in Stellar Development Foundation’s Web projects.
          </p>

          <InfoBlock variant={InfoBlock.variant.warning}>
            This project is at an early development stage. It is very likely the
            API will have many breaking changes.
          </InfoBlock>
        </div>
      </div>

      <div className="Section">
        <div className="Section__content">
          <Heading2>Tech stack</Heading2>

          <ul>
            <li>TypeScript</li>
            <li>React for UI</li>
            <li>Sass for CSS styling</li>
            <li>Yarn</li>
            <li>Webpack</li>
          </ul>
        </div>
      </div>

      <div className="Section">
        <div className="Section__content">
          <Heading2>Current version</Heading2>

          <TextLink href="https://www.npmjs.com/package/@stellar/design-system">
            <img
              src="https://img.shields.io/npm/v/@stellar/design-system.svg?style=flat-square"
              alt="npm version"
            />
          </TextLink>
        </div>
      </div>

      <div className="Section">
        <div className="Section__content">
          <Heading2>Usage</Heading2>

          <p>
            Install using <code>npm</code> or <code>yarn</code>.
          </p>

          <p>
            <code>npm install @stellar/design-system</code>
          </p>

          <p>
            <code>yarn add @stellar/design-system</code>
          </p>

          <p>
            Add the main CSS file to your project (for example, the main{" "}
            <code>index</code> file of your React project).
          </p>

          <p>
            <code>import "@stellar/design-system/dist/styles.min.css";</code>
          </p>

          <p>Import components in your project.</p>

          <p>
            <code>{`import { Button, Input } from "@stellar/design-system";`}</code>
          </p>
        </div>
      </div>

      <div className="Section">
        <div className="Section__content">
          <Heading2>Local development</Heading2>

          <p>The design system repo has two parts:</p>

          <ul>
            <li>
              <code>@stellar/design-system</code> - everything for the design
              system (
              <TextLink href="https://github.com/stellar/stellar-design-system/tree/main/%40stellar/design-system">
                repo
              </TextLink>
              )
            </li>
            <li>
              <code>@stellar/design-system-website</code> - website for the
              design system (what you are looking at now) (
              <TextLink href="https://github.com/stellar/stellar-design-system/tree/main/%40stellar/design-system-website">
                repo
              </TextLink>
              )
            </li>
          </ul>

          <p>
            To run <code>@stellar/design-system</code> or Stellar Design System
            locally:
          </p>

          <ul>
            <li>
              Clone the repo:{" "}
              <code>
                git clone git@github.com:stellar/stellar-design-system.git
              </code>
            </li>
            <li>
              Install dependencies: <code>yarn</code> or{" "}
              <code>yarn install</code>
            </li>
            <li>
              Scripts to develop and build locally:
              <ul>
                <li>
                  <code>build:sds</code> build Stellar Design System (
                  <code>sds</code>) project only
                </li>
                <li>
                  <code>build:sds-web</code> build Stellar Design System Website
                  (<code>sds-web</code>) project only
                </li>
                <li>
                  <code>build</code> build both projects
                </li>
                <li>
                  <code>start:sds</code> start <code>sds</code> project for
                  local development
                </li>
                <li>
                  <code>start:sds-web</code> start <code>sds-web</code> project
                  for local development
                </li>
                <li>
                  <code>clean</code> delete <code>node_modules</code> and{" "}
                  <code>build</code> directories in the whole repo
                </li>
              </ul>
            </li>
          </ul>

          <InfoBlock>
            You need to run each <code>start</code> command in its own window or
            tab.
          </InfoBlock>
        </div>
      </div>

      <div className="Section">
        <div className="Section__content">
          <Heading2>Components</Heading2>
          <p>
            Below is a list of all components and assets. Click on the links to
            view details of the component.
          </p>
        </div>

        <ComponentsList />
      </div>
    </Layout.Inset>
  );
};
