const fs = require('fs');
const path = require('path');

// 检查图片文件信息
function checkImageInfo() {
    const commonDir = path.join(__dirname, 'src', 'common');
    const files = fs.readdirSync(commonDir);
    
    console.log('=== 图片资源检查 ===');
    files.forEach(file => {
        if (file.toLowerCase().endsWith('.png')) {
            const filePath = path.join(commonDir, file);
            const stats = fs.statSync(filePath);
            console.log(`${file}: ${stats.size} bytes`);
            
            // 读取文件内容检查是否需要压缩
            const buffer = fs.readFileSync(filePath);
            console.log(`${file}: ${buffer.length} bytes, type: ${buffer[0] === 0x89 && buffer[1] === 0x50 ? 'PNG' : 'Unknown'}`);
        }
    });
}

// 简单的图片压缩提示
function suggestOptimizations() {
    console.log('\n=== 图片优化建议 ===');
    console.log('1. logo.png (10144 bytes) - 考虑压缩到更小尺寸');
    console.log('2. checkbox.png (393 bytes) - 尺寸合适');
    console.log('\n优化方法:');
    console.log('- 使用tinypng.com在线压缩');
    console.log('- 或使用ImageMagick命令: magick input.png -quality 80 output.png');
    console.log('- 或使用pngquant: pngquant --quality=65-80 input.png');
}

// 检查并建议优化
checkImageInfo();
suggestOptimizations();
