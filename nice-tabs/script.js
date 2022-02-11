const $tabs = document.querySelectorAll('.nice-tabs .tab')

$tabs.forEach(el => {
    el.onclick = () => {
        if ([...el.classList].includes('active')) return
        
        const niceTabs = el.parentElement.parentElement
        const clickedTabId = el.dataset.tab
        const clickedContent = niceTabs.querySelector(`[data-tab-content="${clickedTabId}"]`)
        
        niceTabs.forEach(el2 => {
            el2.classList.remove('active')
        })

        el.classList.add('active')

        clickedContent
    }
})