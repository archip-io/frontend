export function manageElementJustifyContent(selectors: string) {
    const element = document.querySelector(selectors) as HTMLElement
    if (!element) {
        return
    }

    element.style.height = 'fit-content'
    const fitContentHeight = element.clientHeight
    element.style.height = '100%'
    const maxHeight = element.clientHeight

    element.style.justifyContent = fitContentHeight >= maxHeight ? 'flex-start' : 'center'
}
