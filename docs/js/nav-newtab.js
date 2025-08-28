// Open the "Public Gists" nav link in a new tab.
// Works on initial load and on Material's client-side page swaps.

function setNewTabForPublicGists() {
    const paths = [
        '/public-gists-from-Rich-Lewis/',
        `${location.origin}/public-gists-from-Rich-Lewis/`,
        'https://richlewis007.github.io/public-gists-from-Rich-Lewis/',
        'https://github.richlewis007.com/public-gists-from-Rich-Lewis/'
    ];

    const selector = paths.map(u => `a[href="${u}"]`).join(',');
    document.querySelectorAll(selector).forEach(a => {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
    });
}

// Run on first load
document.addEventListener('DOMContentLoaded', setNewTabForPublicGists);

// Run on every client-side page change (Material hook)
if (window.document$) {
    window.document$.subscribe(setNewTabForPublicGists);
}
