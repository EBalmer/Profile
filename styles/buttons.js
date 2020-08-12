export const base = {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
};

export const border = {
    borderWidth: 5,
    borderRadius: 10
};

export const square = {
    aspectRatio: 1,
    maxHeight: 175
};

export const homeMenu = {
    ...base,
    ...border,
    ...square
}
