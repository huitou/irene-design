export const getI = () => {
    let i = 0;
    const viewWidth = window.innerWidth;
    if (viewWidth > 319 && viewWidth < 414) { i = 0; }
    else if (viewWidth > 413 && viewWidth < 640) { i = 1; }
    else if (viewWidth > 639 && viewWidth < 768) { i = 2; }
    else if (viewWidth > 767 && viewWidth < 1024) { i = 3; }
    else if (viewWidth > 1023) { i = 4; }

    console.log('viewWidth:', viewWidth);
    console.log('i:', i);

    return i;
};
