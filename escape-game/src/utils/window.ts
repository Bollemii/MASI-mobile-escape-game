const possibleRatio = ["16:9", "5:4", "4:3", "3:2", "1:1"];

export function getRatio(width: number, height: number): string {
    const scale = width < height ? height / width : width / height;
    let ratioDiff = 100;
    let bestRatio = possibleRatio[0];
    
    for (const possible of possibleRatio) {
        const [width, height] = possible.split(':').map(Number);
        const diff = Math.abs((width / height) - scale);
        
        if (diff < ratioDiff) {
            ratioDiff = diff;
            bestRatio = possible;
        }
    }
    
    return bestRatio;
}
