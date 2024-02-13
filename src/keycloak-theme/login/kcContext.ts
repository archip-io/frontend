import { createGetKcContext } from "keycloakify/login";

export type KcContextExtension = { pageId: "login.ftl" };

export const { getKcContext } = createGetKcContext<KcContextExtension>({
  mockData: [
    {
      locale: {
        currentLanguageTag: "ru",
      },
      pageId: "login.ftl",
    },
  ],
});

export const { kcContext } = getKcContext({});

export type KcContext = NonNullable<
  ReturnType<typeof getKcContext>["kcContext"]
>;
