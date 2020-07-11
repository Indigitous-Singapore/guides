(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "index.md",
                title: "Index",
                url: "/begin-project-planning/",
                escapedPath: "begin-project-planning/index.md",
                dir: "/begin-project-planning/",
                tocId: "toc_/begin-project-planning/",
                documentInfo: ["How to begin project planning",null,["index.md"]]
            },
            
        {
                name: "README.md",
                title: "Introduction",
                url: "/introduction/",
                escapedPath: "introduction/README.md",
                dir: "/introduction/",
                tocId: "toc_/introduction/",
                documentInfo: ["Introduction",null,["index.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()