// This script sets all external links (links to other domains) to open in a new tab.

function setNewTabForExternalLinks() {
    const origin = location.origin;
    document.querySelectorAll('a[href^="http"]').forEach(a => {
        if (!a.href.startsWith(origin)) {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

document.addEventListener('DOMContentLoaded', setNewTabForExternalLinks);
if (window.document$) {
    window.document$.subscribe(setNewTabForExternalLinks);
}
