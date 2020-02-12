export const filterComments = (filter, source) => {
    const f = filter.toUpperCase();
    const filtered = source.filter(
        c =>
            c.name.toUpperCase().includes(f) ||
            c.email.toUpperCase().includes(f) ||
            c.body.toUpperCase().includes(f)
    );

    return filtered;
}
