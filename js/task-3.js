function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content)
    const paddingWidth = Number.parseFloat(padding)
    const borderWidth = Number.parseFloat(border)

    return contentWidth + (paddingWidth * 2) + (borderWidth * 2)
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
