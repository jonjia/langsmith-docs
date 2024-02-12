/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    "index",
    "overview",
    "setup",
    "pricing",
    {
      type: "category",
      label: "Self-Hosting",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "self_hosting" }],
      link: {
        type: "generated-index",
        description: 'Self-hosting LangSmith requires an enterprise license. Check out the guides below for more information.',
      },
    },
    {
      type: "category",
      label: "Tracing",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "tracing" }],
      link: {
        type: "generated-index",
        description: 'Learn how to trace and debug your LLM applications with LangSmith.',
      },
    },
    {
      type: "category",
      label: "Evaluation",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "evaluation" }],
      link: {
        type: "generated-index",
        description: 'Learn how to evaluate your LLM applications with LangSmith.',
      }
    },
    {
      type: "category",
      label: "Prompt Hub",
      collapsed: true,
      collapsible: true,
      items: [
        { type: "autogenerated", dirName: "hub" }
      ],
      link: {
        type: "generated-index",
        description: 'Discover, share, and version control prompts in the Prompt Hub.',
      },
    },
    {
      type: "category",
      label: "Release Notes",
      collapsed: true,
      collapsible: true,
      items: [
        { type: "autogenerated", dirName: "release_notes" }
      ],
      link: {
        type: "generated-index",
        description: 'Learn more about new features, requirements and changes to LangSmith.',
      },
    }
  ],
};
