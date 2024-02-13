import { Meta, StoryObj } from "@storybook/react";

import { createPageStory } from "./createPageStory.tsx";

const { PageStory } = createPageStory({
  pageId: "login.ftl",
});

const loginMeta: Meta<typeof PageStory> = {
  component: PageStory,
  parameters: {
    layout: "fullscreen",
  },
  title: "Pages/Login",
};

export default loginMeta;

type LoginStory = StoryObj<typeof loginMeta>;

// @ts-ignore
export const WithoutGmailProvider: LoginStory = () => <PageStory />;

// @ts-ignore
export const WithGmailProvider: LoginStory = () => (
  <PageStory
    kcContext={{
      social: {
        providers: [
          {
            alias: "google",
            displayName: "Google",
            loginUrl: "google",
            providerId: "google",
          },
        ],
      },
    }}
  />
);
