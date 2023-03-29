export default (value?: string, replaceBy?: any) => {
    if (typeof value == 'string' && !!value.trim()) {
        return value;
    }

    return String(replaceBy ?? '');
}
