import type { DeepPartial } from 'keycloakify/tools/DeepPartial'

import LoginApp from '../LoginApp.tsx'
import { type KcContext, getKcContext } from '../kcContext.ts'

export function createPageStory<PageId extends KcContext['pageId']>(parameters: { pageId: PageId }) {
    const { pageId } = parameters

    function PageStory(parameters_: { kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>> }) {
        const { kcContext } = getKcContext({
            mockPageId: pageId,
            storyPartialKcContext: parameters_.kcContext,
        })

        return <LoginApp kcContext={kcContext} />
    }

    return { PageStory }
}
