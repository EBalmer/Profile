export const base = {
    flex: 1
};

export const center = {
    alignItems: 'center',
    justifyContent: 'center'
}

export const row = {
    flexDirection: 'row'
}

export const menuRow = {
    ...base,
    ...row
}

export const buttonContainer = {
    ...base,
    ...center
}