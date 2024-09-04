interface BuildQueryParams {
    type: string,
    query: string,
    category: string,
    page: number,
    perPages?: number
}


export const buildQuery = (params: BuildQueryParams) => {
    const { type, query, category, page = 1, perPages = 10 } = params
    const conditions = [`*[_type=="${type}"]`]

    if (query) conditions.push(`title mach "*${query}*"`)
    if (category && category !== 'all') {
        conditions.push(`category == "${category}"`)
    }

    // calculate pagination limits
    const offset = (page - 1) * perPages;
    const limit = perPages

    if (conditions.length > 1) {
        return `${conditions[0]
            }
             && (${conditions.slice(1).join("&&")
            } )]
                 
        [${offset}...${limit}]`;
    } else {
        return `${conditions[0]}[${offset}...${limit}]`
    }
}

